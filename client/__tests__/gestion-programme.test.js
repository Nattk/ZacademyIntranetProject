/* eslint-disable no-unused-vars */
import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import GestionProgramme from '../pages/admin/gestion-programme/gestion-programme'

Enzyme.configure({ adapter: new Adapter() })

let wrapper
let instance
beforeEach(() => {
  wrapper = shallow(<GestionProgramme/>)
  instance = wrapper.instance()
})

describe('Liste programme', () => {
  test('renders content', () => {
    expect(wrapper).toBeDefined()
    expect(wrapper.exists()).toBe(true)
  })

  test('should render spinner ', () => {
    expect(wrapper.find('.spinner').exists()).toBe(true)
    expect(wrapper.find('.liste-programme').exists()).toBe(false)
  })

  test('Should render list of programmes', () => {
    const items = [{ title: 'prog', id: '5de66d42796c9c3db85c683c' }, { title: 'prog', id: '5de7855d4e9428493c825423' }, { title: 'prog', id: '5de0e0e0a6ba2205308cdb37' }]
    wrapper.setState({ programmes: items })
    expect(wrapper.find('.spinner').exists()).toBe(false)
    expect(wrapper.find('.liste-programme').exists()).toBe(true)
  })
})
