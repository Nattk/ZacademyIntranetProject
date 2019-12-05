import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import CreaProgramme from '../pages/admin/creation-programme/creation-programme'

describe('Creation Programme', () => {
  test('renders content', () => {
<<<<<<< HEAD:client/__tests__/creation-programme.test.js
    const component = render(<CreaProgramme/>)
    expect(component).toBeTruthy()
=======
    const component = render(<CreaProgramme />)
    console.log(component)
>>>>>>> crea-promo with user:client/pages/admin/creation-programme/creation-programme.test.js
  })
})
