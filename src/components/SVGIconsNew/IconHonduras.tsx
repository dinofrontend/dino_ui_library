import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconHonduras = ({
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
    <g clipPath="url(#clip0_3366_16033)">
      <path
        d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
        fill="#F0F0F0"
      />
      <path
        d="M10 20.0001C13.9646 20.0001 17.3903 17.6929 19.0078 14.3479H0.99231C2.60981 17.6929 6.03543 20.0001 10 20.0001Z"
        fill="#338AF3"
      />
      <path
        d="M10 0C6.03543 0 2.60981 2.30723 0.99231 5.65219H19.0077C17.3903 2.30723 13.9646 0 10 0Z"
        fill="#338AF3"
      />
      <path
        d="M6.1542 6.52173L6.47795 7.51817H7.52564L6.67807 8.13395L7.00186 9.1304L6.1542 8.51458L5.30654 9.1304L5.63033 8.13395L4.78271 7.51817H5.83041L6.1542 6.52173Z"
        fill="#338AF3"
      />
      <path
        d="M6.1542 10.8696L6.47795 11.8661H7.52564L6.67807 12.4819L7.00186 13.4783L6.1542 12.8625L5.30654 13.4783L5.63033 12.4819L4.78271 11.8661H5.83041L6.1542 10.8696Z"
        fill="#338AF3"
      />
      <path
        d="M13.846 6.52173L14.1698 7.51817H15.2175L14.3698 8.13395L14.6936 9.1304L13.846 8.51458L12.9983 9.1304L13.3221 8.13395L12.4745 7.51817H13.5222L13.846 6.52173Z"
        fill="#338AF3"
      />
      <path
        d="M13.846 10.8696L14.1698 11.8661H15.2175L14.3698 12.4819L14.6936 13.4783L13.846 12.8625L12.9983 13.4783L13.3221 12.4819L12.4745 11.8661H13.5222L13.846 10.8696Z"
        fill="#338AF3"
      />
      <path
        d="M10 8.69556L10.3238 9.69204H11.3715L10.5239 10.3078L10.8477 11.3042L10 10.6884L9.15237 11.3042L9.47616 10.3078L8.62854 9.69204H9.67624L10 8.69556Z"
        fill="#338AF3"
      />
    </g>
    <defs>
      <clipPath id="clip0_3366_16033">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export default IconHonduras
