// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React from 'react'
import * as yup from 'yup'
import Input from '../components/Input'
import FormField from '../components/FormField'
import { FormContainer } from '../components'

export default {
  title: 'Form',
  component: FormContainer
}

const INITIAL_VALUES = { firstName: 'Lilit' }

const VALIDATION_SCHEME = yup.object({
  firstName: yup.string().required()
})
const Template = (): JSX.Element => {
  return (
    <>
      <FormContainer validationScheme={VALIDATION_SCHEME} initialValues={INITIAL_VALUES}>
        <>
          <FormField component={Input} name={'firstName'} label="First Name" />
          <FormField component={Input} name={'secondname'} label="Second Name" />
          <FormField component={Input} name={'age'} label="Age" />
        </>
      </FormContainer>
    </>
  )
}
export const Form = Template.bind({})
