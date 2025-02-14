import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconZoomOutFilled = ({
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
      d="M17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5C11.7101 17.5 13.2866 16.9276 14.5483 15.964L19.2929 20.7071L19.3871 20.7903C19.7794 21.0953 20.3466 21.0676 20.7071 20.7071C21.0976 20.3166 21.0976 19.6834 20.7071 19.2929L15.964 14.5483C16.9276 13.2866 17.5 11.7101 17.5 10ZM13.5 9C14.0523 9 14.5 9.44772 14.5 10C14.5 10.5523 14.0523 11 13.5 11H6.5C5.94771 11 5.5 10.5523 5.5 10C5.5 9.44772 5.94771 9 6.5 9H13.5Z"
      fill="#222222"
    />
  </svg>
)

export default IconZoomOutFilled
