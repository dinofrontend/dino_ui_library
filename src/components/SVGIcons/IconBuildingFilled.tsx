import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconBuildingFilled = ({
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
    <g id="Size=24, Theme=Filled">
      <path
        id="Shape"
        d="M6.75 2C5.50736 2 4.5 3.00736 4.5 4.25V20.75C4.5 21.1642 4.83579 21.5 5.25 21.5H7.5V17.25C7.5 16.8358 7.83579 16.5 8.25 16.5H15.75C16.1642 16.5 16.5 16.8358 16.5 17.25V21.5H18.75C19.1642 21.5 19.5 21.1642 19.5 20.75V11.7493C19.5 10.5067 18.4926 9.4993 17.25 9.4993H16.5V4.25C16.5 3.00736 15.4926 2 14.25 2H6.75ZM7.5 6.5C7.5 5.94772 7.94772 5.5 8.5 5.5C9.05228 5.5 9.5 5.94772 9.5 6.5C9.5 7.05228 9.05228 7.5 8.5 7.5C7.94772 7.5 7.5 7.05228 7.5 6.5ZM8.5 12.5C9.05228 12.5 9.5 12.9477 9.5 13.5C9.5 14.0523 9.05228 14.5 8.5 14.5C7.94772 14.5 7.5 14.0523 7.5 13.5C7.5 12.9477 7.94772 12.5 8.5 12.5ZM7.5 10C7.5 9.44772 7.94772 9 8.5 9C9.05228 9 9.5 9.44772 9.5 10C9.5 10.5523 9.05228 11 8.5 11C7.94772 11 7.5 10.5523 7.5 10ZM12 5.5C12.5523 5.5 13 5.94772 13 6.5C13 7.05228 12.5523 7.5 12 7.5C11.4477 7.5 11 7.05228 11 6.5C11 5.94772 11.4477 5.5 12 5.5ZM11 13.5C11 12.9477 11.4477 12.5 12 12.5C12.5523 12.5 13 12.9477 13 13.5C13 14.0523 12.5523 14.5 12 14.5C11.4477 14.5 11 14.0523 11 13.5ZM15.5 12.5C16.0523 12.5 16.5 12.9477 16.5 13.5C16.5 14.0523 16.0523 14.5 15.5 14.5C14.9477 14.5 14.5 14.0523 14.5 13.5C14.5 12.9477 14.9477 12.5 15.5 12.5ZM11 10C11 9.44772 11.4477 9 12 9C12.5523 9 13 9.44772 13 10C13 10.5523 12.5523 11 12 11C11.4477 11 11 10.5523 11 10ZM15 21.5V18H12.7499V21.5H15ZM11.2499 21.5V18H9V21.5H11.2499Z"
        fill="#222222"
      />
    </g>
  </svg>
)

export default IconBuildingFilled
