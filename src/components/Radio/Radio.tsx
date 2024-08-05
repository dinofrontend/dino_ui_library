import React, { forwardRef, ReactElement } from 'react'
import { TRadioProps } from './types'
import { Text } from '../Text'
import classnames from 'classnames'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const Radio = forwardRef((props: TRadioProps, ref): ReactElement | null => {
  const {
    name,
    label,
    helperText,
    disabled,
    setFieldValue,
    isSelected,
    value,
    className = '',
    onClick,
    dataId = '',
    iconProps
  } = props
  const isChecked = !!value || !!isSelected

  const changeHandler = () => {
    if (name && setFieldValue) {
      setFieldValue(name, !isChecked, { shouldValidate: !isChecked })
    }
    if (onClick) {
      onClick(!isChecked)
    }
  }

  return (
    <label
      className={classnames('controller', 'controller--radio', className, {
        'controller--disabled': disabled
      })}
    >
      <input
        data-id={dataId}
        type="radio"
        tabIndex={0}
        onChange={changeHandler}
        checked={isSelected}
        disabled={disabled}
      />
      {iconProps ? iconProps : <span className="controller__icon"></span>}

      {label ? (
        <div className="controller__right">
          <Text type={disabled ? 'disabled' : 'primary'} className="controller__label">
            {label}
          </Text>
          {helperText ? (
            <Text size="small" type={disabled ? 'disabled' : 'secondary'}>
              {helperText}
            </Text>
          ) : null}
        </div>
      ) : null}
    </label>
  )
})

Radio.displayName = 'Radio'
