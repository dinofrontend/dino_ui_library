import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconEcuador = ({
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
    <g clipPath="url(#clip0_3366_15544)">
      <path
        d="M0 10C0 4.47719 4.47719 0 10 0C15.5228 0 20 4.47719 20 10L10 10.8696L0 10Z"
        fill="#FFDA44"
      />
      <path
        d="M1.33812 15.0001C3.06722 17.989 6.29863 20.0001 9.99999 20.0001C13.7014 20.0001 16.9328 17.989 18.6619 15.0001L9.99999 14.3479L1.33812 15.0001Z"
        fill="#D80027"
      />
      <path
        d="M18.6619 15C19.5127 13.5291 20 11.8215 20 10H0C0 11.8215 0.487266 13.5291 1.33812 15H18.6619Z"
        fill="#0052B4"
      />
      <path
        d="M10 13.4782C11.921 13.4782 13.4782 11.921 13.4782 9.99997C13.4782 8.07899 11.921 6.52173 10 6.52173C8.07902 6.52173 6.52176 8.07899 6.52176 9.99997C6.52176 11.921 8.07902 13.4782 10 13.4782Z"
        fill="#FFDA44"
      />
      <path
        d="M10 12.1739C8.80129 12.1739 7.8261 11.1986 7.8261 9.99997V8.69563C7.8261 7.49692 8.80133 6.52173 10 6.52173C11.1987 6.52173 12.1739 7.49696 12.1739 8.69563V9.99997C12.1739 11.1987 11.1987 12.1739 10 12.1739Z"
        fill="#338AF3"
      />
      <path
        d="M13.4782 4.78266H10.8695C10.8695 4.30242 10.4802 3.91309 9.99996 3.91309C9.51973 3.91309 9.13039 4.30242 9.13039 4.78266H6.52168C6.52168 5.26293 6.94 5.65223 7.4202 5.65223H7.39125C7.39125 6.1325 7.78055 6.5218 8.26082 6.5218C8.26082 7.00207 8.65012 7.39137 9.13039 7.39137H10.8695C11.3498 7.39137 11.7391 7.00207 11.7391 6.5218C12.2194 6.5218 12.6087 6.1325 12.6087 5.65223H12.5797C13.06 5.65223 13.4782 5.26289 13.4782 4.78266Z"
        fill="black"
      />
    </g>
    <defs>
      <clipPath id="clip0_3366_15544">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export default IconEcuador
