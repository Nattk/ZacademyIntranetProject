import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import CreaProgramme from './creation-programme'

describe('Creation Programme', () => {
  test('renders content', () => {
    const component = render(<CreaProgramme/>)
    console.log(component)
  })
})
