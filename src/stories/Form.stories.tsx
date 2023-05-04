import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import FormComponent from '../client/components/Form'

export default {
  title: 'Components/Form',
  component: FormComponent,
} as ComponentMeta<typeof FormComponent>

const Template: ComponentStory<typeof FormComponent> = (args) => (
  <FormComponent {...args} />
)

export const Form = Template.bind({})
