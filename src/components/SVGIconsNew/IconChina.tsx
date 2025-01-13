import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconChina = ({
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
    <g clipPath="url(#clip0_3366_15217)">
      <path
        d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
        fill="#D80027"
      />
      <path
        d="M5.47266 6.08594L6.33594 8.74219H9.12891L6.87109 10.3867L7.73437 13.043L5.47266 11.4023L3.21094 13.043L4.07812 10.3867L1.81641 8.74219H4.60937L5.47266 6.08594Z"
        fill="#FFDA44"
      />
      <path
        d="M11.8555 15.4883L11.1953 14.6758L10.2188 15.0547L10.7852 14.1758L10.125 13.3594L11.1367 13.6289L11.707 12.75L11.7617 13.7969L12.7773 14.0664L11.7969 14.4414L11.8555 15.4883Z"
        fill="#FFDA44"
      />
      <path
        d="M13.168 13.1055L13.4805 12.1055L12.625 11.5L13.6719 11.4844L13.9805 10.4844L14.3203 11.4766L15.3672 11.4648L14.5273 12.0898L14.8633 13.082L14.0078 12.4766L13.168 13.1055Z"
        fill="#FFDA44"
      />
      <path
        d="M14.9375 7.33984L14.4766 8.28125L15.2266 9.01172L14.1914 8.86328L13.7305 9.80078L13.5508 8.76953L12.5117 8.62109L13.4414 8.13281L13.2617 7.09766L14.0117 7.82812L14.9375 7.33984Z"
        fill="#FFDA44"
      />
      <path
        d="M11.8828 4.48828L11.8047 5.53125L12.7773 5.92578L11.7578 6.17578L11.6836 7.22266L11.1328 6.33203L10.1133 6.58203L10.7891 5.78125L10.2344 4.89453L11.207 5.28906L11.8828 4.48828Z"
        fill="#FFDA44"
      />
    </g>
    <defs>
      <clipPath id="clip0_3366_15217">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export default IconChina
