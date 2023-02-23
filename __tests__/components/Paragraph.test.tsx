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

  it.todo('returns empty container when no text is given')
  it.todo('has given className')
  it.todo('has no className when no className is given')
})
