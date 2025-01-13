import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconFiji = ({
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
    <g clipPath="url(#clip0_3366_15711)">
      <path
        d="M20 10C20 15.5228 15.5228 20 10 20C4.47719 20 0 15.5228 0 10C0 10.0024 10 0.00109375 10 0C15.5228 0 20 4.47719 20 10Z"
        fill="#338AF3"
      />
      <path d="M10 4.78271V8.15549L6.52176 4.78271H10Z" fill="#0052B4" />
      <path
        d="M5.21739 10.0002H8.15536L5.21739 6.08716L4.78262 9.13063L5.21739 10.0002Z"
        fill="#0052B4"
      />
      <path
        d="M9.97324 9.9999H9.99999C9.99999 9.99092 9.99999 9.98217 9.99999 9.97314C9.99109 9.98209 9.98218 9.991 9.97324 9.9999Z"
        fill="#F0F0F0"
      />
      <path
        d="M10 5.21738C10 3.45781 10 2.30488 10 0H9.99832C4.47625 0.0009375 0 4.4777 0 10H5.21738V7.06207L8.15535 10H9.97332C9.98223 9.99109 9.99113 9.98219 10.0001 9.97324C10.0001 9.29953 10.0001 8.6984 10.0001 8.15539L7.06203 5.21738H10Z"
        fill="#F0F0F0"
      />
      <path
        d="M5.05918 1.30444C3.49516 2.19503 2.19492 3.49526 1.30434 5.05929V10.0001H3.91305V3.91323V3.91315H10C10 3.09038 10 2.30655 10 1.30444H5.05918Z"
        fill="#D80027"
      />
      <path
        d="M10 8.77038L6.44715 5.21753H5.21742V5.21761L9.99992 10.0001H10C10 10.0001 10 9.15218 10 8.77038Z"
        fill="#D80027"
      />
      <path
        d="M11.3043 6.52167V9.99987C11.3043 12.3296 14.3478 13.0434 14.3478 13.0434C14.3478 13.0434 17.3913 12.3296 17.3913 9.99987V6.52167L14.3478 5.6521L11.3043 6.52167Z"
        fill="#F3F3F3"
      />
      <path
        d="M17.3913 6.52187V5.21753H11.3043V6.52187H13.913V9.13062H11.3043V10.0001V10.0002L13.913 10.0002V12.9103C14.1754 13.0031 14.3478 13.0436 14.3478 13.0436C14.3478 13.0436 14.5202 13.0032 14.7825 12.9103V10.0002H17.3913V10.0001V9.13058H14.7825V6.52183H17.3913V6.52187Z"
        fill="#D80027"
      />
    </g>
    <defs>
      <clipPath id="clip0_3366_15711">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export default IconFiji
