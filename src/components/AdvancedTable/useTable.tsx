import type {
  ColumnDef,
  RowSelectionState,
  SortingState,
  Table,
  Row,
  OnChangeFn,
  ColumnSizingState,
  PaginationState
} from '@tanstack/react-table'
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  getPaginationRowModel
} from '@tanstack/react-table'
import type { DragEndEvent, DragStartEvent } from '@dnd-kit/core'
import { MouseSensor, TouchSensor, useSensor, useSensors } from '@dnd-kit/core'
import React, { useState, useMemo } from 'react'
import { IndeterminateCheckbox } from './IndeterminateCheckbox'
import { arrayMove } from '@dnd-kit/sortable'
import type { Column, SortingUpdateEvent, TTableProps } from './types'

export function useTable<TData>({
  withSelect,
  columns,
  data,
  defaultPageSize = 10,
  defaultPageIndex = 0,
  onSortChange,
  onRowSelection,
  onColumnSizing,
  onPaginationChange
}: TTableProps<TData>) {
  const [activeId, setActiveId] = useState<string | null>(null)
  const [sorting, setSorting] = useState<SortingState>([])
  const [rowSelection, setRowSelection] = useState<RowSelectionState>({})
  const [columnSizing, setColumnSizing] = useState<ColumnSizingState>({})
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: defaultPageIndex,
    pageSize: defaultPageSize
  })

  const memoizedColumns = useMemo(() => {
    if (withSelect) {
      return [
        {
          id: 'select',
          enableHiding: false,
          enableColumnDragging: false,
          enablePinning: true,
          header: ({ table }: { table: Table<TData> }) => (
            <IndeterminateCheckbox
              checked={table.getIsAllRowsSelected()}
              indeterminate={table.getIsSomeRowsSelected()}
              onChange={table.getToggleAllRowsSelectedHandler()}
            />
          ),
          cell: ({ row }: { row: Row<TData> }) => (
            <IndeterminateCheckbox
              checked={row.getIsSelected()}
              disabled={!row.getCanSelect()}
              indeterminate={row.getIsSomeSelected()}
              onChange={row.getToggleSelectedHandler()}
            />
          )
        },
        ...columns
      ]
    }
    return columns
  }, [columns])

  const [columnOrder, setColumnOrder] = useState<string[]>(() =>
    memoizedColumns.map((column) => column.id as string)
  )

  const reorderedColumns = columnOrder.map((columnId) =>
    memoizedColumns.find((col) => col.id === columnId)
  ) as ColumnDef<TData>[]

  const handleSortingChange: OnChangeFn<SortingState> = (updaterOrValue) => {
    const newSorting =
      typeof updaterOrValue === 'function' ? updaterOrValue(sorting) : updaterOrValue

    setSorting(newSorting)

    const sortingEvent: SortingUpdateEvent = {
      column: newSorting[0]?.id ?? '',
      direction: newSorting[0]?.desc ? 'desc' : newSorting[0]?.id ? 'asc' : false,
      timestamp: Date.now()
    }
    onSortChange?.(sortingEvent)
  }

  const handleRowSelect: OnChangeFn<RowSelectionState> = (updaterOrValue) => {
    const newSelectionRow =
      typeof updaterOrValue === 'function' ? updaterOrValue(rowSelection) : updaterOrValue

    setRowSelection(newSelectionRow)
    onRowSelection?.(newSelectionRow)
  }

  const handleColumnSizingChange: OnChangeFn<ColumnSizingState> = (updaterOrValue) => {
    const newColumnSizing =
      typeof updaterOrValue === 'function' ? updaterOrValue(columnSizing) : updaterOrValue

    setColumnSizing(newColumnSizing)
    onColumnSizing?.(newColumnSizing)
  }

  const handlePaginationChange: OnChangeFn<PaginationState> = (updaterOrValue) => {
    const newPagination =
      typeof updaterOrValue === 'function' ? updaterOrValue(pagination) : updaterOrValue

    setPagination(newPagination)
    onPaginationChange?.(newPagination)
  }

  const table = useReactTable({
    data,
    columns: reorderedColumns,
    state: {
      sorting,
      pagination,
      columnOrder,
      columnSizing,
      rowSelection
    },
    defaultColumn: {
      minSize: 200,
      size: 150,
      maxSize: 400
    },
    onPaginationChange: handlePaginationChange,
    onColumnSizingChange: handleColumnSizingChange,
    onSortingChange: handleSortingChange,
    onRowSelectionChange: handleRowSelect,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    columnResizeMode: 'onChange',
    manualSorting: !!onSortChange,
    manualPagination: !!onPaginationChange,
    enableRowSelection: true,
    enableColumnResizing: true
  })

  const sensors = useSensors(
    useSensor(MouseSensor, {
      activationConstraint: {
        distance: 8
      }
    }),
    useSensor(TouchSensor, {
      activationConstraint: {
        delay: 200,
        tolerance: 5
      }
    })
  )

  const handleDragStart = (event: DragStartEvent) => {
    setActiveId(event.active.id as string)
    document.body.classList.add('select-none')
  }

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event
    if (over && active.id !== over.id) {
      const oldIndex = columnOrder.indexOf(active.id as string)
      const newIndex = columnOrder.indexOf(over.id as string)
      const oldColumn = reorderedColumns[newIndex] as Column<TData>
      if (oldColumn?.enableColumnDragging === false) {
        return
      }
      const newColumnOrder = arrayMove(columnOrder, oldIndex, newIndex)
      setColumnOrder(newColumnOrder)
    }

    setActiveId(null)
    document.body.classList.remove('select-none')
  }

  const handleDragCancel = () => {
    setActiveId(null)
    document.body.classList.remove('select-none')
  }

  const activeHeader = activeId
    ? table.getHeaderGroups()[0].headers.find((header) => header.id === activeId)
    : null

  return {
    table,
    activeHeader,
    sensors,
    memoizedColumns,
    handleDragCancel,
    handleDragEnd,
    handleDragStart
  }
}
