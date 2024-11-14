import type { ReactElement } from 'react';
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconSaveFilled = ({
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
        d="M6.75 3H5.75C4.23122 3 3 4.23122 3 5.75V18.25C3 19.7688 4.23122 21 5.75 21H6V15C6 13.7574 7.00736 12.75 8.25 12.75H15.75C16.9926 12.75 18 13.7574 18 15V21H18.25C19.7688 21 21 19.7688 21 18.25V8.28553C21 7.42358 20.6576 6.59693 20.0481 5.98744L18.0126 3.9519C17.4114 3.35079 16.5991 3.00947 15.75 3.00019V7.5C15.75 8.74264 14.7426 9.75 13.5 9.75H9C7.75736 9.75 6.75 8.74264 6.75 7.5V3ZM14.25 3V7.5C14.25 7.91421 13.9142 8.25 13.5 8.25H9C8.58579 8.25 8.25 7.91421 8.25 7.5V3H14.25ZM16.5 21V15C16.5 14.5858 16.1642 14.25 15.75 14.25H8.25C7.83579 14.25 7.5 14.5858 7.5 15V21H16.5Z"
        fill="#222222"
      />
    </g>
  </svg>
)

export default IconSaveFilled
