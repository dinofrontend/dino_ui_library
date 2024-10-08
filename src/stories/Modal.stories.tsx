import React, { useState } from 'react'
import { Modal as _Modal } from '../index'
import IconCheckmarkCircle from '../components/SVGIcons/IconCheckmarkCircle'
import { StoryFn } from '@storybook/react'
import { TModalPropTypes } from '../components/Modal/types'

export default {
  title: 'Modal',
  component: _Modal,
  argTypes: {
    size: {
      options: ['large', 'medium', 'small'],
      control: { type: 'radio' }
    }
  }
}

const Template: StoryFn<TModalPropTypes> = (args) => {
  const [isOpen, setIsOpen] = useState(false)
  const closeModal = () => setIsOpen(false)
  const openModal = () => setIsOpen(true)
  return (
    <div>
      <p onClick={openModal}>click here </p>
      <_Modal
        {...args}
        onClose={closeModal}
        isOpen={isOpen}
        onSubmit={() => {
          closeModal()
          console.log('submit')
        }}
        buttonProps={{
          confirm: {
            buttonText: 'Register',
            buttonActionType: 'submit'
          },
          cancel: { buttonText: 'Cancel' }
        }}
      >
        <div>Modal content</div>
      </_Modal>
    </div>
  )
}
export const Modal = Template.bind({})

Modal.args = {
  size: 'small',
  title: 'Title',
  closeIcon: true,
  withFooter: true,
  titleIconProps: {
    Component: IconCheckmarkCircle,
    type: 'primary'
  }
}
