import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconHawaii = ({
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
    <g clipPath="url(#clip0_3366_16025)">
      <path
        d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
        fill="#F0F0F0"
      />
      <path
        d="M9.99999 20C12.5358 20 14.8507 19.0556 16.6135 17.5H3.38647C5.14925 19.0556 7.46417 20 9.99999 20Z"
        fill="#D80027"
      />
      <path
        d="M0.315063 12.5001C0.543384 13.3871 0.890493 14.2263 1.33815 15.0001H18.6619C19.1095 14.2263 19.4566 13.3871 19.6849 12.5001L10 11.7393L0.315063 12.5001Z"
        fill="#0052B4"
      />
      <path
        d="M19.685 7.5C19.4567 6.61305 19.1096 5.77383 18.6619 5L10 4.78262C10 3.03602 10 1.38535 10 0C9.2572 0 8.53321 0.0810547 7.83653 0.234687C7.82317 0.237656 1.30438 5.37961 1.30438 10C1.47106 10.029 10 10.8696 10 10.8696C10 10.8696 10 8.96484 10 7.5H19.685Z"
        fill="#0052B4"
      />
      <path
        d="M10 6.23914V1.23914H6.83301L7.8368 0.235352C3.71605 1.14418 0.549844 4.59434 0.0652344 8.85871C0.0226562 9.23332 0 9.61399 0 10H5.06523V8.00692L7.07805 10H10.6556L6.83297 6.23914H10Z"
        fill="#F0F0F0"
      />
      <path
        d="M10.0046 10L6.24371 6.23914H5.06523V6.23918L8.82605 10H3.80434V5H18.6619C18.1174 4.05887 17.4237 3.21496 16.6136 2.5H3.80434V2.15137C2.79543 2.94891 1.94418 3.93672 1.30434 5.0607V10H0C0 10.8632 0.109375 11.701 0.315039 12.5H19.685C19.8906 11.7009 20 10.8632 20 10H10.0046Z"
        fill="#D80027"
      />
    </g>
    <defs>
      <clipPath id="clip0_3366_16025">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export default IconHawaii
