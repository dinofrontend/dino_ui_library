import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconZambia = ({
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
    <g clipPath="url(#clip0_3366_15521)">
      <path
        d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
        fill="#496E2D"
      />
      <path
        d="M13.913 10H10V20C11.1689 20 12.2907 19.7988 13.3333 19.4302L13.913 10Z"
        fill="#D80027"
      />
      <path
        d="M16.6666 17.4529C18.7122 15.6218 20 12.9614 20 10H16.0869L16.6666 17.4529Z"
        fill="#FF9811"
      />
      <path
        d="M13.3334 10V19.4302C14.5754 18.9911 15.7049 18.3138 16.6667 17.4529V10H13.3334Z"
        fill="black"
      />
      <path
        d="M18.4783 6.52167H15.8696C15.8696 6.04144 15.4802 5.6521 15 5.6521C14.5198 5.6521 14.1304 6.04144 14.1304 6.52167H11.5217C11.5217 7.00194 11.94 7.39124 12.4202 7.39124H12.3913C12.3913 7.87151 12.7806 8.26081 13.2609 8.26081C13.2609 8.74108 13.6501 9.13038 14.1304 9.13038H15.8696C16.3498 9.13038 16.7392 8.74108 16.7392 8.26081C17.2194 8.26081 17.6087 7.87151 17.6087 7.39124H17.5798C18.06 7.3912 18.4783 7.0019 18.4783 6.52167Z"
        fill="#FF9811"
      />
    </g>
    <defs>
      <clipPath id="clip0_3366_15521">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export default IconZambia
