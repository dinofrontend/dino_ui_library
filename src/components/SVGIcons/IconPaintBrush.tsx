import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconPaintBrush = ({
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
      d="M5.75 2C5.33579 2 5 2.33579 5 2.75V14.2505C5 15.4932 6.00736 16.5005 7.25 16.5005H9.49976V19.5C9.49976 20.8807 10.619 22 11.9998 22C13.3805 22 14.4998 20.8807 14.4998 19.5V16.5005H16.75C17.9926 16.5005 19 15.4932 19 14.2505V2.75C19 2.33579 18.6642 2 18.25 2H5.75ZM6.5 11.0003V3.5H12.4998V5.25154C12.4998 5.66576 12.8355 6.00154 13.2498 6.00154C13.664 6.00154 13.9998 5.66576 13.9998 5.25154V3.5H14.9998V6.25112C14.9998 6.66534 15.3355 7.00112 15.7498 7.00112C16.164 7.00112 16.4998 6.66534 16.4998 6.25112V3.5H17.5V11.0003H6.5ZM6.5 14.2505V12.5003H17.5V14.2505C17.5 14.6647 17.1642 15.0005 16.75 15.0005H13.7498C13.3355 15.0005 12.9998 15.3363 12.9998 15.7505V19.5C12.9998 20.0523 12.552 20.5 11.9998 20.5C11.4475 20.5 10.9998 20.0523 10.9998 19.5V15.7505C10.9998 15.3363 10.664 15.0005 10.2498 15.0005H7.25C6.83579 15.0005 6.5 14.6647 6.5 14.2505Z"
      fill="#222222"
    />
  </svg>
)

export default IconPaintBrush
