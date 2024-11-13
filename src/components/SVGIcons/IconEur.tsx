import React, { ReactElement } from 'react'
import { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconEur = ({
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
      d="M14.7693 3.10963C13.223 2.76717 11.6061 2.96512 10.1881 3.67042C8.75349 4.37447 7.55109 5.54418 6.71346 7.01573L6.71074 7.02055C6.40011 7.57442 6.1442 8.15442 5.94513 8.75229H3.98047C3.49938 8.75229 3.10938 9.14228 3.10938 9.62335C3.10938 10.1044 3.49938 10.4944 3.98047 10.4944H5.534C5.46537 10.9741 5.43148 11.4597 5.43332 11.9476C5.4334 12.4349 5.46791 12.9199 5.53587 13.3979H3.98047C3.49938 13.3979 3.10938 13.7879 3.10938 14.269C3.10938 14.75 3.49938 15.14 3.98047 15.14H5.94283C6.14268 15.7454 6.40001 16.3279 6.71247 16.8764C7.55 18.3465 8.75228 19.5173 10.1881 20.2225C11.6064 20.9266 13.2229 21.1241 14.769 20.7822L14.7708 20.7818C16.3127 20.4376 17.7146 19.5754 18.8062 18.326C19.1227 17.9637 19.0855 17.4134 18.7232 17.0969C18.3609 16.7804 17.8106 16.8176 17.4941 17.1799C16.6277 18.1716 15.5445 18.8239 14.3921 19.0814C13.2342 19.3372 12.0235 19.1891 10.9615 18.6615L10.9577 18.6597C9.86246 18.1221 8.90749 17.2098 8.22624 16.014C8.0667 15.734 7.92426 15.4419 7.79967 15.14H13.2721C13.7532 15.14 14.1432 14.75 14.1432 14.269C14.1432 13.7879 13.7532 13.3979 13.2721 13.3979H7.29923C7.21748 12.9231 7.17551 12.4367 7.17551 11.9459L7.1755 11.9425C7.17358 11.4553 7.2148 10.9708 7.29774 10.4944H13.2721C13.7532 10.4944 14.1432 10.1044 14.1432 9.62335C14.1432 9.14228 13.7532 8.75229 13.2721 8.75229H7.80337C7.92745 8.45264 8.06945 8.15969 8.22894 7.87508C8.90995 6.67972 9.86414 5.76953 10.9575 5.23344L10.9622 5.2311C12.0237 4.70263 13.2343 4.55414 14.392 4.81038C15.5453 5.06781 16.6276 5.71993 17.4956 6.71232C17.8123 7.07443 18.3626 7.11124 18.7248 6.79453C19.0869 6.47782 19.1237 5.92753 18.807 5.56542C17.7146 4.3165 16.314 3.4542 14.7706 3.10992L14.7693 3.10963Z"
      fill="#222222"
    />
  </svg>
)

export default IconEur