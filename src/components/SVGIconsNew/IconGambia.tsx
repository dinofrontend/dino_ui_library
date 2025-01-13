import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconGambia = ({
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
    <g clipPath="url(#clip0_3366_15751)">
      <path
        d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
        fill="#F0F0F0"
      />
      <path
        d="M9.99999 0C5.86581 0 2.31784 2.50883 0.79483 6.08695H19.2052C17.6822 2.50883 14.1342 0 9.99999 0Z"
        fill="#A2001D"
      />
      <path
        d="M9.99999 20C14.1342 20 17.6822 17.4912 19.2051 13.9131H0.79483C2.31784 17.4912 5.86581 20 9.99999 20Z"
        fill="#496E2D"
      />
      <path
        d="M19.6555 7.39136H0.344492C0.120313 8.22312 0 9.09745 0 10.0001C0 10.9027 0.120313 11.777 0.344492 12.6088H19.6555C19.8797 11.777 20 10.9027 20 10.0001C20 9.09745 19.8797 8.22312 19.6555 7.39136Z"
        fill="#0052B4"
      />
    </g>
    <defs>
      <clipPath id="clip0_3366_15751">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export default IconGambia
