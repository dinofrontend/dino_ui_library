import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconChevronDoubleLeftFilled = ({
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
      d="M14.0331 18.9516C13.6732 19.2944 13.1035 19.2806 12.7607 18.9207L6.75907 12.6201C6.42797 12.2725 6.42797 11.7262 6.75907 11.3786L12.7607 5.07808C13.1035 4.71818 13.6732 4.70433 14.0331 5.04716C14.393 5.38999 14.4068 5.95967 14.064 6.31958L8.6537 11.9994L14.064 17.6792C14.4068 18.0391 14.393 18.6088 14.0331 18.9516ZM18.8343 18.9528C18.4744 19.2956 17.9047 19.2818 17.5618 18.9219L11.5602 12.6213C11.2291 12.2737 11.2291 11.7274 11.5602 11.3798L17.5618 5.07925C17.9047 4.71935 18.4744 4.7055 18.8343 5.04833C19.1942 5.39116 19.208 5.96084 18.8652 6.32075L13.4549 12.0006L18.8652 17.6804C19.208 18.0403 19.1942 18.61 18.8343 18.9528Z"
      fill="#222222"
    />
  </svg>
)

export default IconChevronDoubleLeftFilled
