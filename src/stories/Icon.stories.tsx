import React from 'react'
import { Meta } from '@storybook/react'
import { Icon as IconComp, Text } from '../components'

const ICONS = [
  'trash',
  'search',
  'eye-on',
  'eye-off',
  'mail',
  'logout',
  'image',
  'link',
  'wallet',
  'minus',
  'more',
  'warning',
  'error',
  'caret-left',
  'caret-right',
  'caret-down',
  'caret-up',
  'favorite',
  'favorite-fill',
  'lock',
  'lock-fill',
  'settings',
  'settings-fill',
  'comment',
  'comment-fill',
  'bookmark',
  'bookmark-fill',
  'notification',
  'notification-fill',
  'notification2',
  'notification2-fill',
  'moneybox',
  'moneybox-fill',
  'user',
  'user-fill',
  'info',
  'info-fill',
  'edit',
  'edit-fill',
  'share',
  'share-fill',
  'home',
  'home-fill',
  'circle-mark',
  'circle-mark-fill',
  'calendar',
  'calendar-fill',
  'mark',
  'arrow-left',
  'arrow-right',
  'arrow-up',
  'arrow-down',
  'arrow2-left',
  'arrow2-right',
  'arrow2-up',
  'arrow2-down',
  'attach',
  'close',
  'add'
]

export default {
  title: 'Icon',
  component: IconComp,
  argTypes: {
    type: {
      options: [
        'primary',
        'secondary',
        'tertiary',
        'disabled',
        'inverse',
        'selected',
        'brand',
        'danger',
        'warning',
        'success',
        'information',
        'discovery'
      ],
      control: { type: 'radio' }
    },
    size: {
      options: ['large', 'medium', 'small', 'xsmall'],
      control: { type: 'radio' }
    }
  }
} as Meta

const Template = (args) => (
  <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-start' }}>
    {ICONS.map((iconName) => (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: 10,
          flex: '70px',
          maxWidth: '70px'
        }}
        key={iconName}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '40px',
            height: '40px',
            marginBottom: '5px',
            border: '1px solid #919191',
            backgroundColor: `${args.type == 'inverse' ? '#919191' : ''}`
          }}
        >
          <IconComp {...args} name={iconName} size={`${args.size}`} type={`${args.type}`} />
        </div>
        <Text size="small">{iconName}</Text>
      </div>
    ))}
  </div>
)

export const Icon = Template.bind({})
Icon.args = {
  type: '',
  size: 'medium'
}
