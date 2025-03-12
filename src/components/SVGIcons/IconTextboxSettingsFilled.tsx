import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconTextboxSettingsFilled = ({
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
      d="M21 5.75C21 4.23122 19.7688 3 18.25 3H5.75C4.23122 3 3 4.23122 3 5.75V18.25C3 19.7688 4.23122 21 5.75 21H12.0218C11.375 19.9897 11 18.7886 11 17.5C11 17.3318 11.0064 17.165 11.0189 17H6.75C6.33579 17 6 16.6642 6 16.25C6 15.8703 6.28215 15.5565 6.64823 15.5068L6.75 15.5H11.3135C11.6194 14.5531 12.1366 13.7013 12.8096 13H6.75C6.33579 13 6 12.6642 6 12.25C6 11.8703 6.28215 11.5565 6.64823 11.5068L6.75 11.5H14.25C14.4124 11.5 14.5627 11.5516 14.6855 11.6393C15.5371 11.2296 16.4917 11 17.5 11C18.7886 11 19.9897 11.375 21 12.0218V5.75ZM17.25 7.5C17.6642 7.5 18 7.83579 18 8.25C18 8.6297 17.7178 8.94349 17.3518 8.99315L17.25 9H6.75C6.33579 9 6 8.66421 6 8.25C6 7.8703 6.28215 7.55651 6.64823 7.50685L6.75 7.5H17.25ZM12.5002 15.6285L12.9474 16.0588C13.7651 16.8456 13.7651 18.1544 12.9474 18.9412L12.5002 19.3715C12.7007 19.945 12.9908 20.4742 13.353 20.9409L13.9549 20.7631C15.0524 20.4388 16.1976 21.0998 16.4659 22.2122L16.6385 22.9281C16.9189 22.9754 17.2067 23 17.5 23C17.7933 23 18.0811 22.9754 18.3614 22.9281L18.5341 22.2122C18.8024 21.0998 19.9476 20.4388 21.0451 20.7631L21.647 20.9409C22.0092 20.4742 22.2993 19.945 22.4998 19.3715L22.0526 18.9412C21.2349 18.1544 21.2349 16.8456 22.0526 16.0588L22.4998 15.6285C22.2993 15.055 22.0092 14.5258 21.647 14.0591L21.0451 14.2369C19.9476 14.5612 18.8024 13.9002 18.5341 12.7878L18.3614 12.0719C18.0811 12.0246 17.7933 12 17.5 12C17.2067 12 16.9189 12.0246 16.6385 12.0719L16.4659 12.7878C16.1976 13.9002 15.0524 14.5612 13.9549 14.2369L13.353 14.0591C12.9908 14.5258 12.7007 15.055 12.5002 15.6285ZM17.5 19C16.6994 19 16.0503 18.3284 16.0503 17.5C16.0503 16.6716 16.6994 16 17.5 16C18.3006 16 18.9497 16.6716 18.9497 17.5C18.9497 18.3284 18.3006 19 17.5 19Z"
      fill="#222222"
    />
  </svg>
)

export default IconTextboxSettingsFilled
