import React from 'react'
import IconChevronLeft from '../SVGIcons/IconChevronLeft'
import IconChevronRight from '../SVGIcons/IconChevronRight'
import type { Table } from '@tanstack/react-table'
import { Input } from '../Input'
import { Button } from '../Button'

interface PaginationProps<T> {
  table: Table<T>
}

export function AdvancedPagination<TData>({ table }: PaginationProps<TData>) {
  return (
    <div className="flexbox align-items--center gap-2">
      <Button
        className="border rounded p-1 flexbox mr-8"
        onClick={() => table.firstPage()}
        iconProps={{
          Component: IconChevronLeft
        }}
        disabled={!table.getCanPreviousPage()}
      />
      <Button
        className="border rounded p-1 mr-8"
        onClick={() => table.previousPage()}
        iconProps={{
          Component: IconChevronLeft
        }}
        disabled={!table.getCanPreviousPage()}
      />
      <Button
        className="border rounded p-1 mr-8"
        onClick={() => table.nextPage()}
        iconProps={{
          Component: IconChevronRight
        }}
        disabled={!table.getCanNextPage()}
      />
      <Button
        className="border rounded p-1 flexbox mr-8"
        onClick={() => table.lastPage()}
        iconProps={{
          Component: IconChevronRight
        }}
        disabled={!table.getCanNextPage()}
      />
      <span className="flexbox align-items--center gap-1">
        <strong>
          {table.getState().pagination.pageIndex + 1} - {table.getPageCount().toLocaleString()}
        </strong>
      </span>
      <span className="flexbox align-items--center gap-1">
        <Input
          type="number"
          min="1"
          max={table.getPageCount()}
          defaultValue={table.getState().pagination.pageIndex + 1}
          onChange={(e) => {
            const page = e.target.value ? Number(e.target.value) - 1 : 0
            table.setPageIndex(page)
          }}
          className="border p-1 rounded w-16"
        />
      </span>
      <select
        value={table.getState().pagination.pageSize}
        onChange={(e) => {
          table.setPageSize(Number(e.target.value))
        }}
      >
        {[10, 20, 30, 40, 50].map((pageSize) => (
          <option key={pageSize} value={pageSize}>
            {pageSize}
          </option>
        ))}
      </select>
    </div>
  )
}
