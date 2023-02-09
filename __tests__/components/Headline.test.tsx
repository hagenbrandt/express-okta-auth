import React from 'react'
import { render, screen, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'
import Headline, { HeadlineTypes } from '../../src/client/components/Headline'

describe('Headline', () => {
  const headlineTypes: HeadlineTypes[] = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']
  const headlineText = 'This is a headline'
  const headlineClassName = 'headline'
  const component = (
    <Headline
      headlineText={headlineText}
      headlineType="h1"
      headlineClass={headlineClassName}
    />
  )

  it('renders a given headline tag with given text', () => {
    headlineTypes.forEach((item) => {
      render(<Headline headlineText={headlineText} headlineType={item} />)

      expect(screen.getByRole('heading').tagName).toBe(item.toUpperCase())
      expect(screen.getByRole('heading')).toHaveTextContent(headlineText)

      cleanup()
    })
  })
})
