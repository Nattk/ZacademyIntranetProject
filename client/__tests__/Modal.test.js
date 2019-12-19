import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Modal from '../components/Modal/modal'

Enzyme.configure({ adapter: new Adapter() })

let wrapper
let wrapperTrue

beforeEach(() => {
  wrapper = shallow(
    <Modal
      show={false}
      onClose={() => {}}
      titleModal="Demande de confirmation"></Modal>
  )
  wrapperTrue = shallow(
    <Modal
      show={true}
      onClose={() => {}}
      titleModal="Demande de confirmation"></Modal>
  )
})

describe('Modal', () => {
  test('renders content', () => {
    expect(wrapper).toBeDefined()
    expect(wrapper.exists()).toBe(true)
  })

  test('takes props', () => {
    expect(wrapper.props().open).toBe(false)
    expect(wrapperTrue.props().open).toBe(true)
  })
})
