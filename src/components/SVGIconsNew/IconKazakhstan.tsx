import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconKazakhstan = ({
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
    <g clipPath="url(#clip0_3366_16318)">
      <path
        d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
        fill="#338AF3"
      />
      <path
        d="M15.6522 10.1086H4.34784C4.34784 10.8891 5.02757 11.5217 5.80792 11.5217H5.76089C5.76089 12.3021 6.3935 12.9347 7.17393 12.9347C7.17393 13.7152 7.80655 14.3478 8.58698 14.3478H11.4131C12.1935 14.3478 12.8261 13.7152 12.8261 12.9347C13.6066 12.9347 14.2392 12.3021 14.2392 11.5217H14.1921C14.9724 11.5217 15.6522 10.8891 15.6522 10.1086Z"
        fill="#FFDA44"
      />
      <path
        d="M13.9131 8.26074C13.9131 10.4218 12.1611 12.1738 10 12.1738C7.83889 12.1738 6.08698 10.4218 6.08698 8.26074"
        fill="#338AF3"
      />
      <path
        d="M12.9888 8.26097L11.7676 8.83546L12.4179 10.0183L11.0917 9.76456L10.9237 11.1042L9.99998 10.1189L9.07623 11.1042L8.90822 9.76456L7.58205 10.0182L8.23236 8.83542L7.01111 8.26097L8.2324 7.68651L7.58205 6.50374L8.90818 6.75741L9.07626 5.41772L9.99998 6.40308L10.9237 5.41772L11.0917 6.75741L12.4179 6.50374L11.7676 7.68655L12.9888 8.26097Z"
        fill="#FFDA44"
      />
    </g>
    <defs>
      <clipPath id="clip0_3366_16318">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export default IconKazakhstan
