import React, { useState } from 'react'
import IconChevronLeft from '../SVGIcons/IconChevronLeft'
import IconChevronRight from '../SVGIcons/IconChevronRight'
import type { Table } from '@tanstack/react-table'
import { Input } from '../Input'
import { Button } from '../Button'
import { Select } from '../Select'
import IconChevronDoubleLeft from '../SVGIcons/IconChevronDoubleLeft'
import IconChevronDoubleRight from '../SVGIcons/IconChevronDoubleRight'
import { Text } from '../Text'
import classnames from 'classnames'

interface PaginationProps<T> {
  table: Table<T>
  totalCount: number
}

const OPTIONS: TSelectOptions = [
  {
    value: '10',
    label: '10'
  },
  {
    value: '20',
    label: '20'
  },
  {
    value: '30',
    label: '30'
  },
  {
    value: '40',
    label: '40'
  },
  {
    value: '50',
    label: '50'
  }
]

export function AdvancedPagination<TData>({ table, totalCount }: PaginationProps<TData>) {
  const [navigatePage, setNavigatePage] = useState<string>('1')
  const pageIndex = table.getState().pagination.pageIndex
  const pageSize = table.getState().pagination.pageSize

  const onNavigateToPage = (page: string) => {
    if (!page || (/^[1-9]\d*$/.test(page) && table.getPageCount() >= Number(page))) {
      setNavigatePage(page)
    }
  }

  const onGoToPage = () => {
    const page = navigatePage ? Number(navigatePage) - 1 : 0
    table.setPageIndex(page)
  }

  const getVisiblePageNumbers = () => {
    const currentPage = pageIndex
    const totalPages = table.getPageCount()
    const visiblePages: (number | string)[] = []

    if (totalPages <= 7) {
      return Array.from({ length: totalPages }, (_, i) => i + 1)
    }

    visiblePages.push(1)

    if (currentPage <= 3) {
      visiblePages.push(2, 3, 4, 5, '...', totalPages)
    } else if (currentPage >= totalPages - 5) {
      visiblePages.push(
        '...',
        totalPages - 4,
        totalPages - 3,
        totalPages - 2,
        totalPages - 1,
        totalPages
      )
    } else {
      visiblePages.push('...', currentPage, currentPage + 1, currentPage + 2, '...', totalPages)
    }

    return visiblePages
  }

  return (
    <div className="advanced-table__pagination">
      <Select
        setSelectedItem={(value) => table.setPageSize(Number(value))}
        selectedItem={`${pageSize}`}
        className={'no-border'}
        options={OPTIONS}
      />
      <div className={'advanced-table__pagination__right'}>
        <Text type={'tertiary'}>
          Showing {pageIndex * pageSize + 1} - {(pageIndex + 1) * pageSize} of {totalCount}
        </Text>
        <div className="flexbox align-items--center">
          <Input
            currentValue={navigatePage}
            size="small"
            onChange={(e) => onNavigateToPage(e.target.value)}
            className="advanced-table__pagination__right__input mr-8"
          />
          <Button onClick={onGoToPage} type="secondary" size="medium" buttonText="Go to page" />
        </div>
        <div className="advanced-table__pagination__counts">
          <Button
            onClick={() => table.firstPage()}
            type="tertiary"
            size="medium"
            iconProps={{
              Component: IconChevronDoubleLeft
            }}
            disabled={!table.getCanPreviousPage()}
          />
          <Button
            onClick={() => table.previousPage()}
            size="medium"
            type="tertiary"
            iconProps={{
              Component: IconChevronLeft
            }}
            disabled={!table.getCanPreviousPage()}
          />
          {getVisiblePageNumbers().map((pageNumber, index) =>
            pageNumber === '...' ? (
              <p key={`ellipsis-${index}`} className="ellipsis">
                ...
              </p>
            ) : (
              <Button
                key={pageNumber}
                size="medium"
                type="tertiary"
                className={classnames({
                  ['active-page']: pageNumber === pageIndex + 1
                })}
                onClick={() => table.setPageIndex(+pageNumber - 1)}
              >
                {pageNumber}
              </Button>
            )
          )}
          <Button
            onClick={() => table.nextPage()}
            size="medium"
            type="tertiary"
            iconProps={{
              Component: IconChevronRight
            }}
            disabled={!table.getCanNextPage()}
          />
          <Button
            onClick={() => table.lastPage()}
            size="medium"
            type="tertiary"
            iconProps={{
              Component: IconChevronDoubleRight
            }}
            disabled={!table.getCanNextPage()}
          />
        </div>
      </div>
    </div>
  )
}
