import React, { forwardRef } from 'react'

import Icon from '../Icon'

import { TSwitcherProps } from './types'
import '../../assets/styles/components/_controllers.scss'
import classnames from 'classnames'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const Switcher = forwardRef((props: TSwitcherProps, ref): JSX.Element => {
  const {
    onClick,
    id = '',
    name,
    value,
    disabled,
    size = 'large',
    setFieldValue,
    selectedValue,
    className = ''
  } = props
  const isChecked = !!value || !!selectedValue

  const changeHandler = () => {
    if (name && setFieldValue) {
      setFieldValue(name, !isChecked)
    }

    if (onClick) {
      onClick(!isChecked)
    }
  }

  return (
    <label
      id={id}
      className={classnames(
        'controller',
        'controller--switch',
        `controller--switch-${size}`,
        className,
        { 'controller--disabled': disabled }
      )}
    >
      <input
        type="checkbox"
        tabIndex={0}
        onChange={changeHandler}
        checked={isChecked}
        disabled={disabled}
      />
      <span className="controller__icon">
        <span className="controller__icon__inner">
          <Icon name="mark" size="xsmall" className="controller__mark" />
        </span>
      </span>
    </label>
  )
})

Switcher.displayName = 'Switcher'
export default Switcher
