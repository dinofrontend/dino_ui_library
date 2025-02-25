import type {
  ColumnDef,
  ColumnSizingState,
  PaginationState,
  RowSelectionState
} from '@tanstack/react-table'
import type { ReactNode } from 'react'

export type TTableProps<TData> = {
  data: TData[]
  isLoading?: boolean
  columns: ColumnDef<TData>[]
  wi?: boolean
  className?: string
  withSelect?: boolean
  customHeader?: ReactNode
  defaultPageIndex?: number
  defaultPageSize?: number
  renderHeader?: (table: Table<T>) => ReactNode
  renderFooter?: (table: Table<T>) => ReactNode
  onSortChange?: (state: SortingUpdateEvent) => void
  onRowSelection?: (state: RowSelectionState) => void
  onColumnSizing?: (state: ColumnSizingState) => void
  onPaginationChange?: (state: PaginationState) => void
}

export interface Column<TData> extends ColumnDef<TData> {
  enableColumnDragging?: boolean
}

export type SortingUpdateEvent = {
  column: string
  direction: 'asc' | 'desc' | false
  timestamp: number
}
