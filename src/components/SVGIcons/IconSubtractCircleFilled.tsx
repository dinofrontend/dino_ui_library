import React, { ReactElement } from 'react'
import { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconSubtractCircleFilled = ({
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
        d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM7.75 11.25C7.33579 11.25 7 11.5858 7 12C7 12.3797 7.28215 12.6935 7.64823 12.7432L7.75 12.75C13.2107 12.75 11.2532 12.75 16.25 12.75C16.6642 12.75 17 12.4142 17 12C17 11.6203 16.7178 11.3065 16.3518 11.2568L16.25 11.25C11.0554 11.25 13.4435 11.25 7.75 11.25Z"
        fill="#222222"
      />
    </g>
  </svg>
)

export default IconSubtractCircleFilled
