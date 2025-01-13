import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconTogo = ({
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
    <g clipPath="url(#clip0_3366_16124)">
      <path
        d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
        fill="#FFDA44"
      />
      <path
        d="M10 0C9.99275 7.8125e-05 9.56525 4 9.56525 4H18.0005C16.1761 1.57121 13.2716 0 10 0Z"
        fill="#496E2D"
      />
      <path
        d="M10 20C13.2716 20 16.1761 18.4288 18.0004 16H1.99957C3.82395 18.4288 6.72844 20 10 20Z"
        fill="#496E2D"
      />
      <path
        d="M19.7998 8H9.56525L10 12H19.7998C19.931 11.3538 20 10.685 20 10C20 9.31504 19.9309 8.64621 19.7998 8Z"
        fill="#496E2D"
      />
      <path
        d="M10 12C10 9.91305 10 2.34781 10 0C4.47719 0 0 4.47719 0 10C0 10.685 0.0690625 11.3538 0.200234 12H10Z"
        fill="#D80027"
      />
      <path
        d="M5.51785 4.78271L6.16535 6.77549H8.26086L6.56567 8.00725L7.21309 10.0001L5.51785 8.76846L3.82262 10.0001L4.47016 8.00725L2.77496 6.77549H4.87039L5.51785 4.78271Z"
        fill="#F0F0F0"
      />
    </g>
    <defs>
      <clipPath id="clip0_3366_16124">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export default IconTogo
