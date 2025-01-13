import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconPakistan = ({
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
    <g clipPath="url(#clip0_3366_15190)">
      <path
        d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
        fill="#F0F0F0"
      />
      <path
        d="M0 9.99992C0 13.7904 2.10895 17.088 5.21738 18.784V1.21582C2.10895 2.91188 0 6.20949 0 9.99992Z"
        fill="#F0F0F0"
      />
      <path
        d="M9.99999 0C8.26757 0 6.63812 0.440742 5.21738 1.2159V18.7841C6.63812 19.5593 8.26757 20 9.99999 20C15.5228 20 20 15.5228 20 10C20 4.47719 15.5228 0 9.99999 0Z"
        fill="#496E2D"
      />
      <path
        d="M14.2755 11.6536C13.0104 12.5677 11.2438 12.2832 10.3297 11.0181C9.41555 9.75297 9.70012 7.98637 10.9652 7.07231C11.3597 6.78731 11.8029 6.61883 12.2538 6.56028C11.3863 6.43055 10.4693 6.62602 9.70227 7.18028C8.14523 8.30536 7.79496 10.4796 8.92 12.0367C10.045 13.5937 12.2193 13.944 13.7764 12.8189C14.5436 12.2646 15.0171 11.4555 15.1662 10.5911C14.9691 11.0007 14.67 11.3686 14.2755 11.6536Z"
        fill="#F0F0F0"
      />
      <path
        d="M14.2213 6.52173L14.934 7.28974L15.8846 6.84942L15.3743 7.76442L16.087 8.53251L15.059 8.32997L14.5488 9.24505L14.4237 8.20481L13.3958 8.00228L14.3464 7.56196L14.2213 6.52173Z"
        fill="#F0F0F0"
      />
    </g>
    <defs>
      <clipPath id="clip0_3366_15190">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export default IconPakistan
