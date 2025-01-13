import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconBrazil = ({
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
    <g clipPath="url(#clip0_3366_14844)">
      <path
        d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
        fill="#6DA544"
      />
      <path
        d="M9.99999 3.91309L18.2609 10L9.99999 16.087L1.73914 10L9.99999 3.91309Z"
        fill="#FFDA44"
      />
      <path
        d="M9.99997 13.4782C11.921 13.4782 13.4782 11.921 13.4782 9.99997C13.4782 8.07899 11.921 6.52173 9.99997 6.52173C8.07899 6.52173 6.52173 8.07899 6.52173 9.99997C6.52173 11.921 8.07899 13.4782 9.99997 13.4782Z"
        fill="#F0F0F0"
      />
      <path
        d="M8.26083 9.78247C7.65599 9.78247 7.07228 9.87446 6.52283 10.0452C6.54716 11.9452 8.09419 13.4781 9.99998 13.4781C11.1784 13.4781 12.2192 12.8915 12.8484 11.995C11.7719 10.6475 10.1156 9.78247 8.26083 9.78247Z"
        fill="#0052B4"
      />
      <path
        d="M13.4138 10.6664C13.4557 10.4506 13.4783 10.228 13.4783 9.99997C13.4783 8.07896 11.921 6.52173 10 6.52173C8.56668 6.52173 7.33621 7.38896 6.80371 8.62716C7.27441 8.52962 7.76176 8.47825 8.26094 8.47825C10.2811 8.47821 12.1087 9.31798 13.4138 10.6664Z"
        fill="#0052B4"
      />
    </g>
    <defs>
      <clipPath id="clip0_3366_14844">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export default IconBrazil
