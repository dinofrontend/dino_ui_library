import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconSouthKorea = ({
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
    <g clipPath="url(#clip0_3366_15822)">
      <path
        d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
        fill="#F0F0F0"
      />
      <path
        d="M13.4782 9.99997C13.4782 10.8695 11.9209 13.0434 9.99997 13.0434C8.07899 13.0434 6.52173 10.8695 6.52173 9.99997C6.52173 8.07895 8.07899 6.52173 9.99997 6.52173C11.9209 6.52173 13.4782 8.07895 13.4782 9.99997Z"
        fill="#D80027"
      />
      <path
        d="M13.4782 10C13.4782 11.921 11.9209 13.4782 9.99997 13.4782C8.07899 13.4782 6.52173 11.921 6.52173 10"
        fill="#0052B4"
      />
      <path
        d="M13.6865 13.0745L14.6087 12.1523L15.2235 12.7671L14.3013 13.6892L13.6865 13.0745Z"
        fill="black"
      />
      <path
        d="M12.1491 14.6116L13.0713 13.6894L13.6861 14.3042L12.7639 15.2264L12.1491 14.6116Z"
        fill="black"
      />
      <path
        d="M15.531 14.9187L16.4532 13.9965L17.068 14.6113L16.1458 15.5335L15.531 14.9187Z"
        fill="black"
      />
      <path
        d="M13.9937 16.4561L14.9158 15.5339L15.5306 16.1487L14.6084 17.0708L13.9937 16.4561Z"
        fill="black"
      />
      <path
        d="M14.6087 13.9968L15.5309 13.0747L16.1457 13.6894L15.2235 14.6116L14.6087 13.9968Z"
        fill="black"
      />
      <path
        d="M13.0717 15.5337L13.9939 14.6115L14.6087 15.2263L13.6865 16.1485L13.0717 15.5337Z"
        fill="black"
      />
      <path
        d="M15.535 6.92725L13.0759 4.46813L13.6907 3.85334L16.1498 6.31246L15.535 6.92725Z"
        fill="black"
      />
      <path
        d="M13.0755 6.31274L12.1533 5.39058L12.7681 4.77582L13.6903 5.69799L13.0755 6.31274Z"
        fill="black"
      />
      <path
        d="M14.6124 7.84985L13.6903 6.92769L14.305 6.31293L15.2272 7.2351L14.6124 7.84985Z"
        fill="black"
      />
      <path
        d="M14.9196 4.46802L13.9975 3.54585L14.6122 2.93107L15.5344 3.85323L14.9196 4.46802Z"
        fill="black"
      />
      <path
        d="M16.4574 6.00537L15.5352 5.08321L16.15 4.46842L17.0722 5.39058L16.4574 6.00537Z"
        fill="black"
      />
      <path
        d="M3.5451 13.9949L6.00422 16.454L5.38944 17.0688L2.93032 14.6097L3.5451 13.9949Z"
        fill="black"
      />
      <path
        d="M6.00409 14.6094L6.92625 15.5315L6.3115 16.1463L5.38933 15.2241L6.00409 14.6094Z"
        fill="black"
      />
      <path
        d="M4.46698 13.0728L5.38915 13.9949L4.77436 14.6097L3.85219 13.6875L4.46698 13.0728Z"
        fill="black"
      />
      <path
        d="M5.38928 12.1501L7.8484 14.6093L7.23361 15.224L4.7745 12.7649L5.38928 12.1501Z"
        fill="black"
      />
      <path
        d="M6.00397 3.54395L3.54485 6.00306L2.93006 5.38828L5.38918 2.92916L6.00397 3.54395Z"
        fill="black"
      />
      <path
        d="M6.92615 4.46606L4.46703 6.92518L3.85224 6.3104L6.31136 3.85128L6.92615 4.46606Z"
        fill="black"
      />
      <path
        d="M7.84918 5.38867L5.39007 7.84779L4.77531 7.23303L7.23442 4.77391L7.84918 5.38867Z"
        fill="black"
      />
    </g>
    <defs>
      <clipPath id="clip0_3366_15822">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export default IconSouthKorea
