import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import TagComponent from '../client/components/TagList/Tag'

export default {
  title: 'Components/Tag',
  component: TagComponent,
} as ComponentMeta<typeof TagComponent>

const Template: ComponentStory<typeof TagComponent> = (args) => (
  <TagComponent {...args} />
)

export const Tag = Template.bind({})

Tag.args = {
  content: 'Strawberry',
}
