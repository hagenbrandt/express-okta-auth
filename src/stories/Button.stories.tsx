import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import ButtonComponent from '../client/components/Button'

export default {
  title: 'Components/Button',
  component: ButtonComponent,
} as ComponentMeta<typeof ButtonComponent>

const Template: ComponentStory<typeof ButtonComponent> = (args) => (
  <ButtonComponent {...args} />
)

export const Button = Template.bind({})
Button.args = {
  buttonText: 'Push the button',
}
