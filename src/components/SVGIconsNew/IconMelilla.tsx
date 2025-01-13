import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconMelilla = ({
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
    <g clipPath="url(#clip0_3366_14638)">
      <path
        d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
        fill="#338AF3"
      />
      <path d="M4.78259 10.8696H15.2174V12.174H4.78259V10.8696Z" fill="#818085" />
      <path
        d="M6.52173 6.95655L9.99997 7.3914L13.4782 6.95655V4.8696L12.0869 5.56526L9.99997 3.47827L7.91302 5.56526L6.52173 4.8696V6.95655Z"
        fill="#FFDA44"
      />
      <path
        d="M5.65221 13.4784H4.34784V11.0871L4.78264 10.4349L4.34784 9.7827V8.26099H5.65221V13.4784Z"
        fill="#F0F0F0"
      />
      <path
        d="M15.6522 13.4784H14.3478V8.26099H15.6522V9.78267L15.2174 10.4458L15.6522 11.0872V13.4784Z"
        fill="#F0F0F0"
      />
      <path d="M4.34784 9.78271H15.6522V11.0871H4.34784V9.78271Z" fill="#ACABB1" />
      <path
        d="M9.99997 15.2174C8.08204 15.2174 6.52173 13.657 6.52173 11.7391V6.95654H13.4783V11.7391C13.4782 13.657 11.9179 15.2174 9.99997 15.2174Z"
        fill="#F0F0F0"
      />
      <path
        d="M10 13.9131C8.80131 13.9131 7.82611 12.9379 7.82611 11.7392V8.26099H12.1739V11.7392C12.1739 12.9379 11.1987 13.9131 10 13.9131Z"
        fill="#0052B4"
      />
      <path d="M6.52173 6.95654H7.82606V8.26088H6.52173V6.95654Z" fill="#D80027" />
      <path d="M12.1739 6.95654H13.4782V8.26088H12.1739V6.95654Z" fill="#D80027" />
      <path d="M12.1739 9.78271H13.4782V11.0871H12.1739V9.78271Z" fill="#D80027" />
      <path d="M6.52173 9.78271H7.82606V11.0871H6.52173V9.78271Z" fill="#D80027" />
      <path d="M9.34778 6.95654H10.6521V8.26088H9.34778V6.95654Z" fill="#D80027" />
      <path
        d="M9.99997 13.9131C9.77278 13.9131 9.55375 13.8779 9.34778 13.813V15.1552C9.55918 15.1955 9.777 15.2174 9.99997 15.2174C10.2229 15.2174 10.4407 15.1955 10.6522 15.1552V13.813C10.4462 13.8779 10.2272 13.9131 9.99997 13.9131Z"
        fill="#D80027"
      />
      <path
        d="M7.85515 12.092L6.81421 13.133C6.99468 13.5439 7.25218 13.9134 7.56866 14.2231L8.49054 13.3013C8.16155 12.9834 7.93237 12.5631 7.85515 12.092Z"
        fill="#D80027"
      />
      <path
        d="M13.1857 13.133L12.1448 12.092C12.0675 12.5631 11.8384 12.9833 11.5095 13.3013L12.4313 14.2232C12.7477 13.9134 13.0053 13.5439 13.1857 13.133Z"
        fill="#D80027"
      />
    </g>
    <defs>
      <clipPath id="clip0_3366_14638">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export default IconMelilla
