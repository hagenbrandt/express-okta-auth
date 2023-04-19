import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import RecipeListComponent from '../client/components/RecipeList'
import { mockedRecipe } from '../mocks/mockedRecipe'

export default {
  title: 'Components/Recipe List',
  component: RecipeListComponent,
} as ComponentMeta<typeof RecipeListComponent>

const Template: ComponentStory<typeof RecipeListComponent> = (args) => (
  <RecipeListComponent {...args} />
)

export const RecipeList = Template.bind({})
RecipeList.args = {
  recipes: [mockedRecipe, mockedRecipe, mockedRecipe],
}
