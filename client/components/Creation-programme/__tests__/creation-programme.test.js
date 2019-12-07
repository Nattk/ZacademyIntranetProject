/* eslint-disable no-unused-vars */
import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import CreationProgramme from '../creation-programme'

Enzyme.configure({ adapter: new Adapter() })

let wrapper
let instance
beforeEach(() => {
  wrapper = shallow(<CreationProgramme parent="Programme" />)
  instance = wrapper.instance()
})

describe('Creation Programme', () => {
  test('renders content', () => {
    expect(wrapper).toBeDefined()
    expect(wrapper.exists()).toBe(true)
  })

  test('should render one <form>', () => {
    expect(wrapper.find('form')).toHaveLength(1)
  })

  test('Bouton should display props parent ', () => {
    expect(wrapper.find('.add-item')).toHaveLength(1)
    expect(wrapper.find('.add-item').props().children[0]).toEqual('Ajouter au ')
    expect(wrapper.find('.add-item').props().children[1]).toEqual('Programme')
  })

  test('Should render select with the items of the state', () => {
    const items = [{ sousmodules: Array(3), sequences: Array(0), title: 'jesuismodule', id: '5de0e0c1a6ba2205308cdb36' }, { sousmodules: Array(3), sequences: Array(0), title: 'jesuismodule', id: '5de0e0c1a6ba2205308cdb36' }, { sousmodules: Array(3), sequences: Array(0), title: 'jesuismodule', id: '5de0e0c1a6ba2205308cdb36' }]
    wrapper.setState({ items: items })
    expect(wrapper.find('.select-component').props().options).toEqual(items)
  })
})
