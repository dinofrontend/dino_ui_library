import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconGreece = ({
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
    <g clipPath="url(#clip0_3366_15867)">
      <path
        d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
        fill="#F0F0F0"
      />
      <path
        d="M10 7.39118H19.6555C19.4048 6.46095 19.0237 5.58435 18.5323 4.78247H10V7.39118Z"
        fill="#338AF3"
      />
      <path
        d="M3.77516 17.826H16.2249C17.1375 17.0991 17.9202 16.2162 18.5323 15.2173H1.46777C2.07992 16.2162 2.86258 17.0991 3.77516 17.826Z"
        fill="#338AF3"
      />
      <path
        d="M3.47828 2.41943C2.69211 3.09643 2.01246 3.89365 1.46777 4.78256H3.47828V2.41943Z"
        fill="#338AF3"
      />
      <path
        d="M10 10.0001C10 8.98147 10 8.12901 10 7.39136H6.08695V10.0001H3.47824V7.39136H0.344492C0.120313 8.22315 0 9.09745 0 10.0001C0 10.9027 0.120313 11.777 0.344492 12.6088H19.6555C19.8797 11.777 20 10.9027 20 10.0001H10Z"
        fill="#338AF3"
      />
      <path
        d="M9.99996 0C8.61133 0 7.28887 0.28332 6.08691 0.794844V4.78262H9.99996C9.99996 3.87199 9.99996 3.0975 9.99996 2.17391H16.2248C14.5166 0.813438 12.3534 0 9.99996 0Z"
        fill="#338AF3"
      />
    </g>
    <defs>
      <clipPath id="clip0_3366_15867">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export default IconGreece
