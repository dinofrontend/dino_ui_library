import React, { ReactElement } from 'react'
import { Icon } from '../Icon'
import { Text } from '../Text'
import { ChipCustomType, TChipsProps } from './types'
import classNames from 'classnames'

enum ChipsActionIconSize {
  large = 'medium',
  medium = 'small',
  small = 'xsmall'
}

export const Chips = (props: TChipsProps): ReactElement => {
  const {
    type = 'filled',
    color = 'primary',
    size = 'large',
    text,
    disabled,
    className = '',
    leftIconProps,
    withAction,
    onClick,
    dataId = ''
  } = props

  const customType = disabled
    ? 'disabled'
    : type == ChipCustomType.filled
    ? ChipCustomType.inverse
    : color

  const handleClick = (event: TClickEventType) => {
    event.stopPropagation()
    onClick?.(event)
  }
  return (
    <div
      className={classNames(
        `chips chips--${type} chips--${disabled ? 'disabled' : color} chips--${size}`,
        className
      )}
    >
      {leftIconProps?.name && (
        <Icon
          dataId={`${dataId}-icon`}
          size={size == 'small' ? 'xsmall' : 'small'}
          type={customType}
          {...leftIconProps}
        />
      )}
      {text ? (
        <Text
          dataId={`${dataId}-text`}
          type={customType}
          size={size == 'small' ? 'small' : 'standard'}
          className="chips__label"
        >
          <>{text}</>
        </Text>
      ) : null}
      {withAction && (
        <Icon
          dataId={`${dataId}-icon`}
          name="dismiss-circle-hover"
          size={ChipsActionIconSize[size]}
          type={customType}
          className="chips__delete"
          onClick={handleClick}
        />
      )}
    </div>
  )
}
