import React from 'react'
import { AdvancedTable as _Table, AdvancedPagination, ColumnSettings } from '../index'
import { StoryFn } from '@storybook/react'
import { TTableProps } from '../components/AdvancedTable/types'
import { ColumnDef } from '@tanstack/react-table'

const data: any[] = [
  {
    user: 'Luke Skywalker',
    age: 21,
    id: 'fffffffsdf',
    visits: [7, 8, 9],
    progress: 'fdfsdfsdfsd',
    status: 'Active'
  },
  ...Array(33).fill({
    user: 'John Doe',
    age: 30,
    id: 'dsfsdf',
    visits: [4, 5, 6],
    progress: 'divv',
    status: 'Active'
  }),
  {
    user: 'John Doe',
    age: 30,
    id: 'dsfsdf',
    visits: [4, 5, 6],
    progress: 'divv',
    status: 'Active'
  },
  {
    user: 'Bruce wayne',
    id: 'fffffffeeeee',
    age: 29,
    visits: [1, 2, 3],
    progress: 'diff',
    status: 'Active'
  }
]

const Template: StoryFn<TTableProps<any>> = (args) => {
  const columns: ColumnDef<any>[] = [
    {
      id: 'user',
      header: 'User',
      accessorKey: 'user',
      minSize: 100,
      size: 200
    },
    {
      header: 'Status',
      id: 'status',
      accessorKey: 'status',
      size: 200
    },
    {
      id: 'age',
      accessorKey: 'age',
      header: 'Age'
    },
    {
      header: 'Profile Progress',
      id: 'progress',
      accessorKey: 'progress'
    },
    {
      header: 'Visits',
      id: 'visits',
      accessorKey: 'visits'
    }
  ]

  return (
    <div style={{ height: '95vh' }}>
      <_Table
        {...args}
        data={data}
        columns={columns}
        renderHeader={(table) => (
          <div className="flexbox justify-content--end">
            <ColumnSettings table={table} />
          </div>
        )}
        renderFooter={(table) => (
          <div className="test">
            <AdvancedPagination table={table} />
          </div>
        )}
      />
    </div>
  )
}

export default {
  title: 'AdvancedTable',
  component: _Table
}

export const AdvancedTable = Template.bind({})

AdvancedTable.args = {
  withSelect: true,
  data: [],
  columns: [],
  onSortChange: (state) => console.log(state),
  onRowSelection: (state) => console.log(state),
  onPaginationChange: (state) => console.log(state)
}
