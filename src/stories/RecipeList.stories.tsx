import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import RecipeListComponent from '../client/components/RecipeList'

export default {
  title: 'Components/Recipe List',
  component: RecipeListComponent,
} as ComponentMeta<typeof RecipeListComponent>

const Template: ComponentStory<typeof RecipeListComponent> = (args) => (
  <RecipeListComponent {...args} />
)

export const RecipeList = Template.bind({})
RecipeList.args = {
  listItems: [
    { unit: '1', ingredient: 'apple' },
    { unit: '2 spoons', ingredient: 'sugar' },
    { unit: 'a piece of', ingredient: 'banana' },
    { unit: '150ml', ingredient: 'water' },
  ],
}
