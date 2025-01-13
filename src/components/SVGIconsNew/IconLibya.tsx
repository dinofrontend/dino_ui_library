import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconLibya = ({
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
    <g clipPath="url(#clip0_3366_14463)">
      <path
        d="M0.992266 5.65229C0.356562 6.96697 0 8.44186 0 10.0001C0 11.5583 0.356562 13.0332 0.992266 14.3479L10 15.2175L19.0077 14.3479C19.6434 13.0332 20 11.5583 20 10.0001C20 8.44186 19.6434 6.96697 19.0077 5.65229L10 4.78271L0.992266 5.65229Z"
        fill="black"
      />
      <path
        d="M0.992615 14.3479C2.61004 17.6929 6.03539 20.0001 10 20.0001C13.9646 20.0001 17.39 17.6929 19.0074 14.3479H0.992615Z"
        fill="#496E2D"
      />
      <path
        d="M0.992615 5.65219H19.0074C17.39 2.30723 13.9646 0 10 0C6.03539 0 2.61004 2.30723 0.992615 5.65219Z"
        fill="#D80027"
      />
      <path
        d="M12.3276 8.17139L13.1481 9.30205L14.4768 8.87119L13.6551 10.0009L14.4754 11.1315L13.1472 10.699L12.3254 11.8287L12.3262 10.4318L10.9979 9.99928L12.3267 9.56842L12.3276 8.17139Z"
        fill="#F0F0F0"
      />
      <path
        d="M10.0883 12.8261C8.52755 12.8261 7.26223 11.5608 7.26223 10C7.26223 8.43923 8.52755 7.17392 10.0883 7.17392C10.575 7.17392 11.0329 7.29696 11.4327 7.5136C10.8055 6.90028 9.94782 6.52173 9.00137 6.52173C7.08036 6.52173 5.52313 8.07899 5.52313 9.99997C5.52313 11.9209 7.0804 13.4782 9.00137 13.4782C9.94786 13.4782 10.8055 13.0997 11.4327 12.4863C11.0329 12.7031 10.575 12.8261 10.0883 12.8261Z"
        fill="#F0F0F0"
      />
    </g>
    <defs>
      <clipPath id="clip0_3366_14463">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export default IconLibya
