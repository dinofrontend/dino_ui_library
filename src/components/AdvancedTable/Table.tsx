import React from 'react'
import { flexRender } from '@tanstack/react-table'
import { DndContext, DragOverlay, closestCenter } from '@dnd-kit/core'
import { SortableContext, horizontalListSortingStrategy } from '@dnd-kit/sortable'
import { ColumnHeader } from './ColumnHeader'
import Skeleton from 'react-loading-skeleton'
import { useTable } from './useTable'
import type { TTableProps } from './types'

export function Table<TData>({
  data,
  columns,
  isLoading,
  withSelect = false,
  defaultPageIndex,
  defaultPageSize,
  renderHeader,
  renderFooter,
  onSortChange,
  onRowSelection,
  onColumnSizing,
  onPaginationChange
}: TTableProps<TData>) {
  const { table, sensors, handleDragStart, handleDragEnd, handleDragCancel, activeHeader } =
    useTable({
      data,
      columns,
      withSelect,
      defaultPageIndex,
      defaultPageSize,
      onSortChange,
      onRowSelection,
      onColumnSizing,
      onPaginationChange
    })

  const header = renderHeader?.(table)
  const footer = renderFooter?.(table)
  return (
    <div className="advanced-table-wrapper">
      {header}
      <div className="overflow-x-auto border rounded-lg">
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
          onDragCancel={handleDragCancel}
        >
          <div className="w-fit">
            <table style={{ width: table.getCenterTotalSize() }}>
              <thead>
                {table.getHeaderGroups().map((headerGroup) => (
                  <tr key={headerGroup.id}>
                    <SortableContext
                      items={headerGroup.headers.map((header) => header.id)}
                      strategy={horizontalListSortingStrategy}
                    >
                      {headerGroup.headers.map((header) => (
                        <ColumnHeader key={header.id} header={header} />
                      ))}
                    </SortableContext>
                  </tr>
                ))}
              </thead>
              <tbody>
                {table.getRowModel().rows.map((row) => (
                  <tr key={row.id}>
                    {row.getVisibleCells().map((cell) => (
                      <td
                        key={cell.id}
                        className="pl-4 pr-4 pt-2 pb-2 border-b"
                        style={{ width: cell.column.getSize() }}
                      >
                        {isLoading ? (
                          <Skeleton />
                        ) : (
                          flexRender(cell.column.columnDef.cell, cell.getContext())
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <DragOverlay dropAnimation={null}>
            {activeHeader && (
              <table style={{ width: activeHeader.getSize() }}>
                <thead>
                  <tr>
                    <th
                      className="pl-4 pr-4 pt-2 pb-2 text-left bg-white border rounded"
                      style={{ width: activeHeader.getSize() }}
                    >
                      <div className="flexbox align-items--center gap-2">
                        {flexRender(
                          activeHeader.column.columnDef.header,
                          activeHeader.getContext()
                        )}
                      </div>
                    </th>
                  </tr>
                </thead>
              </table>
            )}
          </DragOverlay>
        </DndContext>
      </div>
      {footer}
    </div>
  )
}
