import { Recipe } from '../shared/types'

export const mockedRecipe: Pick<
  Recipe,
  'title' | 'ingredients' | 'description'
> = {
  title: 'Example Recipe',
  ingredients: [
    { name: 'carrot', quantity: 1, unit: 'piece' },
    { name: 'onion', quantity: 1, unit: 'piece' },
  ],
  description:
    'Ipsum culpa culpa nisi enim voluptate laboris ullamco. ' +
    'Labore voluptate voluptate deserunt ullamco incididunt aliquip nisi in sunt id nisi. Tempor ad exercitation laborum pariatur aliquip ea labore elit exercitation. Aute consequat eiusmod ut nisi occaecat mollit. Et non do proident excepteur incididunt minim Lorem labore. Sunt ad nulla sint minim esse Lorem pariatur proident et eu sit.',
}
