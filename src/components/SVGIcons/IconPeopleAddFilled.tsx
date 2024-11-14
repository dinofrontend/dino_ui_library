import type { ReactElement } from 'react';
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconPeopleAddFilled = ({
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
    <g id="Size=24, Theme=Filled">
      <path
        id="Shape"
        d="M8 11C10.2091 11 12 9.20914 12 7C12 4.79086 10.2091 3 8 3C5.79086 3 4 4.79086 4 7C4 9.20914 5.79086 11 8 11ZM17 11C18.6569 11 20 9.65685 20 8C20 6.34315 18.6569 5 17 5C15.3431 5 14 6.34315 14 8C14 9.65685 15.3431 11 17 11ZM4.25 13C3.00736 13 2 14.0074 2 15.25V15.5C2 15.5 2 20 8 20C9.38985 20 10.4578 19.7585 11.2783 19.3875C11.0973 18.7901 11 18.1564 11 17.5C11 15.8431 11.6199 14.3311 12.6405 13.1831C12.3674 13.0653 12.0663 13 11.75 13H4.25ZM23 17.5C23 14.4624 20.5376 12 17.5 12C14.4624 12 12 14.4624 12 17.5C12 20.5376 14.4624 23 17.5 23C20.5376 23 23 20.5376 23 17.5ZM18.0006 18L18.0011 20.5035C18.0011 20.7797 17.7773 21.0035 17.5011 21.0035C17.225 21.0035 17.0011 20.7797 17.0011 20.5035L17.0006 18H14.4956C14.2197 18 13.9961 17.7762 13.9961 17.5C13.9961 17.2239 14.2197 17 14.4956 17H17.0005L17 14.4993C17 14.2231 17.2239 13.9993 17.5 13.9993C17.7761 13.9993 18 14.2231 18 14.4993L18.0005 17H20.4966C20.7725 17 20.9961 17.2239 20.9961 17.5C20.9961 17.7762 20.7725 18 20.4966 18H18.0006Z"
        fill="#222222"
      />
    </g>
  </svg>
)

export default IconPeopleAddFilled
