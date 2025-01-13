import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconLiechtenstein = ({
  size,
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
      [className]: className
    })}
    viewBox="0 0 24 24"
    fill="none"
    onClick={onClick}
    ref={refHandler}
    id={id}
    data-id={dataId ? `${dataId}-svg-icon` : ''}
  >
    <g clipPath="url(#clip0_3366_14470)">
      <path
        d="M20 9.99989C20 15.5227 15.5228 19.9999 10 19.9999C4.47719 19.9999 0 15.5227 0 9.99989C0.434766 9.99989 10 8.69556 10 8.69556L20 9.99989Z"
        fill="#D80027"
      />
      <path d="M0 10C0 4.47719 4.47719 0 10 0C15.5228 0 20 4.47719 20 10" fill="#0052B4" />
      <path
        d="M7.39127 6.95656C7.39127 6.23621 6.80729 5.65223 6.08694 5.65223C5.75276 5.65223 5.44819 5.77801 5.21737 5.98461V5.21742H5.65213V4.34785H5.21737V3.91309H4.3478V4.34785H3.91303V5.21742H4.3478V5.98461C4.11698 5.77801 3.8124 5.65223 3.47822 5.65223C2.75787 5.65223 2.17389 6.23621 2.17389 6.95656C2.17389 7.34277 2.3419 7.68965 2.60865 7.92852V8.6957H6.95647V7.92852C7.2233 7.68965 7.39127 7.34277 7.39127 6.95656Z"
        fill="#FFDA44"
      />
    </g>
    <defs>
      <clipPath id="clip0_3366_14470">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export default IconLiechtenstein
