import React, { useState } from 'react'
import { Radio as _Radio, RadioGroup as _RadioGroup, Icon } from '../index'

const RADIO_OPTIONS = [
  {
    label: 'Text1',
    helperText: 'Label for radio',
    value: 1
  },
  {
    label: 'Text2',
    helperText: 'Label for radio',
    value: 2
  },
  {
    label: 'Text3',
    value: 3
  }
]

export default {
  title: 'Radio',
  component: _Radio,
  argTypes: {}
}

const Template = (args) => {
  const [isChecked, setIsChecked] = useState(false)
  return <_Radio {...args} isSelected={isChecked} onClick={setIsChecked} />
}

export const Radio = Template.bind({})

Radio.args = {
  disabled: false,
  label: 'Label for radio',
  helperText: 'Label for radio'
}

const RadioGroupTemplate = (args) => {
  const [selected, setSelected] = useState(null)
  return <_RadioGroup {...args} value={selected} handleChange={setSelected} />
}
export const RadioGroup = RadioGroupTemplate.bind({})

RadioGroup.args = {
  options: RADIO_OPTIONS,
  isHorizontal: false,
  label: 'Label',
  disabled: false,
  required: false,
  name: 'option',
  labelAddons: <Icon name={'info'} size={'xsmall'} type={'information'} className={'ml-4'} />
}
