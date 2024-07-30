import React, { ReactElement } from 'react'
import { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconArrowRight = ({
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
    <g id="Direction=Right, Size=24, Theme=Regular">
      <path
        id="Shape"
        d="M13.2673 4.20938C12.9674 3.92369 12.4926 3.93523 12.2069 4.23516C11.9213 4.53509 11.9328 5.00982 12.2327 5.29551L18.4841 11.2501H3.75C3.33579 11.2501 3 11.5859 3 12.0001C3 12.4143 3.33579 12.7501 3.75 12.7501H18.4842L12.2327 18.7048C11.9328 18.9905 11.9213 19.4652 12.2069 19.7652C12.4926 20.0651 12.9674 20.0766 13.2673 19.791L20.6862 12.7243C20.8551 12.5634 20.9551 12.3581 20.9861 12.1448C20.9952 12.098 21 12.0496 21 12.0001C21 11.9506 20.9952 11.9021 20.986 11.8552C20.955 11.642 20.855 11.4369 20.6862 11.2761L13.2673 4.20938Z"
        fill="#222222"
      />
    </g>
  </svg>
)

export default IconArrowRight
