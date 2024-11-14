import type { ReactElement } from 'react';
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconRub = ({
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
      d="M6.55036 9.83908C6.5835 9.83908 6.61036 9.81222 6.61036 9.77908V3.68231C6.61036 3.23442 6.97344 2.87134 7.42133 2.87134H14.3891C15.5281 2.87134 16.6205 3.32383 17.426 4.12927C18.2314 4.93471 18.6839 6.02711 18.6839 7.16618C18.6839 8.30524 18.2314 9.39765 17.426 10.2031C16.6205 11.0085 15.5281 11.461 14.3891 11.461H8.2923C8.25916 11.461 8.2323 11.4879 8.2323 11.521V14.4243C8.2323 14.4575 8.25916 14.4843 8.2923 14.4843H14.3891C14.837 14.4843 15.2 14.8474 15.2 15.2953C15.2 15.7432 14.837 16.1063 14.3891 16.1063H8.2923C8.25916 16.1063 8.2323 16.1331 8.2323 16.1663V19.9404C8.2323 20.3883 7.86921 20.7513 7.42133 20.7513C6.97344 20.7513 6.61036 20.3883 6.61036 19.9404V16.1663C6.61036 16.1331 6.5835 16.1063 6.55036 16.1063H5.09875C4.65086 16.1063 4.28778 15.7432 4.28778 15.2953C4.28778 14.8474 4.65086 14.4843 5.09875 14.4843H6.55036C6.5835 14.4843 6.61036 14.4575 6.61036 14.4243V11.521C6.61036 11.4879 6.5835 11.461 6.55036 11.461H5.09875C4.65086 11.461 4.28778 11.0979 4.28778 10.65C4.28778 10.2022 4.65086 9.83908 5.09875 9.83908H6.55036ZM8.2323 9.77908C8.2323 9.81222 8.25916 9.83908 8.2923 9.83908H14.3891C15.098 9.83908 15.7778 9.55747 16.2791 9.05621C16.7804 8.55494 17.062 7.87507 17.062 7.16618C17.062 6.45728 16.7804 5.77742 16.2791 5.27615C15.7778 4.77488 15.098 4.49327 14.3891 4.49327H8.2923C8.25916 4.49327 8.2323 4.52014 8.2323 4.55327V9.77908Z"
      fill="#222222"
    />
  </svg>
)

export default IconRub
