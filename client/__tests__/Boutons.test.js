import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import Button from '../components/Boutons/Boutons'

describe('Creation Programme', () => {
  test('renders content', () => {
    const component = render(<Button />)
    console.log(component)
  })
})
