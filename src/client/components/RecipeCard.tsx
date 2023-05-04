import React from 'react'
import Clock from './Icons/Clock'
import ListIcon from './Icons/List'
import Menu from './Icons/Menu'
import MenuJapan from './Icons/MenuJapan'
import { Recipe } from '../../shared/types'
import Headline from './Headline'
import Paragraph from './Paragraph'
import TagList from './TagList/TagList'

type RecipeCardProps = Pick<
  Recipe,
  'title' | 'ingredients' | 'cookingTime' | 'tags'
> & { buttonText: string }

const RecipeCard = ({
  title,
  ingredients,
  cookingTime,
  tags,
  buttonText,
}: RecipeCardProps) => {
  return (
    <li className="card">
      <Headline
        headlineText={title}
        headlineType="h3"
        headlineClass="card__title"
      />
      <MenuJapan additionalClass="card__image" />
      <ul className="card__overview-list">
        <li className="card__overview-list__item">
          <span>
            <Clock /> {cookingTime ?? '15-30'}
          </span>
          <Paragraph text="Minutes" />
        </li>
        <li className="card__overview-list__item">
          <span>
            <ListIcon /> {ingredients.length}
          </span>
          <Paragraph text="Ingredients" />
        </li>
      </ul>
      {tags && <TagList tags={tags} />}
      <button className="card__button" type="button">
        {buttonText}
      </button>
    </li>
  )
}

export default RecipeCard
