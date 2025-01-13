import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconMalaysia = ({
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
    <g clipPath="url(#clip0_3366_14510)">
      <path
        d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
        fill="#F0F0F0"
      />
      <path
        d="M9.56519 9.99982H20C20 9.09721 19.8796 8.22291 19.6555 7.39111H9.56519V9.99982Z"
        fill="#D80027"
      />
      <path
        d="M9.56519 4.78254H18.5322C17.9201 3.78363 17.1375 2.9007 16.2248 2.17383H9.56519V4.78254Z"
        fill="#D80027"
      />
      <path
        d="M10 19.9998C12.3535 19.9998 14.5167 19.1864 16.2249 17.8259H3.77515C5.48339 19.1864 7.64655 19.9998 10 19.9998Z"
        fill="#D80027"
      />
      <path
        d="M1.46772 15.2174H18.5323C19.0237 14.4155 19.4048 13.5389 19.6555 12.6086H0.344482C0.595146 13.5389 0.976279 14.4155 1.46772 15.2174Z"
        fill="#D80027"
      />
      <path d="M10 10C10 4.47719 10 3.82609 10 0C4.47719 0 0 4.47719 0 10H10Z" fill="#0052B4" />
      <path
        d="M6.64972 8.55971C5.28402 8.55971 4.17691 7.45256 4.17691 6.08689C4.17691 4.72123 5.28406 3.61408 6.64972 3.61408C7.07554 3.61408 7.47621 3.72178 7.82601 3.91131C7.27726 3.37471 6.52679 3.04346 5.69863 3.04346C4.01781 3.04346 2.65515 4.40607 2.65515 6.08693C2.65515 7.76779 4.01781 9.13041 5.69863 9.13041C6.52679 9.13041 7.27726 8.79916 7.82601 8.26256C7.47621 8.45201 7.07558 8.55971 6.64972 8.55971Z"
        fill="#FFDA44"
      />
      <path
        d="M7.34653 4.34766L7.78555 5.2657L8.777 5.03664L8.33301 5.95223L9.13036 6.58453L8.13762 6.80832L8.1404 7.82594L7.34653 7.1893L6.55262 7.82594L6.55536 6.80832L5.56262 6.58453L6.35997 5.95223L5.91594 5.03664L6.90747 5.2657L7.34653 4.34766Z"
        fill="#FFDA44"
      />
    </g>
    <defs>
      <clipPath id="clip0_3366_14510">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export default IconMalaysia
