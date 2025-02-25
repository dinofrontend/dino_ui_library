import React from 'react'
import type { Table } from '@tanstack/react-table'
import { Button } from '../Button'
import { IconSettings } from '../SVGIcons'

interface ColumnSettingsProps<T> {
  table: Table<T>
}

export function ColumnSettings<T>({ table }: ColumnSettingsProps<T>) {
  return (
    <div className="flexbox justify-content--end align-items--center column-settings">
      <div className="relative">
        <Button
          className="px-4 py-2 bg-gray-100 rounded-md flexbox align-items--center gap-2 hover:bg-gray-200"
          iconProps={{
            Component: IconSettings
          }}
          onClick={() => {
            const menu = document.getElementById('columnMenu')
            menu?.classList.toggle('hidden')
          }}
        />
        <div
          id="columnMenu"
          className="hidden column-menu absolute right-0 mt-2 w-64 bg-white rounded-md shadow-lg z-10 border p-2"
        >
          {table.getAllLeafColumns().map((column) => (
            <div
              key={column.id}
              className={'flexbox align-items--center px-4 py-2 rounded cursor-move'}
            >
              <label className="flexbox align-items--center flex-1 cursor-pointer">
                <input
                  type="checkbox"
                  checked={column.getIsVisible()}
                  onChange={column.getToggleVisibilityHandler()}
                  className="mr-2"
                  disabled={!column.getCanHide()}
                />
                {column.id}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
