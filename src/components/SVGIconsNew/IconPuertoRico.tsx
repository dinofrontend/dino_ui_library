import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconPuertoRico = ({
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
    <g clipPath="url(#clip0_3366_15372)">
      <path
        d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
        fill="#F0F0F0"
      />
      <path
        d="M10 0C6.72844 0 3.82395 1.57121 1.99957 4H18.0004C16.1761 1.57121 13.2716 0 10 0Z"
        fill="#D80027"
      />
      <path
        d="M10 20C13.2716 20 16.1761 18.4288 18.0004 16H1.99957C3.82395 18.4288 6.72844 20 10 20Z"
        fill="#D80027"
      />
      <path
        d="M0 10C0 10.685 0.0690625 11.3538 0.200273 12H19.7998C19.931 11.3538 20 10.685 20 10C20 9.31504 19.9309 8.64621 19.7998 8H0.200273C0.0690625 8.64621 0 9.31504 0 10H0Z"
        fill="#D80027"
      />
      <path
        d="M2.92891 2.92896C-0.976324 6.83419 -0.976324 13.1659 2.92891 17.0711C4.5427 15.4574 6.09477 13.9053 10 10L2.92891 2.92896Z"
        fill="#0052B4"
      />
      <path
        d="M4.04727 7.39136L4.69473 9.38417H6.79027L5.09504 10.6159L5.74246 12.6088L4.04727 11.3771L2.35199 12.6088L2.99957 10.6159L1.30434 9.38417H3.39973L4.04727 7.39136Z"
        fill="#F0F0F0"
      />
    </g>
    <defs>
      <clipPath id="clip0_3366_15372">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export default IconPuertoRico
