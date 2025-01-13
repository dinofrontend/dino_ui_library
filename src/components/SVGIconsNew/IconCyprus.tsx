import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconCyprus = ({
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
    <g clipPath="url(#clip0_3366_15403)">
      <path
        d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
        fill="#FCFCFC"
      />
      <path
        d="M15.6522 8.69556C15.3479 8.69556 14.971 8.69556 14.3479 8.69556C14.3479 11.0968 12.4012 13.0434 10 13.0434C7.59876 13.0434 5.65224 11.0968 5.65224 8.69556C5.23192 8.69556 4.76813 8.69556 4.3479 8.69556C4.3479 11.2821 6.08524 13.4628 8.45673 14.1344C8.19673 14.6283 8.23634 15.2502 8.60774 15.7136C9.09556 15.3227 9.6006 14.9179 10.029 14.5747C10.4575 14.918 10.9625 15.3227 11.4503 15.7136C11.8254 15.2456 11.8623 14.6158 11.5937 14.1195C13.9392 13.4315 15.6522 11.2637 15.6522 8.69556Z"
        fill="#6DA544"
      />
      <path
        d="M6.52176 8.26076C6.52176 8.26076 6.52176 10.4347 8.69566 10.4347L9.13043 10.8694H10C10 10.8694 10.4348 9.5651 11.3043 9.5651C11.3043 9.5651 11.3043 8.69553 12.1739 8.69553C13.0435 8.69553 13.4782 8.69553 13.4782 8.69553C13.4782 8.69553 13.0435 6.95639 15.2174 5.65205L14.3478 5.21729C14.3478 5.21729 11.3043 7.39119 9.13043 6.95643V7.826H8.26086L7.8261 7.39123L6.52176 8.26076Z"
        fill="#FFDA44"
      />
    </g>
    <defs>
      <clipPath id="clip0_3366_15403">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export default IconCyprus
