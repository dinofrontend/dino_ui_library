import type { ReactElement } from 'react';
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconUnitsEmployee = ({
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
      d="M15.1641 2.10156C15.0273 2.17188 14.918 2.26172 14.832 2.38281C14.707 2.56641 14.707 2.57031 14.6875 3.15234L14.668 3.73828L13.4883 3.75781L12.3047 3.77734L12.1992 3.88672L12.0898 3.99219L12.0781 7.78125L12.0703 11.5703H11.1914H10.3125V11.043C10.3125 10.3398 10.2227 10.1328 9.82422 9.91797L9.66797 9.83203H6.44531C3.85547 9.83203 3.19531 9.84375 3.07422 9.88281C2.85938 9.96094 2.69531 10.1133 2.59375 10.3398C2.5 10.5352 2.5 10.543 2.5 12C2.5 13.457 2.5 13.4648 2.59375 13.6602C2.69531 13.8867 2.85938 14.0391 3.07422 14.1172C3.19531 14.1562 3.85547 14.168 6.44531 14.168H9.66797L9.82422 14.082C10.2227 13.8672 10.3125 13.6602 10.3125 12.957V12.4297H11.1914H12.0703L12.0781 16.2188L12.0898 20.0078L12.1992 20.1133L12.3047 20.2227L13.4883 20.2422L14.668 20.2617L14.6875 20.8477C14.707 21.4297 14.707 21.4336 14.832 21.6172C14.918 21.7383 15.0273 21.8281 15.1641 21.8984L15.3672 22H18.5508C20.7617 22 21.7852 21.9844 21.8945 21.957C22.1094 21.8984 22.3984 21.6016 22.457 21.3867C22.4883 21.2734 22.5 20.7578 22.4922 19.7422L22.4805 18.2617L22.3633 18.0742C22.2773 17.9336 22.1875 17.8516 22.0352 17.7734L21.8242 17.6641L18.5352 17.6719L15.25 17.6836L15.0859 17.793C14.9961 17.8516 14.875 17.9727 14.8164 18.0625C14.7109 18.2188 14.707 18.2461 14.6953 18.8047L14.6836 19.3828H13.8047H12.9297V15.9062V12.4297H13.8086H14.6875V12.957C14.6875 13.6602 14.7773 13.8672 15.1758 14.082L15.332 14.168H18.5547C21.1445 14.168 21.8047 14.1562 21.9258 14.1172C22.1406 14.0391 22.3047 13.8867 22.4062 13.6602C22.5 13.4648 22.5 13.457 22.5 12C22.5 10.543 22.5 10.5352 22.4062 10.3398C22.3047 10.1133 22.1406 9.96094 21.9258 9.88281C21.8047 9.84375 21.1445 9.83203 18.5547 9.83203H15.332L15.1758 9.91797C14.7773 10.1328 14.6875 10.3398 14.6875 11.043V11.5703H13.8086H12.9297V8.09375V4.61719H13.8047H14.6836L14.6953 5.19531C14.707 5.75391 14.7109 5.78125 14.8164 5.9375C14.875 6.02734 14.9961 6.14844 15.0859 6.20703L15.25 6.31641L18.5352 6.32812L21.8242 6.33594L22.0352 6.22656C22.1875 6.14844 22.2773 6.06641 22.3633 5.92578L22.4805 5.73828L22.4922 4.25781C22.5 3.24219 22.4883 2.72656 22.457 2.61328C22.3984 2.39844 22.1094 2.10156 21.8945 2.04297C21.7852 2.01562 20.7617 2 18.5508 2H15.3672L15.1641 2.10156ZM21.6406 4.16797V5.47656H18.5938H15.5469V4.16797V2.85938H18.5938H21.6406V4.16797ZM9.45312 12V13.2891H6.40625H3.35938V12V10.7109H6.40625H9.45312V12ZM21.6406 12V13.2891H18.5938H15.5469V12V10.7109H18.5938H21.6406V12ZM21.6406 19.832V21.1406H18.5938H15.5469V19.832V18.5234H18.5938H21.6406V19.832Z"
      fill="#555555"
    />
  </svg>
)

export default IconUnitsEmployee
