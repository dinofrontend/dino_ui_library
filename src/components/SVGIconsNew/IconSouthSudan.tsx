import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconSouthSudan = ({
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
    <g clipPath="url(#clip0_3366_15844)">
      <path
        d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
        fill="#F0F0F0"
      />
      <path
        d="M19.2199 6.12316C17.7055 2.52586 14.148 0 10 0C7.23852 0 4.73879 1.11949 2.92926 2.92926L5.43356 6.12316H19.2199Z"
        fill="black"
      />
      <path
        d="M5.46196 13.8406L2.92926 17.0707C4.73879 18.8805 7.23852 20 10 20C14.162 20 17.7296 17.4572 19.2353 13.8406H5.46196Z"
        fill="#496E2D"
      />
      <path
        d="M2.17389 7.35498V12.6086H19.6555C19.8798 11.7769 20 10.9025 20 9.9999C20 9.0842 19.8766 8.19748 19.646 7.35498H2.17389Z"
        fill="#A2001D"
      />
      <path
        d="M2.92893 2.92896C-0.976309 6.83419 -0.976309 13.1659 2.92893 17.0711C4.54271 15.4574 6.09478 13.9053 10 10L2.92893 2.92896Z"
        fill="#0052B4"
      />
      <path
        d="M3.25725 7.51367L4.47775 9.21684L6.47494 8.58227L5.23232 10.2695L6.45283 11.9727L4.46424 11.3123L3.22158 12.9995L3.23525 10.9041L1.24658 10.2436L3.24361 9.60902L3.25725 7.51367Z"
        fill="#FFDA44"
      />
    </g>
    <defs>
      <clipPath id="clip0_3366_15844">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export default IconSouthSudan
