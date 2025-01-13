import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconAmericanSamoa = ({
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
    <g clipPath="url(#clip0_3366_14400)">
      <path
        d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
        fill="#F0F0F0"
      />
      <path
        d="M14.8514 1.25438C13.4145 0.455625 11.7605 0 10 0C4.47758 0 0.000703125 4.47649 0 9.99883L6.95652 6.52176L14.8514 1.25438Z"
        fill="#0052B4"
      />
      <path
        d="M0 10.0012C0.000703125 15.5236 4.47758 20 10 20C11.7605 20 13.4145 19.5445 14.8514 18.7457L6.95652 13.4783L0 10.0012Z"
        fill="#0052B4"
      />
      <path
        d="M15.6848 1.77284C15.4162 1.58694 15.1379 1.41405 14.8511 1.25464L0 9.99894V10.0001C0 10.0001 0 10.0009 0 10.0013L14.8511 18.7455C15.1379 18.5861 15.4162 18.4132 15.6848 18.2273L1.7118 10.0001L15.6848 1.77284Z"
        fill="#D80027"
      />
      <path
        d="M17.3913 9.62713H16.2001C16.5099 9.25525 16.4908 8.70201 16.1418 8.35314C16.5114 7.98357 16.5114 7.38432 16.1418 7.01467L16.1195 7.03701C16.4891 6.66744 16.5114 6.04584 16.1418 5.67627L10.7881 11.03C11.1577 11.3997 11.7464 11.3953 12.116 11.0256L12.219 10.9315L14.7826 10.6984V11.801H15.6522V10.6194L16.9565 10.5008L17.3913 9.62713Z"
        fill="#A2001D"
      />
      <path d="M10.8699 12.174L10 11.7392L10.8699 11.3044H16.522V12.174H10.8699Z" fill="#FFDA44" />
    </g>
    <defs>
      <clipPath id="clip0_3366_14400">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export default IconAmericanSamoa
