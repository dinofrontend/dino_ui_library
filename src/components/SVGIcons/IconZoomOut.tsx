import type { ReactElement } from 'react';
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconZoomOut = ({
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
      d="M12.75 9.25C13.1642 9.25 13.5 9.58579 13.5 10C13.5 10.4142 13.1642 10.75 12.75 10.75H7.25C6.83578 10.75 6.5 10.4142 6.5 10C6.5 9.58579 6.83578 9.25 7.25 9.25H12.75ZM17.25 10C17.25 5.99594 14.0041 2.75 10 2.75C5.99593 2.75 2.75 5.99594 2.75 10C2.75 14.0041 5.99593 17.25 10 17.25C11.7319 17.25 13.3219 16.6427 14.5688 15.6295L19.4697 20.5303L19.5538 20.6029C19.8474 20.8208 20.2641 20.7966 20.5303 20.5303C20.8232 20.2374 20.8232 19.7626 20.5303 19.4697L15.6295 14.5688C16.6427 13.3219 17.25 11.7319 17.25 10ZM4.25 10C4.25 6.82436 6.82436 4.25 10 4.25C13.1756 4.25 15.75 6.82436 15.75 10C15.75 13.1756 13.1756 15.75 10 15.75C6.82436 15.75 4.25 13.1756 4.25 10Z"
      fill="#222222"
    />
  </svg>
)

export default IconZoomOut
