import React, { useId, useRef, useState } from 'react'
import type { Table } from '@tanstack/react-table'
import { Button } from '../Button'
import { IconSettings } from '../SVGIcons'
import { Switcher } from '../Switcher'
import { useOnOutsideClick } from '../../hooks'

interface ColumnSettingsProps<T> {
  table: Table<T>
}

export function ColumnSettings<T>({ table }: ColumnSettingsProps<T>) {
  const menuRef = useRef<HTMLButtonElement | null>(null)
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [dropdownRef, setDropdownRef] = useState<HTMLDivElement | null>(null)

  const handleOutsideClick = () => {
    setIsOpen(false)
  }

  useOnOutsideClick([menuRef.current, dropdownRef], handleOutsideClick, isOpen, useId())
  return (
    <div className="settings-menu">
      <Button
        refHandler={menuRef}
        type={'secondary'}
        iconProps={{
          Component: IconSettings
        }}
        onClick={() => setIsOpen((prev: boolean) => !prev)}
      />
      {isOpen && (
        <div
          ref={(ref) => {
            setDropdownRef(ref)
          }}
          className="settings-menu__dropdown scrollbar scrollbar--vertical"
        >
          {table.getAllLeafColumns().map((column) => (
            <div key={column.id} className={'settings-menu__dropdown__option'}>
              <Switcher
                label={
                  typeof column.columnDef.header === 'string' ? column.columnDef.header : column.id
                }
                selectedValue={column.getIsVisible()}
                onClick={() => {
                  const toggle = column.getToggleVisibilityHandler()
                  if (toggle) {
                    toggle({ target: { checked: !column.getIsVisible() } })
                  }
                }}
                disabled={!column.getCanHide()}
                inlineType={true}
                size={'small'}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
