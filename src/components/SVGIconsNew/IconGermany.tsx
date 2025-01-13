import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconGermany = ({
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
    <g clipPath="url(#clip0_3366_15764)">
      <path
        d="M0.622009 13.4782C2.03494 17.2861 5.70037 19.9999 10 19.9999C14.2997 19.9999 17.9651 17.2861 19.378 13.4782L10 12.6086L0.622009 13.4782Z"
        fill="#FFDA44"
      />
      <path
        d="M10 0C5.70037 0 2.03494 2.71375 0.622009 6.52176L10 7.39129L19.378 6.52172C17.9651 2.71375 14.2997 0 10 0Z"
        fill="black"
      />
      <path
        d="M0.621992 6.52173C0.220039 7.60505 0 8.77677 0 9.99997C0 11.2232 0.220039 12.3949 0.621992 13.4782H19.378C19.78 12.3949 20 11.2232 20 9.99997C20 8.77677 19.78 7.60505 19.378 6.52173H0.621992Z"
        fill="#D80027"
      />
    </g>
    <defs>
      <clipPath id="clip0_3366_15764">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export default IconGermany
