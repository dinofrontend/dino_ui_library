import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconMicronesia = ({
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
    <g clipPath="url(#clip0_3366_14664)">
      <path
        d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
        fill="#338AF3"
      />
      <path
        d="M9.99996 4.3479L10.4316 5.67649H11.8286L10.6985 6.49763L11.1301 7.82618L9.99996 7.00509L8.86976 7.82618L9.30152 6.49763L8.17133 5.67649H9.56832L9.99996 4.3479Z"
        fill="#F0F0F0"
      />
      <path
        d="M4.34784 10.0001L5.67643 9.56842V8.17139L6.49757 9.30162L7.82612 8.86994L7.00503 10.0001L7.82612 11.1302L6.49757 10.6985L5.67643 11.8287V10.4317L4.34784 10.0001Z"
        fill="#F0F0F0"
      />
      <path
        d="M10 15.6524L9.56836 14.3238H8.17133L9.30156 13.5026L8.86988 12.1741L10 12.9952L11.1302 12.1741L10.6984 13.5026L11.8286 14.3238H10.4317L10 15.6524Z"
        fill="#F0F0F0"
      />
      <path
        d="M15.6522 10L14.3236 10.4317V11.8287L13.5025 10.6985L12.174 11.1302L12.995 10L12.174 8.8699L13.5025 9.30162L14.3236 8.17139V9.56838L15.6522 10Z"
        fill="#F0F0F0"
      />
    </g>
    <defs>
      <clipPath id="clip0_3366_14664">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export default IconMicronesia
