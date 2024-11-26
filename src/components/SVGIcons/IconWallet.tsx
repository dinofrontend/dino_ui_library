import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconWallet = ({
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
    <g id="Size=24, Theme=Regular">
      <path
        id="Shape"
        d="M15.5 13.75C15.5 13.3358 15.8358 13 16.25 13H18.25C18.6642 13 19 13.3358 19 13.75C19 14.1642 18.6642 14.5 18.25 14.5H16.25C15.8358 14.5 15.5 14.1642 15.5 13.75ZM3 5H3.01373C3.13809 3.87501 4.09186 3 5.25 3H16.75C17.9926 3 19 4.00736 19 5.25V6.08697C20.4333 6.42555 21.5 7.71321 21.5 9.25V17.75C21.5 19.5449 20.0449 21 18.25 21H6.25C4.45508 21 3 19.5449 3 17.75V5ZM18.25 7.5H4.5V17.75C4.5 18.7165 5.2835 19.5 6.25 19.5H18.25C19.2165 19.5 20 18.7165 20 17.75V9.25C20 8.2835 19.2165 7.5 18.25 7.5ZM17.5 6V5.25C17.5 4.83579 17.1642 4.5 16.75 4.5H5.25C4.83579 4.5 4.5 4.83579 4.5 5.25C4.5 5.66421 4.83579 6 5.25 6H17.5Z"
        fill="#222222"
      />
    </g>
  </svg>
)

export default IconWallet
