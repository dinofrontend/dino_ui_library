import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconHaiti = ({
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
    <g clipPath="url(#clip0_3366_16016)">
      <path
        d="M20 10C20 15.5228 15.5228 20 10 20C4.47719 20 0 15.5228 0 10C0 4.47719 10 0 10 0C10 0 20 4.47719 20 10Z"
        fill="#A2001D"
      />
      <path d="M0 10C0 4.47719 4.47719 0 10 0C15.5228 0 20 4.47719 20 10" fill="#0052B4" />
      <path
        d="M13.4782 12.6088L9.99997 12.174L6.52173 12.6088V7.39136H13.4782V12.6088Z"
        fill="#F0F0F0"
      />
      <path
        d="M10 12.1738C10.9605 12.1738 11.7391 11.3952 11.7391 10.4347C11.7391 9.4742 10.9605 8.69556 10 8.69556C9.0395 8.69556 8.26086 9.4742 8.26086 10.4347C8.26086 11.3952 9.0395 12.1738 10 12.1738Z"
        fill="#0052B4"
      />
      <path
        d="M10 11.3043C10.4803 11.3043 10.8696 10.915 10.8696 10.4348C10.8696 9.95451 10.4803 9.56519 10 9.56519C9.51975 9.56519 9.13043 9.95451 9.13043 10.4348C9.13043 10.915 9.51975 11.3043 10 11.3043Z"
        fill="#A2001D"
      />
      <path d="M8.69568 8.26074H11.3044L10 9.56512L8.69568 8.26074Z" fill="#6DA544" />
      <path d="M9.56525 9.13037H10.4348V11.7391H9.56525V9.13037Z" fill="#FFDA44" />
      <path d="M11.3913 11.4783H8.6086L6.52173 12.6087H13.4782L11.3913 11.4783Z" fill="#6DA544" />
    </g>
    <defs>
      <clipPath id="clip0_3366_16016">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export default IconHaiti
