import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconBonaire = ({
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
    <g clipPath="url(#clip0_3366_14826)">
      <path
        d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
        fill="#F0F0F0"
      />
      <path
        d="M2.92894 2.92885C0.785773 5.07201 -0.180907 7.946 0.0281947 10.7486L10.7486 0.0281432C7.94605 -0.180997 5.0721 0.785682 2.92894 2.92885Z"
        fill="#FFDA44"
      />
      <path
        d="M3.57068 17.6591C7.49962 20.9647 13.373 20.7692 17.0711 17.0712C20.7691 13.3731 20.9646 7.49971 17.659 3.5708L3.57068 17.6591Z"
        fill="#0052B4"
      />
      <path
        d="M9.96431 9.59715L10.8261 9.13035L9.96431 8.66355C9.7631 7.35648 8.73037 6.32371 7.4233 6.12254L6.95646 5.26074L6.48967 6.1225C5.18263 6.32367 4.1499 7.35645 3.94865 8.66352L3.08685 9.13035L3.94861 9.59715C4.14982 10.9042 5.18256 11.937 6.48963 12.1382L6.95646 13L7.42326 12.1382C8.73037 11.937 9.7631 10.9042 9.96431 9.59715ZM6.9565 10.8695C5.99599 10.8695 5.21736 10.0909 5.21736 9.13035C5.21736 8.1698 5.99595 7.39121 6.9565 7.39121C7.91705 7.39121 8.69564 8.1698 8.69564 9.13035C8.69564 10.0909 7.91701 10.8695 6.9565 10.8695Z"
        fill="black"
      />
      <path
        d="M6.95654 7.82617L7.33306 8.47832H8.08615L7.70958 9.13051L8.08615 9.78269H7.33306L6.95654 10.4348L6.58001 9.78269H5.82697L6.20349 9.13051L5.82697 8.47832H6.58001L6.95654 7.82617Z"
        fill="#D80027"
      />
    </g>
    <defs>
      <clipPath id="clip0_3366_14826">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export default IconBonaire
