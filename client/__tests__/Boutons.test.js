import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Button from '../components/Boutons/Boutons'

Enzyme.configure({ adapter: new Adapter() })

let wrapper
beforeEach(() => {
  wrapper = shallow(
    <Button clicked={() => {}} btnType="valider" >
  Valider le formulaire
    </Button>
  )
})

describe('Button', () => {
  test('renders content', () => {
    expect(wrapper).toBeDefined()
    expect(wrapper.exists()).toBe(true)
  })

  test('Takes props', () => {
    console.log(wrapper.props())
    expect(wrapper.props().className).toBe('btn valider')
    expect(wrapper.props().children).toBe('Valider le formulaire')
  })
})
