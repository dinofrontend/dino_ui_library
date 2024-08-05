import React from 'react'
import { TItemSelectGroupProps } from './types'
import { ItemSelect } from './ItemSelect'
import classnames from 'classnames'
import IconCheckmark from '../SVGIcons/IconCheckmark'

export const ItemSelectGroup = (props: TItemSelectGroupProps): JSX.Element => {
  const { items, name, handleChange, value, isHorizontal, className } = props

  return (
    <div
      className={classnames(
        'item-select-group',
        {
          'item-select-group--horizontal': isHorizontal
        },
        className
      )}
    >
      {items.map(({ value: itemValue, label, image, leftIconProps, id, disabled }, index) => (
        <ItemSelect
          name={name}
          key={id || index}
          label={label}
          image={image}
          leftIconProps={leftIconProps}
          rightIconProps={<IconCheckmark type={'brand'} />}
          handleChange={handleChange}
          itemValue={itemValue}
          value={value}
          disabled={disabled}
        />
      ))}
    </div>
  )
}
