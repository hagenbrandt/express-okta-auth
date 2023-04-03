import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import RecipeCardComponent from '../client/components/RecipeCard'

export default {
  title: 'Components/Recipe Card',
  component: RecipeCardComponent,
} as ComponentMeta<typeof RecipeCardComponent>

const Template: ComponentStory<typeof RecipeCardComponent> = (args) => (
  <RecipeCardComponent {...args} />
)

export const RecipeCard = Template.bind({})
RecipeCard.args = {
  title: 'Example Recipe',
  ingredients: ['carrot', 'onion'],
  buttonText: 'Show more',
}
