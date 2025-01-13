import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconMontserrat = ({
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
    <g clipPath="url(#clip0_3366_14778)">
      <path
        d="M20 10C20 15.5228 15.5228 20 10 20C4.47719 20 0 15.5228 0 10C0 10.0024 10 0.00109375 10 0C15.5228 0 20 4.47719 20 10Z"
        fill="#0052B4"
      />
      <path
        d="M9.97327 9.9999H10C10 9.99092 10 9.98217 10 9.97314C9.99112 9.98209 9.98221 9.991 9.97327 9.9999Z"
        fill="#F0F0F0"
      />
      <path
        d="M10 5.21738C10 3.45781 10 2.30488 10 0H9.99832C4.47621 0.0009375 0 4.4777 0 10H5.21738V7.06207L8.15531 10H9.97328C9.98219 9.99109 9.99109 9.98219 10 9.97324C10 9.29953 10 8.6984 10 8.15539L7.06203 5.21738H10Z"
        fill="#F0F0F0"
      />
      <path
        d="M5.05917 1.30444C3.49514 2.19503 2.19487 3.49526 1.30432 5.05929V10.0001H3.91303V3.91323V3.91315H9.99999C9.99999 3.09038 9.99999 2.30655 9.99999 1.30444H5.05917Z"
        fill="#D80027"
      />
      <path
        d="M9.99996 8.77038L6.44703 5.21753H5.21735V5.21761L9.99989 10.0001H9.99996C9.99996 10.0001 9.99996 9.15218 9.99996 8.77038Z"
        fill="#D80027"
      />
      <path
        d="M11.3043 5.21729V9.99986C11.3043 12.3296 14.3478 13.0434 14.3478 13.0434C14.3478 13.0434 17.3913 12.3296 17.3913 9.99986V5.21729H11.3043Z"
        fill="#338AF3"
      />
      <path
        d="M11.3043 10C11.3043 12.3297 14.3478 13.0435 14.3478 13.0435C14.3478 13.0435 17.3913 12.3297 17.3913 10H11.3043Z"
        fill="#A2001D"
      />
      <path
        d="M15.6522 7.39134H14.7826V6.52173H13.913V7.39134H13.0435V8.26087H13.913V10.8695H14.7826V8.26087H15.6522V7.39134Z"
        fill="black"
      />
    </g>
    <defs>
      <clipPath id="clip0_3366_14778">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export default IconMontserrat
