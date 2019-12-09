import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Home from '../pages'

describe('Logging on the website works.', () => {
  test('renders content', () => {
    const component = render(<Home />)
    expect(component.container).toHaveTextContent(
      'CONNEXION'
    )
  })

  test('Login form is not visible by default', () => {
    const component = render(<Home />)
    expect(component.container).not.toContainHTML(
      '<form'
    )
  })

  test('Login form is visible after clicking CONNEXION button', () => {
    const component = render(<Home />)
    fireEvent.click(component.getByText('CONNEXION'))
    expect(component.container).toContainHTML(
      '<form'
    )
  })
})
