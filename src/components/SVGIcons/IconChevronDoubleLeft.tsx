import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconChevronDoubleLeft = ({
  size,
  type,
  className = '',
  onClick,
  refHandler,
  id,
  dataId
}: ISVGIconProps): ReactElement => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={classNames('svg-icon', {
      [`svg-icon__size-${size}`]: size,
      [`svg-icon__type-${type}`]: type,
      [className]: className
    })}
    viewBox="0 0 24 24"
    fill="none"
    onClick={onClick}
    ref={refHandler}
    id={id}
    data-id={dataId ? `${dataId}-svg-icon` : ''}
  >
    <path
      d="M14.1367 19.0233C13.9028 19.258 13.5229 19.2587 13.2882 19.0248L6.70684 12.4668C6.44798 12.2089 6.44798 11.7897 6.70684 11.5318L13.2882 4.97381C13.5229 4.73991 13.9028 4.74059 14.1367 4.97532C14.3706 5.21005 14.37 5.58995 14.1352 5.82385L7.93773 11.9993L14.1352 18.1748C14.37 18.4087 14.3706 18.7886 14.1367 19.0233ZM18.9356 19.0233C18.7017 19.258 18.3218 19.2587 18.087 19.0248L11.5057 12.4668C11.2468 12.2089 11.2468 11.7897 11.5057 11.5318L18.087 4.97381C18.3218 4.73991 18.7017 4.74059 18.9356 4.97532C19.1695 5.21005 19.1688 5.58995 18.9341 5.82385L12.7366 11.9993L18.9341 18.1748C19.1688 18.4087 19.1695 18.7886 18.9356 19.0233Z"
      fill="#222222"
    />
  </svg>
)

export default IconChevronDoubleLeft
