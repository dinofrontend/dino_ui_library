import React, { useState } from 'react'
import { Select as SelectComp } from '../components'
import { TItemValue, TSelectOptions } from '../types/globals'
import imageFile from '../assets/images/avatar.jpg'

const image = {
  src: imageFile,
  alt: 'my image'
}

export default {
  title: 'Select',
  component: SelectComp,
  argTypes: {
    multiSelect: {
      options: ['true', 'false'],
      control: { multiSelect: 'false' }
    },
    withSearch: {
      options: ['true', 'false'],
      control: { withSearch: 'false' }
    },
    withFooter: {
      options: ['true', 'false'],
      control: { withFooter: 'false' }
    }
  }
}

const OPTIONS: TSelectOptions = [
  {
    value: 'armenia',
    label: 'Armenia'
  },
  {
    value: 'italy',
    label: 'Italy'
  },
  {
    value: 'france',
    label: 'France'
  },
  {
    value: 'spain',
    label: 'Spain'
  },
  {
    value: 'germany',
    label: 'Germany'
  }
]

const Template = (args): JSX.Element => {
  // const [selectedValue, setSelectedValue] = useState<TItemValue>(null)
  const [selectedValues, setSelectedValues] = useState<TItemValue[]>([
    'armenia',
    'italy',
    'france',
    'spain',
    'germany'
  ])

  return (
    <div style={{ width: 300 }}>
      <SelectComp
        label="Select"
        placeHolder="Select country"
        // onSelect={setSelectedValue}
        options={OPTIONS}
        // selectedValue={selectedValue}
        selectedItems={selectedValues}
        setSelectedItems={setSelectedValues}
        {...args}
      />
    </div>
  )
}
export const Select = Template.bind({})

Select.args = {
  options: OPTIONS,
  multiSelect: true,
  withFooter: true,
  withSearch: false,
  // avatar: image.src,
  // leftIconProps: { name: 'user' },
  // rightIconProps: { name: 'more' },
}
