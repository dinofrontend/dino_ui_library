export type TPaginationProps = {
  labels?: {
    next: string | JSX.Element
    previous: string | JSX.Element
  }
  totalCount: number
  page?: number
  pageSize: number
  handleChangePage: (pageNumber: number) => void
  breakLabel?: JSX.Element
  classname?: string
  activeClassName?: string
  size?: 'large' | 'medium' | 'small'
  disableInitialCallback?: boolean
}
