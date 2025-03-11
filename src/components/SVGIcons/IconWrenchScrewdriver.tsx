import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconWrenchScrewdriver = ({
  size,
  type,
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
      [`svg-icon__type-${type}`]: type,
      [className]: className
    })}
    viewBox="0 0 24 24"
    fill="none"
    onClick={onClick}
    ref={refHandler}
    id={id}
    data-id={dataId ? `${dataId}-svg-icon` : ''}
  >
    <path
      d="M16.25 2C15.9659 2 15.7062 2.1605 15.5792 2.41459L14.5792 4.41459C14.467 4.63888 14.4744 4.90438 14.5988 5.1221L15.5 6.69917V12H14.75C14.3358 12 14 12.3358 14 12.75V18.5C14 20.433 15.567 22 17.5 22C19.433 22 21 20.433 21 18.5V12.75C21 12.3358 20.6642 12 20.25 12H19.5V6.69917L20.4012 5.1221C20.5256 4.90438 20.533 4.63888 20.4208 4.41459L19.4208 2.41459C19.2938 2.1605 19.0341 2 18.75 2H16.25ZM18 12H17V6.5C17 6.36948 16.9659 6.24122 16.9012 6.1279L16.1003 4.7264L16.7135 3.5H18.2865L18.8997 4.7264L18.0988 6.1279C18.0341 6.24122 18 6.36948 18 6.5V12ZM15.5 18.5V16H19.5V18.5C19.5 19.6046 18.6046 20.5 17.5 20.5C16.3954 20.5 15.5 19.6046 15.5 18.5ZM19.5 14.5H15.5V13.5H19.5V14.5ZM9.52632 2.13551C9.29535 2.04394 9.03402 2.07269 8.82848 2.2123C8.62295 2.35191 8.4999 2.58425 8.4999 2.83271V6.49988C8.4999 7.05216 8.05218 7.49988 7.4999 7.49988C6.94761 7.49988 6.4999 7.05216 6.4999 6.49988V2.8328C6.4999 2.58433 6.37684 2.35198 6.1713 2.21238C5.96575 2.07277 5.70441 2.04402 5.47344 2.13561C3.44005 2.94192 2 4.92688 2 7.25C2 9.37406 3.20387 11.2154 4.96429 12.1317V19.4641C4.96429 20.8645 6.09956 21.9998 7.5 21.9998C8.90043 21.9998 10.0357 20.8645 10.0357 19.4641V12.1317C11.7961 11.2154 13 9.37406 13 7.25C13 4.92679 11.5598 2.94176 9.52632 2.13551ZM9.9999 6.49988V4.12703C10.9149 4.86051 11.5 5.98743 11.5 7.25C11.5 8.92607 10.4689 10.3631 9.00359 10.958C8.72074 11.0728 8.53571 11.3476 8.53571 11.6529V19.4641C8.53571 20.0361 8.07201 20.4998 7.5 20.4998C6.92799 20.4998 6.46429 20.0361 6.46429 19.4641V11.6529C6.46429 11.3476 6.27926 11.0728 5.99641 10.958C4.53109 10.3631 3.5 8.92607 3.5 7.25C3.5 5.98753 4.08502 4.86068 4.9999 4.1272V6.49988C4.9999 7.88059 6.11918 8.99988 7.4999 8.99988C8.88061 8.99988 9.9999 7.88059 9.9999 6.49988Z"
      fill="#222222"
    />
  </svg>
)

export default IconWrenchScrewdriver
