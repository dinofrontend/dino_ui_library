import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconSaudiArabia = ({
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
    <g clipPath="url(#clip0_3366_15640)">
      <path
        d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
        fill="#6DA544"
      />
      <path
        d="M5.65216 11.9565C5.65216 12.6769 6.23615 13.2609 6.9565 13.2609H10.8695C10.8695 13.8612 11.3562 14.3478 11.9565 14.3478H13.2608C13.8611 14.3478 14.3478 13.8612 14.3478 13.2609V11.9565H5.65216Z"
        fill="#F0F0F0"
      />
      <path
        d="M14.4565 5.6521V8.69558C14.4565 9.17507 14.0665 9.56515 13.587 9.56515V10.8695C14.7857 10.8695 15.7609 9.89425 15.7609 8.69558V5.6521H14.4565Z"
        fill="#F0F0F0"
      />
      <path
        d="M5.10871 8.69558C5.10871 9.17507 4.71863 9.56515 4.23914 9.56515V10.8695C5.43785 10.8695 6.41304 9.89425 6.41304 8.69558V5.6521H5.10871V8.69558Z"
        fill="#F0F0F0"
      />
      <path d="M12.5 5.6521H13.8043V8.69558H12.5V5.6521Z" fill="#F0F0F0" />
      <path
        d="M10.5435 7.39124C10.5435 7.51112 10.4459 7.60862 10.3261 7.60862C10.2063 7.60862 10.1087 7.51108 10.1087 7.39124V5.6521H8.80439V7.39124C8.80439 7.51112 8.70685 7.60862 8.587 7.60862C8.46716 7.60862 8.36962 7.51108 8.36962 7.39124V5.6521H7.06525V7.39124C7.06525 8.23034 7.7479 8.913 8.587 8.913C8.91017 8.913 9.20986 8.81144 9.45657 8.63894C9.70325 8.8114 10.003 8.913 10.3261 8.913C10.3912 8.913 10.4552 8.90843 10.5181 8.90042C10.4257 9.28124 10.0827 9.56515 9.67396 9.56515V10.8695C10.8727 10.8695 11.8479 9.89425 11.8479 8.69558V7.39124V5.6521H10.5435V7.39124H10.5435Z"
        fill="#F0F0F0"
      />
      <path d="M7.06525 9.56519H9.02177V10.8695H7.06525V9.56519Z" fill="#F0F0F0" />
    </g>
    <defs>
      <clipPath id="clip0_3366_15640">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export default IconSaudiArabia
