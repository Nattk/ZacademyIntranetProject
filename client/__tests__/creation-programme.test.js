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
    const component = render(<CreaProgramme className="d"/>)
    console.log(component.container)
    expect(component.firstChild).toHaveClass('foo')
  })
  test('shallow Render de Creation Proramme', () => {

>>>>>>> ajout de programme, ajout de module, ajout de modules dans un programme:client/pages/admin/creation-programme/creation-programme.test.js
  })
})
