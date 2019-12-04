import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import Home from '../pages/index'

describe('Logging on the website works.', () => {
  test('renders content', () => {
    const component = render(<Home/>)
    expect(component.container).toHaveTextContent(
      'CONNEXION'
    )
  })

  test('Login form is not visible by default', () => {
    const component = render(<Home/>)
    const loginform = component.container.getByText('slide')
    expect(loginform).toBeInTheDocument()
  })
})
