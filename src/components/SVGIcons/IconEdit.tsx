import React, { ReactElement } from 'react'
import { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconEdit = ({
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
      d="M15.8911 3.04825C17.2885 1.65064 19.5543 1.65058 20.9519 3.0481C22.3493 4.4455 22.3493 6.71112 20.952 8.10861L20.0602 9.00057L14.9995 3.93991L15.8911 3.04825ZM13.9389 5.00064L3.94103 14.9997C3.5347 15.4061 3.2491 15.9172 3.116 16.4762L2.02041 21.0777C1.96009 21.3311 2.03552 21.5976 2.21968 21.7817C2.40385 21.9659 2.67037 22.0413 2.92373 21.981L7.52498 20.8855C8.08418 20.7523 8.59546 20.4666 9.00191 20.0601L18.9996 10.0613L13.9389 5.00064Z"
      fill="#222222"
    />
  </svg>
)

export default IconEdit
