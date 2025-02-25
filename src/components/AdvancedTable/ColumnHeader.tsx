import React from 'react'
import type { CSSProperties } from 'react'
import type { Header } from '@tanstack/react-table'
import { flexRender } from '@tanstack/react-table'
import { useSortable } from '@dnd-kit/sortable'
import IconArrowDown from '../SVGIcons/IconArrowDown'
import IconArrowSort from '../SVGIcons/IconArrowSort'
import IconArrowUp from '../SVGIcons/IconArrowUp'

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
      className={`pl-4 pr-4 pt-2 pb-2 text-left border-b select-none ${
        isDragging ? 'opacity-50 bg-white shadow-lg' : ''
      } ${header.column.getCanSort() ? 'cursor-pointer select-none' : ''}`}
      {...attributes}
      onClick={header.column.getToggleSortingHandler()}
    >
      <div className="flexbox align-items--center">
        <div {...listeners} className="flexbox align-items--center">
          {flexRender(header.column.columnDef.header, header.getContext())}
        </div>
        <div className="flexbox align-items--center ml-2">
          {header.column.getCanSort() &&
            (header.column.getIsSorted() === 'asc' ? (
              <IconArrowUp size="xsmall" />
            ) : header.column.getIsSorted() === 'desc' ? (
              <IconArrowDown size="xsmall" />
            ) : (
              <IconArrowSort size="xsmall" />
            ))}
        </div>
      </div>
      <div
        onMouseDown={header.getResizeHandler()}
        onTouchStart={header.getResizeHandler()}
        className="absolute right-0 top-0 full-height w-1 cursor-col-resize select-none touch-none"
      />
    </th>
  )
}
