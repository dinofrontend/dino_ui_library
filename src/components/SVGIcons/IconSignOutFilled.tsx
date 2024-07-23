import React, { ReactElement } from 'react'
import { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconSignOutFilled = ({
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
      id="Shape"
      d="M12 4.35418V10.5L12.0005 11.005L19.442 11.004L17.7196 9.28026C17.4534 9.01395 17.4292 8.59728 17.6471 8.3037L17.7198 8.2196C17.9861 7.95338 18.4027 7.92924 18.6963 8.14715L18.7804 8.21978L21.777 11.2174C22.043 11.4835 22.0674 11.8997 21.85 12.1933L21.7775 12.2774L18.7809 15.2808C18.4884 15.5741 18.0135 15.5746 17.7203 15.282C17.4537 15.0161 17.429 14.5994 17.6465 14.3056L17.7191 14.2214L19.432 12.504L12.0005 12.505L12 19.25C12 19.7164 11.5788 20.0697 11.1196 19.9886L2.61955 18.4873C2.26121 18.424 2 18.1126 2 17.7487V5.75002C2 5.38271 2.26601 5.06945 2.62847 5.00993L11.1285 3.6141C11.5851 3.53911 12 3.89145 12 4.35418ZM8.50215 11.5C7.94868 11.5 7.5 11.9487 7.5 12.5022C7.5 13.0556 7.94868 13.5043 8.50215 13.5043C9.05562 13.5043 9.5043 13.0556 9.5043 12.5022C9.5043 11.9487 9.05562 11.5 8.50215 11.5ZM13 18.5013L13.7652 18.5015L13.867 18.4946C14.2335 18.4448 14.5158 18.1304 14.5152 17.7502L14.508 13.5H13V18.5013ZM13.002 10L13 8.72536V5.00001L13.7453 5.00002C14.1245 5.00002 14.4381 5.28154 14.4883 5.64713L14.4953 5.74878L14.502 10H13.002Z"
      fill="#222222"
    />
  </svg>
)

export default IconSignOutFilled
