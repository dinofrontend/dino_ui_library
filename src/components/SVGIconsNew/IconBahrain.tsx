import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconBahrain = ({
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
    <g clipPath="url(#clip0_3366_14587)">
      <path
        d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
        fill="#F0F0F0"
      />
      <path
        d="M10 0C7.99313 0 6.1247 0.591602 4.5586 1.6093L7.13044 3.33309L3.91306 4.99973L7.13044 6.66637L3.91306 8.33301L7.13044 9.99945L3.91306 11.6661L7.13044 13.3327L3.91306 14.9995L7.13044 16.6661L4.55829 18.3904C6.12446 19.4083 7.99302 20 10 20C15.5228 20 20 15.5228 20 10C20 4.47719 15.5228 0 10 0V0Z"
        fill="#D80027"
      />
    </g>
    <defs>
      <clipPath id="clip0_3366_14587">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export default IconBahrain
