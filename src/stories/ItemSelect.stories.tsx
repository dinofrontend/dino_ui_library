import React, { useState } from 'react'
import { ItemSelectGroup as _ItemSelectGroup } from '../components/ItemSelect'
import { ItemSelect as _ItemSelect } from '../components/ItemSelect'
import imageFile1 from '../assets/images/ArCa.svg'
import imageFile2 from '../assets/images/Mastercard.svg'
import imageFile3 from '../assets/images/Visa.svg'
import IconCheckmark from '../components/SVGIcons/IconCheckmark'
import IconAmd from '../components/SVGIcons/IconAmd'

export default {
  title: 'ItemSelect',
  component: _ItemSelectGroup
}

const ITEMS = [
  {
    value: 1,
    image: imageFile1,
    label: 'Arca',
    disabled: false,
    onClick: (e: any) => {
      console.log(e)
    }
  },
  {
    value: 2,
    image: imageFile2,
    label: 'MasterCard',
    disabled: false,
    onClick: (e: any) => {
      console.log(e)
    }
  },
  {
    value: 3,
    image: imageFile3,
    label: 'Visa',
    disabled: false,
    onClick: (e: any) => {
      console.log(e)
    }
  }
]

const Template = (args) => {
  return (
    <div style={{ width: '50%' }}>
      <_ItemSelect {...args} />
    </div>
  )
}

export const ItemSelect = Template.bind({})

ItemSelect.args = {
  image: null,
  leftIconProps: <IconAmd size={'small'} />,
  rightIconProps: <IconCheckmark type={'brand'} />,
  label: 'Item Select',
  disabled: false,
  value: null,
  onClick: (e: any) => {
    console.log(e)
  }
}

const ItemSelectGroupTemplate = (args) => {
  const [selected, setSelected] = useState(1)
  return (
    <div style={{ width: '50%' }}>
      <_ItemSelectGroup {...args} items={ITEMS} value={selected} handleChange={setSelected} />
    </div>
  )
}
export const ItemSelectGroup = ItemSelectGroupTemplate.bind({})

ItemSelectGroup.args = {
  isHorizontal: false
}
