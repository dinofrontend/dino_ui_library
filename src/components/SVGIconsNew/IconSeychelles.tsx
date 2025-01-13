import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconSeychelles = ({
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
    <g clipPath="url(#clip0_3366_15672)">
      <path
        d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
        fill="#F0F0F0"
      />
      <path
        d="M16.7504 2.62254C14.9715 0.993945 12.6019 0 10 0C9.57408 0 9.15436 0.0268359 8.7424 0.0785156L3.91307 5.65219L0.316467 12.5051C0.548811 13.4059 0.904045 14.2573 1.36237 15.0409L10 10L16.7504 2.62254Z"
        fill="#FFDA44"
      />
      <path
        d="M18.3254 15.5405L4.33447 18.2405C5.94498 19.3499 7.89647 20 9.99998 20C13.4735 20 16.5328 18.2288 18.3254 15.5405Z"
        fill="#6DA544"
      />
      <path
        d="M16.7518 2.62378L1.36804 15.0505C1.77042 15.7368 2.25218 16.3708 2.80089 16.9399L20 9.99991C20 7.07964 18.748 4.45198 16.7518 2.62378Z"
        fill="#D80027"
      />
      <path
        d="M0 10.0001C0 10.8652 0.109922 11.7046 0.316445 12.5052L8.74238 0.0786133C3.8132 0.697129 0 4.90322 0 10.0001Z"
        fill="#0052B4"
      />
    </g>
    <defs>
      <clipPath id="clip0_3366_15672">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export default IconSeychelles
