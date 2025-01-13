import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconCorsica = ({
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
    <g clipPath="url(#clip0_3366_15285)">
      <path
        d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
        fill="#FCFCFC"
      />
      <path
        d="M13.4819 8.47012C13.4819 6.35512 11.7674 4.64062 9.65239 4.64062C8.09169 4.64062 6.75001 5.57461 6.15345 6.91383L5.68114 8.62613L6.11591 9.0609L5.24634 10.8L6.11591 11.2348L5.68114 11.6696V12.1043L6.11591 12.5391V13.4087L6.55067 13.8434L7.85501 13.4087C7.85501 13.4087 7.85501 13.8434 8.28978 14.2782C8.72454 14.713 9.15938 15.5826 9.15938 15.5826C9.15938 15.5826 10.4637 16.0174 11.3333 14.713C12.2029 13.4087 13.0724 12.9739 13.0724 12.9739L12.2343 11.2976C13.0008 10.5975 13.4819 9.59016 13.4819 8.47012Z"
        fill="black"
      />
      <path
        d="M13.794 9.93438C15.5607 9.63637 15.855 6.17676 15.855 6.17676H13.4203C14.6811 9.22023 13.3614 9.42496 13.3614 9.42496C13.1826 9.29195 6.78425 6.26086 6.58144 6.18379C6.53257 6.24918 6.35269 6.42094 6.13402 6.9557C5.91531 7.49047 5.86163 7.97156 5.86163 7.97156C5.96406 8.03832 12.7591 10.411 12.9387 10.4308C13.2951 10.6638 13.7337 11.3607 13.4886 13.4271L15.8321 12.7666C15.8322 12.7666 15.0369 10.6509 13.794 9.93438Z"
        fill="#ACABB1"
      />
    </g>
    <defs>
      <clipPath id="clip0_3366_15285">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export default IconCorsica
