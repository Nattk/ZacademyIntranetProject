import React from 'react'
import '@testing-library/jest-dom/extend-expect'
<<<<<<< HEAD:client/__tests__/creation-programme.test.js
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
=======
import CreaProgramme from './creation-programme'
import ShallowRenderer from 'react-test-renderer/shallow'

describe('Creation Programme', () => {
  test('renders content', () => {
    const renderer = new ShallowRenderer()
    renderer.render(<CreaProgramme />)
    const result = renderer.getRenderOutput()
    expect(result.props.children.type).toBe('article')
>>>>>>> Add test bug several put 500:client/pages/admin/creation-programme/creation-programme.test.js
  })
})
