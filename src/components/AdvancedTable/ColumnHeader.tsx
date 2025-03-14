import React from 'react'
import type { CSSProperties } from 'react'
import type { Header } from '@tanstack/react-table'
import { flexRender } from '@tanstack/react-table'
import { useSortable } from '@dnd-kit/sortable'
import IconArrowDown from '../SVGIcons/IconArrowDown'
import IconArrowSort from '../SVGIcons/IconArrowSort'
import IconArrowUp from '../SVGIcons/IconArrowUp'
import { Text } from '../Text'
import classnames from 'classnames'

interface DraggableColumnHeaderProps<TData> {
  header: Header<TData, unknown>
  isPinned?: boolean
}

export function ColumnHeader<TData>({ header }: DraggableColumnHeaderProps<TData>) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
    id: header.id
  })

  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
        transition,
        width: header.getSize(),
        position: 'relative' as CSSProperties['position'],
        zIndex: isDragging ? 1 : 0
      }
    : {
        width: header.getSize(),
        position: 'relative' as CSSProperties['position'],
        zIndex: isDragging ? 1 : 0
      }

  return (
    <th
      ref={setNodeRef}
      style={style}
      className={classnames('select-none', {
        ['with-checkbox']: header.column.id === 'select',
        ['cursor-pointer']: header.column.getCanSort()
      })}
      {...attributes}
    >
      <div
        onClick={header.column.getToggleSortingHandler()}
        className="flexbox align-items--center"
      >
        <div {...listeners}>
          <Text weight={'bold'}>
            {flexRender(header.column.columnDef.header, header.getContext())}
          </Text>
        </div>
        <span className="ml-4">
          {header.column.getCanSort() &&
            (header.column.getIsSorted() === 'asc' ? (
              <IconArrowUp size="xsmall" />
            ) : header.column.getIsSorted() === 'desc' ? (
              <IconArrowDown size="xsmall" />
            ) : (
              <IconArrowSort size="xsmall" />
            ))}
        </span>
      </div>
      <div
        onMouseDown={header.getResizeHandler()}
        onTouchStart={header.getResizeHandler()}
        className="resize-icon select-none touch-none"
      />
    </th>
  )
}
