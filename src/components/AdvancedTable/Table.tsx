import React from 'react'
import { flexRender } from '@tanstack/react-table'
import { DndContext, DragOverlay, closestCenter } from '@dnd-kit/core'
import { SortableContext, horizontalListSortingStrategy } from '@dnd-kit/sortable'
import { ColumnHeader } from './ColumnHeader'
import Skeleton from 'react-loading-skeleton'
import { useTable } from './useTable'
import type { TTableProps } from './types'
import { Text } from '../Text'
import classnames from 'classnames'

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
    <div className="advanced-table scrollbar scrollbar--vertical">
      {header}
      <div className="advanced-table__inner scrollbar scrollbar--horizontal">
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
          onDragCancel={handleDragCancel}
        >
          <div>
            <table style={{ minWidth: table.getCenterTotalSize() }}>
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
                  <tr className={classnames({ ['selected']: row.getIsSelected() })} key={row.id}>
                    {row.getVisibleCells().map((cell) => (
                      <td
                        className={classnames({
                          ['with-checkbox']: cell.column.id === 'select'
                        })}
                        key={cell.id}
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
                    <th className="draggable-col" style={{ width: activeHeader.getSize() }}>
                      <Text weight={'bold'}>
                        {flexRender(
                          activeHeader.column.columnDef.header,
                          activeHeader.getContext()
                        )}
                      </Text>
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
