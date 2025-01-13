import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconStBarts = ({
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
    <g clipPath="url(#clip0_3366_15943)">
      <path
        d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
        fill="#F0F0F0"
      />
      <path
        d="M17.855 8.04349H14.5652C14.5652 7.44319 14.0786 6.95654 13.4783 6.95654L12.6087 8.69566C12.6087 8.69566 13.5362 11.3044 13.5072 11.3044H14.5942C15.1945 11.3044 15.6811 10.8178 15.6811 10.2174C16.2815 10.2174 16.7681 9.73081 16.7681 9.13048H16.7319C17.3322 9.13044 17.855 8.64383 17.855 8.04349Z"
        fill="#ACABB1"
      />
      <path
        d="M2.14493 8.04349H5.43478C5.43478 7.44319 5.92142 6.95654 6.52172 6.95654L7.3913 8.69566C7.3913 8.69566 6.46374 11.3044 6.49275 11.3044H5.40581C4.80547 11.3044 4.31886 10.8178 4.31886 10.2174C3.71852 10.2174 3.23191 9.73081 3.23191 9.13048H3.26812C2.66778 9.13044 2.14493 8.64383 2.14493 8.04349Z"
        fill="#ACABB1"
      />
      <path
        d="M13.4782 13.9131V14.3479H6.52171V13.9131H4.78259V15.6522H6.52171V16.087H13.4782V15.6522H15.2174V13.9131H13.4782Z"
        fill="#FFDA44"
      />
      <path
        d="M6.52173 6.9565V11.3043C6.52173 13.9667 9.99997 14.7826 9.99997 14.7826C9.99997 14.7826 13.4782 13.9667 13.4782 11.3043V6.9565L9.99997 6.52173L6.52173 6.9565Z"
        fill="#0052B4"
      />
      <path d="M6.52176 8.6958H13.4782V11.3045H6.52176V8.6958Z" fill="#D80027" />
      <path
        d="M11.7391 4.78267V5.43484L11.3043 5.65225L10.8696 5.21744V3.91309H9.13043V5.21744L8.69566 5.65225L8.26085 5.43484V4.78267H6.52173V6.95656H13.4783V4.78267H11.7391Z"
        fill="#FFDA44"
      />
    </g>
    <defs>
      <clipPath id="clip0_3366_15943">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export default IconStBarts
