import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconHongKong = ({
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
    <g clipPath="url(#clip0_3366_16043)">
      <path
        d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
        fill="#D80027"
      />
      <path
        d="M11.0324 7.56523C10.8051 8.5105 10.4013 8.33023 10.2031 9.1546C9.03583 8.87394 8.31693 7.70011 8.59759 6.53273C8.87814 5.36542 10.0521 4.64652 11.2194 4.92718C10.8231 6.57589 11.2357 6.7198 11.0324 7.56523Z"
        fill="#F0F0F0"
      />
      <path
        d="M8.00338 8.26575C8.83217 8.77396 8.53592 9.10235 9.25865 9.5456C8.63099 10.5691 7.29252 10.89 6.269 10.2624C5.24552 9.63474 4.92455 8.29618 5.5522 7.27271C6.99775 8.15911 7.26201 7.81118 8.00338 8.26575Z"
        fill="#F0F0F0"
      />
      <path
        d="M7.73353 11.3631C8.47303 10.7319 8.69369 11.1151 9.33857 10.5647C10.1181 11.4779 10.0096 12.85 9.0965 13.6295C8.1833 14.409 6.81111 14.3005 6.03174 13.3874C7.32135 12.2865 7.07209 11.9275 7.73353 11.3631Z"
        fill="#F0F0F0"
      />
      <path
        d="M10.5958 12.5769C10.2239 11.6786 10.6566 11.587 10.3324 10.8037C11.4417 10.3446 12.7133 10.8717 13.1724 11.9811C13.6315 13.0904 13.1044 14.3619 11.995 14.8211C11.3467 13.2543 10.9284 13.3804 10.5958 12.5769Z"
        fill="#F0F0F0"
      />
      <path
        d="M12.6347 10.2296C11.6655 10.3057 11.712 9.86585 10.8669 9.93218C10.773 8.73535 11.6673 7.68882 12.8642 7.59488C14.0611 7.50117 15.1076 8.39538 15.2014 9.59234C13.5109 9.72488 13.5016 10.1617 12.6347 10.2296Z"
        fill="#F0F0F0"
      />
    </g>
    <defs>
      <clipPath id="clip0_3366_16043">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export default IconHongKong
