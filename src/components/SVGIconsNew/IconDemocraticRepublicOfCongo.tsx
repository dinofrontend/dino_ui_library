import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconDemocraticRepublicOfCongo = ({
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
    <g clipPath="url(#clip0_3366_15411)">
      <path
        d="M18.8896 5.41461C18.4275 4.51934 17.8219 3.67902 17.0714 2.92855C16.3209 2.17805 15.4806 1.57238 14.5853 1.11035L7.54043 7.54027L1.11047 14.5852C1.57254 15.4804 2.17821 16.3208 2.92868 17.0712C3.67915 17.8217 4.5195 18.4274 5.41473 18.8895L12.4596 12.4595L18.8896 5.41461Z"
        fill="#FFDA44"
      />
      <path
        d="M2.92869 17.0713C3.34819 17.4908 3.7958 17.865 4.2653 18.1944L18.1944 4.26523C17.865 3.79574 17.4909 3.34812 17.0714 2.92863C16.6519 2.50914 16.2043 2.13504 15.7348 1.80566L1.80573 15.7347C2.13506 16.2041 2.50916 16.6518 2.92869 17.0713Z"
        fill="#D80027"
      />
      <path
        d="M2.92855 2.92859C-0.226407 6.08355 -0.832071 10.8218 1.11035 14.5852L14.5852 1.11043C10.8217 -0.831956 6.08348 -0.226214 2.92855 2.92859Z"
        fill="#338AF3"
      />
      <path
        d="M17.0713 17.0714C20.2263 13.9165 20.8319 9.17827 18.8896 5.41479L5.41473 18.8896C9.17821 20.832 13.9165 20.2264 17.0713 17.0714Z"
        fill="#338AF3"
      />
      <path
        d="M5.32915 3.04321L5.86876 4.70403H7.61501L6.20228 5.73044L6.74188 7.39122L5.32915 6.36477L3.91634 7.39122L4.45603 5.73044L3.04321 4.70403H4.78946L5.32915 3.04321Z"
        fill="#FFDA44"
      />
    </g>
    <defs>
      <clipPath id="clip0_3366_15411">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export default IconDemocraticRepublicOfCongo
