import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconSavingsFilled = ({
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
    <g id="Size=24, Theme=Filled">
      <path
        id="Shape"
        d="M18.8225 11.1283C19.7843 10.4718 20.466 9.51181 20.7894 8.43654C20.8886 8.57241 20.9827 8.71346 21.0713 8.85993C21.6755 9.85813 22 11.063 22 12.5001C22 14.706 21.1671 16.2492 20.3194 17.2381C19.899 17.7287 19.4777 18.0802 19.1579 18.3112C19.1021 18.3514 19.0493 18.3881 19 18.4214V20.2501C19 21.2166 18.2165 22.0001 17.25 22.0001H16C15.1716 22.0001 14.5 21.3285 14.5 20.5001H12.5C12.5 21.3285 11.8284 22.0001 11 22.0001H9.75C8.7835 22.0001 8 21.2166 8 20.2501V19.5674C7.86194 19.5209 7.7053 19.4631 7.53573 19.3922C6.93965 19.1427 6.15955 18.7203 5.46967 18.0304C4.68564 17.2464 4.16052 16.4283 3.8651 15.8994C3.77791 15.7433 3.64768 15.66 3.53621 15.6414C2.64973 15.4937 2 14.7267 2 13.828V12.0751C2 11.2324 2.60926 10.5132 3.44051 10.3746C3.52742 10.3601 3.6555 10.2738 3.71651 10.0911C3.90886 9.51484 4.28209 8.6573 4.96967 7.96972C5.53209 7.40731 6.15488 6.99416 6.6279 6.72387C6.76427 6.64594 6.88983 6.57896 7 6.52288V3.67121C7 2.73331 8.13062 2.34833 8.73986 2.95499C9.07031 3.28404 9.55006 3.72288 10.0811 4.08935C10.6111 4.45512 11.1177 4.69615 11.5352 4.74929C11.0507 5.71174 10.8779 6.82571 11.0853 7.92421C11.2662 8.88185 11.999 9.48693 12.6874 9.77201L16.3831 11.3024C17.0715 11.5875 18.0175 11.6777 18.8225 11.1283ZM8 11C8.55228 11 9 10.5523 9 10C9 9.44775 8.55228 9.00003 8 9.00003C7.44772 9.00003 7 9.44775 7 10C7 10.5523 7.44772 11 8 11ZM18.2588 10.3023C19.211 9.65236 19.8199 8.62989 19.9666 7.52135C19.9666 7.52133 19.9666 7.52136 19.9666 7.52135C20.0558 6.8476 19.9742 6.14201 19.6954 5.46899C18.8498 3.42808 16.5099 2.45907 14.4689 3.30465C12.6886 4.04227 11.7239 5.91709 12.0679 7.73856C12.0926 7.86889 12.1369 7.99071 12.1972 8.10332C12.2471 8.19656 12.3079 8.28348 12.3776 8.36366C12.5604 8.57394 12.8039 8.7379 13.07 8.84809L16.7657 10.3785C17.2558 10.5815 17.8206 10.6013 18.2588 10.3023Z"
        fill="#222222"
      />
    </g>
  </svg>
)

export default IconSavingsFilled
