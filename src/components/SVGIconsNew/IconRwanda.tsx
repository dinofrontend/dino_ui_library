import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconRwanda = ({
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
    <g clipPath="url(#clip0_3366_15499)">
      <path
        d="M0 9.99994C0 11.7324 0.440742 13.3618 1.2159 14.7826L10 15.6521L18.7841 14.7826C19.5593 13.3618 20 11.7324 20 9.99994L10 9.13037L0 9.99994Z"
        fill="#FFDA44"
      />
      <path
        d="M18.7841 5.21738C17.088 2.10895 13.7904 0 10 0C6.20957 0 2.91195 2.10895 1.2159 5.21738C0.440742 6.63812 0 8.26758 0 10H20C20 8.26758 19.5593 6.63812 18.7841 5.21738Z"
        fill="#338AF3"
      />
      <path
        d="M10 20.0001C13.7905 20.0001 17.0881 17.8912 18.7841 14.7827H1.21594C2.912 17.8912 6.20961 20.0001 10 20.0001Z"
        fill="#496E2D"
      />
      <path
        d="M11.3043 5.85248L12.5257 6.42697L11.8753 7.60979L13.2015 7.35611L13.3695 8.69576L14.2932 7.71045L15.2169 8.69576L15.3849 7.35611L16.7111 7.60971L16.0608 6.42693L17.2821 5.85248L16.0608 5.27807L16.7111 4.09525L15.385 4.34893L15.2169 3.00928L14.2932 3.99459L13.3695 3.00928L13.2015 4.34893L11.8753 4.09525L12.5256 5.27811L11.3043 5.85248Z"
        fill="#FFDA44"
      />
    </g>
    <defs>
      <clipPath id="clip0_3366_15499">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export default IconRwanda
