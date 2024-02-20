import React from 'react'
import { Icon, Pagination as _Pagination } from '../index'

export default {
  title: 'Pagination',
  component: _Pagination,
  argTypes: {
    size: {
      options: ['large', 'medium', 'small'],
      control: { type: 'radio' }
    }
  }
}
const Template = (args) => (
  <_Pagination
    pageSize={10}
    {...args}
    handleChangePage={(item) => {
      console.log(item)
    }}
    labels={{
      next: <Icon name="arrow-right" />,
      previous: <Icon name="arrow-left" />
    }}
    totalCount={286}
    breakLabel={<Icon name="more" />}
    classname=""
  />
)

export const Pagination = Template.bind({})

Pagination.args = {
  size: 'large',
  totalCount: 100,
  nextLabel: <Icon name="arrow-right" />,
  prevLabel: <Icon name="arrow-left" />,
  breakLabel: <Icon name="more" />
}
