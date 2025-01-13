import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconSuriname = ({
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
    <g clipPath="url(#clip0_3366_15970)">
      <path
        d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
        fill="#F0F0F0"
      />
      <path
        d="M19.378 6.52173H0.621953C0.220039 7.60509 0 8.77677 0 9.99997C0 11.2232 0.220039 12.3949 0.621953 13.4782H19.378C19.78 12.3949 20 11.2232 20 9.99997C20 8.77677 19.78 7.60509 19.378 6.52173Z"
        fill="#A2001D"
      />
      <path
        d="M10.0289 19.9999C13.454 19.9999 16.4765 18.2776 18.2788 15.6521H1.77911C3.58138 18.2776 6.6038 19.9999 10.0289 19.9999Z"
        fill="#6DA544"
      />
      <path
        d="M10.0289 0C13.454 0 16.4765 1.72234 18.2788 4.34781H1.77911C3.58138 1.72234 6.6038 0 10.0289 0Z"
        fill="#6DA544"
      />
      <path
        d="M9.99998 6.52173L10.8633 9.17876H13.6572L11.3969 10.8211L12.2603 13.4782L9.99998 11.8361L7.73963 13.4782L8.60306 10.8211L6.34271 9.17876H9.13666L9.99998 6.52173Z"
        fill="#FFDA44"
      />
    </g>
    <defs>
      <clipPath id="clip0_3366_15970">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export default IconSuriname
