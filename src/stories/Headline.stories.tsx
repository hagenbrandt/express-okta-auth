import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import HeadlineComponent from '../client/components/Headline'

export default {
  title: 'Components/Headline',
  component: HeadlineComponent,
} as ComponentMeta<typeof HeadlineComponent>

const Template: ComponentStory<typeof HeadlineComponent> = (args) => (
  <HeadlineComponent {...args} />
)

export const Headline = Template.bind({})
Headline.args = {
  headlineText: 'This is a H1 headline',
  headlineType: 'h1',
  headlineClass: 'additional-class',
}
