import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconCookIslands = ({
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
    <g clipPath="url(#clip0_3366_15267)">
      <path
        d="M20 10C20 15.5228 15.5228 20 10 20C4.47719 20 0 15.5228 0 10C0 10.0024 10 0.00109375 10 0C15.5228 0 20 4.47719 20 10Z"
        fill="#0052B4"
      />
      <path
        d="M9.97327 9.9999H10C10 9.99092 10 9.98217 10 9.97314C9.99112 9.98209 9.98221 9.991 9.97327 9.9999Z"
        fill="#F0F0F0"
      />
      <path
        d="M10 5.21738C10 3.45781 10 2.30488 10 0H9.99832C4.47621 0.0009375 0 4.4777 0 10H5.21738V7.06207L8.15531 10H9.97328C9.98219 9.99109 9.99109 9.98219 10 9.97324C10 9.29953 10 8.6984 10 8.15539L7.06203 5.21738H10Z"
        fill="#F0F0F0"
      />
      <path
        d="M5.05917 1.30444C3.49514 2.19503 2.19487 3.49526 1.30432 5.05929V10.0001H3.91303V3.91323V3.91315H9.99999C9.99999 3.09038 9.99999 2.30655 9.99999 1.30444H5.05917Z"
        fill="#D80027"
      />
      <path
        d="M9.99996 8.77038L6.44703 5.21753H5.21735V5.21761L9.99989 10.0001H9.99996C9.99996 10.0001 9.99996 9.15218 9.99996 8.77038Z"
        fill="#D80027"
      />
      <path
        d="M13.4782 10L13.6633 10.5694H14.2619L13.7776 10.9213L13.9626 11.4907L13.4782 11.1388L12.9939 11.4907L13.1789 10.9213L12.6946 10.5694H13.2932L13.4782 10Z"
        fill="#F0F0F0"
      />
      <path
        d="M11.0188 11.0188L11.5522 11.2905L11.9756 10.8672L11.8819 11.4585L12.4153 11.7303L11.824 11.8239L11.7304 12.4153L11.4585 11.8818L10.8672 11.9755L11.2906 11.5522L11.0188 11.0188Z"
        fill="#F0F0F0"
      />
      <path
        d="M10 13.4782L10.5694 13.2932L10.5695 12.6946L10.9213 13.1788L11.4907 12.9938L11.1388 13.4782L11.4907 13.9626L10.9213 13.7776L10.5695 14.2619V13.6633L10 13.4782Z"
        fill="#F0F0F0"
      />
      <path
        d="M11.0188 15.9378L11.2906 15.4043L10.8672 14.9811L11.4586 15.0747L11.7304 14.5413L11.824 15.1326L12.4153 15.2262L11.8819 15.498L11.9756 16.0894L11.5522 15.6659L11.0188 15.9378Z"
        fill="#F0F0F0"
      />
      <path
        d="M13.4783 16.9565L13.2933 16.3871H12.6946L13.1789 16.0352L12.9939 15.4658L13.4783 15.8177L13.9627 15.4658L13.7777 16.0352L14.262 16.3871H13.6633L13.4783 16.9565Z"
        fill="#F0F0F0"
      />
      <path
        d="M15.9377 15.9378L15.4043 15.6661L14.981 16.0894L15.0746 15.498L14.5412 15.2263L15.1325 15.1326L15.2262 14.5413L15.498 15.0747L16.0893 14.9811L15.6659 15.4044L15.9377 15.9378Z"
        fill="#F0F0F0"
      />
      <path
        d="M16.9565 13.4782L16.3871 13.6633V14.2619L16.0353 13.7775L15.4659 13.9626L15.8178 13.4782L15.4659 12.9938L16.0353 13.1788L16.3871 12.6946V13.2932L16.9565 13.4782Z"
        fill="#F0F0F0"
      />
      <path
        d="M15.9377 11.0188L15.666 11.5521L16.0893 11.9755L15.498 11.8818L15.2262 12.4153L15.1325 11.8239L14.5412 11.7302L15.0746 11.4585L14.981 10.8672L15.4043 11.2905L15.9377 11.0188Z"
        fill="#F0F0F0"
      />
    </g>
    <defs>
      <clipPath id="clip0_3366_15267">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export default IconCookIslands
