import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconKosovo = ({
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
    <g clipPath="url(#clip0_3366_16347)">
      <path
        d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
        fill="#0052B4"
      />
      <path
        d="M4.39257 6.08716L4.60843 6.75153H5.30687L4.74183 7.16204L4.95765 7.8263L4.39257 7.41579L3.82745 7.8263L4.04335 7.16204L3.47827 6.75153H4.17667L4.39257 6.08716Z"
        fill="#F0F0F0"
      />
      <path
        d="M6.56648 5.43481L6.78234 6.09915H7.48078L6.91574 6.50966L7.13156 7.17392L6.56648 6.76341L6.0014 7.17392L6.21726 6.50966L5.65222 6.09915H6.35066L6.56648 5.43481Z"
        fill="#F0F0F0"
      />
      <path
        d="M8.74037 4.78271L8.95623 5.44705H9.65467L9.08963 5.8576L9.30545 6.52186L8.74037 6.11131L8.17529 6.52186L8.39115 5.8576L7.82611 5.44705H8.52455L8.74037 4.78271Z"
        fill="#F0F0F0"
      />
      <path
        d="M15.6075 6.08716L15.3916 6.75153H14.6932L15.2583 7.16204L15.0424 7.8263L15.6075 7.41579L16.1726 7.8263L15.9567 7.16204L16.5218 6.75153H15.8233L15.6075 6.08716Z"
        fill="#F0F0F0"
      />
      <path
        d="M13.4336 5.43481L13.2177 6.09915H12.5193L13.0844 6.50966L12.8685 7.17392L13.4336 6.76341L13.9987 7.17392L13.7828 6.50966L14.3478 6.09915H13.6494L13.4336 5.43481Z"
        fill="#F0F0F0"
      />
      <path
        d="M11.2597 4.78271L11.0438 5.44705H10.3454L10.9104 5.8576L10.6946 6.52186L11.2597 6.11131L11.8248 6.52186L11.6089 5.8576L12.174 5.44705H11.4755L11.2597 4.78271Z"
        fill="#F0F0F0"
      />
      <path
        d="M11.7392 10.4346L10 8.26074L9.13045 8.69551V9.56508L7.82611 10.4346H6.95654V11.558C8.23107 12.0741 9.13045 13.3229 9.13045 14.7825H10V13.9129L10.8696 13.0434L11.7392 13.9129L12.6087 13.0434V12.1738L13.4783 10.8695L11.7392 10.4346Z"
        fill="#FFDA44"
      />
    </g>
    <defs>
      <clipPath id="clip0_3366_16347">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export default IconKosovo
