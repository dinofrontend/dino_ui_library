import type { ReactElement } from 'react';
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconWalletFilled = ({
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
        d="M3 5V17.75C3 19.5449 4.45508 21 6.25 21H18.25C20.0449 21 21.5 19.5449 21.5 17.75V9.25C21.5 7.71321 20.4333 6.42555 19 6.08697V5.25C19 4.00736 17.9926 3 16.75 3H5.25C4.09186 3 3.13809 3.87501 3.01373 5H3ZM5.25 6C4.83579 6 4.5 5.66421 4.5 5.25C4.5 4.83579 4.83579 4.5 5.25 4.5H16.75C17.1642 4.5 17.5 4.83579 17.5 5.25V6H5.25ZM16.25 13H18.25C18.6642 13 19 13.3358 19 13.75C19 14.1642 18.6642 14.5 18.25 14.5H16.25C15.8358 14.5 15.5 14.1642 15.5 13.75C15.5 13.3358 15.8358 13 16.25 13Z"
        fill="#222222"
      />
    </g>
  </svg>
)

export default IconWalletFilled
