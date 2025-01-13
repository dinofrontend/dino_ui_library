import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconFrenchPolynesia = ({
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
    <g clipPath="url(#clip0_3366_15732)">
      <path
        d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
        fill="#F0F0F0"
      />
      <path
        d="M1.21591 5.21738H18.7841C17.0881 2.10895 13.7904 0 10 0C6.20958 0 2.91197 2.10895 1.21591 5.21738Z"
        fill="#D80027"
      />
      <path
        d="M10 20.0001C13.7904 20.0001 17.0881 17.8912 18.7841 14.7827H1.21591C2.91197 17.8912 6.20958 20.0001 10 20.0001Z"
        fill="#D80027"
      />
      <path
        d="M13.4782 9.99997C13.4782 11.921 11.921 13.0434 10 13.0434C8.07902 13.0434 6.52176 11.921 6.52176 9.99997C6.52176 8.07895 8.07902 6.52173 10 6.52173C11.921 6.52173 13.4782 8.07895 13.4782 9.99997Z"
        fill="#FFDA44"
      />
      <path
        d="M13.4782 10C13.4782 11.921 11.921 13.4782 10 13.4782C8.07902 13.4782 6.52176 11.921 6.52176 10"
        fill="#0052B4"
      />
      <path d="M7.82608 9.13062H8.69565V10.8698H7.82608V9.13062Z" fill="#D80027" />
      <path d="M11.3043 9.13062H12.1739V10.8698H11.3043V9.13062Z" fill="#D80027" />
      <path d="M9.56522 7.82617H10.4348V10.8696H9.56522V7.82617Z" fill="#D80027" />
    </g>
    <defs>
      <clipPath id="clip0_3366_15732">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export default IconFrenchPolynesia
