import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconChevronDoubleRightFilled = ({
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
      d="M10.8861 4.9763C11.12 4.74157 11.4999 4.74089 11.7346 4.97479L18.316 11.5328C18.5749 11.7907 18.5749 12.2099 18.316 12.4678L11.7346 19.0258C11.4999 19.2597 11.12 19.259 10.8861 19.0243C10.6522 18.7895 10.6529 18.4096 10.8876 18.1757L17.0851 12.0003L10.8876 5.82482C10.6529 5.59093 10.6522 5.21103 10.8861 4.9763ZM6.08611 4.9763C6.32001 4.74157 6.69991 4.74089 6.93464 4.97479L13.516 11.5328C13.7749 11.7907 13.7749 12.2099 13.516 12.4678L6.93464 19.0258C6.69991 19.2597 6.32001 19.259 6.08611 19.0243C5.85222 18.7895 5.85289 18.4096 6.08763 18.1757L12.2851 12.0003L6.08763 5.82482C5.85289 5.59093 5.85222 5.21103 6.08611 4.9763Z"
      fill="#222222"
    />
  </svg>
)

export default IconChevronDoubleRightFilled
