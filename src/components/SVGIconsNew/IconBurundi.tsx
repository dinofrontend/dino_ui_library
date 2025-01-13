import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconBurundi = ({
  size,
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
      [className]: className
    })}
    viewBox="0 0 24 24"
    fill="none"
    onClick={onClick}
    ref={refHandler}
    id={id}
    data-id={dataId ? `${dataId}-svg-icon` : ''}
  >
    <g clipPath="url(#clip0_3366_15037)">
      <path
        d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
        fill="#F0F0F0"
      />
      <path
        d="M16.0889 2.06644C12.5087 -0.688481 7.49123 -0.688481 3.91107 2.0664L9.99998 8.15531L16.0889 2.06644Z"
        fill="#D80027"
      />
      <path
        d="M9.9999 11.8446L3.91107 17.9334C7.49123 20.6883 12.5087 20.6883 16.0889 17.9334L9.99998 11.8445L9.9999 11.8446Z"
        fill="#D80027"
      />
      <path
        d="M8.15536 10L2.0665 3.91113C-0.688425 7.49129 -0.688425 12.5088 2.0665 16.0889L8.15536 10Z"
        fill="#6DA544"
      />
      <path
        d="M11.8447 10L17.9336 16.0889C20.6885 12.5088 20.6885 7.49129 17.9336 3.91113L11.8447 10Z"
        fill="#6DA544"
      />
      <path
        d="M9.99997 14.3477C12.4012 14.3477 14.3478 12.4011 14.3478 9.99991C14.3478 7.59868 12.4012 5.6521 9.99997 5.6521C7.59874 5.6521 5.65216 7.59868 5.65216 9.99991C5.65216 12.4011 7.59874 14.3477 9.99997 14.3477Z"
        fill="#F0F0F0"
      />
      <path
        d="M9.99999 6.95654L10.3765 7.60873H11.1296L10.753 8.26088L11.1296 8.91307H10.3765L9.99999 9.56525L9.62347 8.91307H8.87042L9.24695 8.26088L8.87042 7.60873H9.62347L9.99999 6.95654Z"
        fill="#D80027"
      />
      <path
        d="M8.08615 10L8.46268 10.6522H9.21572L8.8392 11.3043L9.21572 11.9565H8.46268L8.08615 12.6087L7.70959 11.9565H6.95654L7.33307 11.3043L6.95654 10.6522H7.70959L8.08615 10Z"
        fill="#D80027"
      />
      <path
        d="M11.9139 10L12.2904 10.6522H13.0435L12.667 11.3043L13.0435 11.9565H12.2904L11.9139 12.6087L11.5373 11.9565H10.7843L11.1608 11.3043L10.7843 10.6522H11.5373L11.9139 10Z"
        fill="#D80027"
      />
    </g>
    <defs>
      <clipPath id="clip0_3366_15037">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export default IconBurundi
