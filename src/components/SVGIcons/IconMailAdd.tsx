import type { ReactElement } from 'react';
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconMailAdd = ({
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
    <g id="Size=24, Theme=Regular">
      <path
        id="Shape"
        d="M23 6.5C23 3.46243 20.5376 1 17.5 1C14.4624 1 12 3.46243 12 6.5C12 9.53757 14.4624 12 17.5 12C20.5376 12 23 9.53757 23 6.5ZM18.0006 7.00001L18.0011 9.50352C18.0011 9.77966 17.7773 10.0035 17.5011 10.0035C17.225 10.0035 17.0011 9.77966 17.0011 9.50352L17.0006 7.00001H14.4956C14.2197 7.00001 13.9961 6.77615 13.9961 6.50001C13.9961 6.22387 14.2197 6.00001 14.4956 6.00001H17.0005L17 3.49927C17 3.22313 17.2239 2.99927 17.5 2.99927C17.7761 2.99927 18 3.22313 18 3.49927L18.0005 6.00001H20.4966C20.7725 6.00001 20.9961 6.22387 20.9961 6.50001C20.9961 6.77615 20.7725 7.00001 20.4966 7.00001H18.0006ZM20.5 16.75V12.2678C21.051 11.9806 21.5557 11.6168 22 11.1904V16.75C22 18.483 20.6435 19.8992 18.9344 19.9949L18.75 20H5.25C3.51697 20 2.10075 18.6435 2.00514 16.9344L2 16.75V7.25C2 5.51697 3.35645 4.10075 5.06558 4.00514L5.25 4H11.4982C11.3004 4.47417 11.1572 4.97679 11.0764 5.5H5.25C4.33183 5.5 3.57881 6.20711 3.5058 7.10647L3.5 7.25V7.679L12 12.1525L13.3052 11.4654C13.7437 11.8363 14.232 12.1501 14.7587 12.3954L12.3493 13.6637C12.1619 13.7623 11.9431 13.7764 11.7468 13.706L11.6507 13.6637L3.5 9.374V16.75C3.5 17.6682 4.20711 18.4212 5.10647 18.4942L5.25 18.5H18.75C19.6682 18.5 20.4212 17.7929 20.4942 16.8935L20.5 16.75Z"
        fill="#222222"
      />
    </g>
  </svg>
)

export default IconMailAdd
