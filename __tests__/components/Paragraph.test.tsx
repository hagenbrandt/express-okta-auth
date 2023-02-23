import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Paragraph from '../../src/client/components/Paragraph'

describe('Paragraph', () => {
  const text = 'Example text'

  it('returns a paragraph with given text', () => {
    render(<Paragraph text={text} />)

    expect(screen.getByText(text)).toBeInTheDocument()
  })

  it('returns empty container when no text is given', () => {
    const { container } = render(<Paragraph text={''} />)

    expect(container).toBeEmptyDOMElement()
  })
  it.todo('has given className')
  it.todo('has no className when no className is given')
})
