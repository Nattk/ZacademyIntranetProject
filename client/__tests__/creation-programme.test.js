import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import CreaProgramme from '../pages/admin/creation-programme/creation-programme'

Enzyme.configure({ adapter: new Adapter() })

let wrapper
let instance
beforeEach(() => {
  wrapper = shallow(<CreaProgramme/>)
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

  it('should call the clicked function when \'Etape suivante\' button is clicked ', () => {
    const mockedHandleStep = jest.fn()
    expect(wrapper.state('etapes')).toEqual(1)
    instance.handleStep = mockedHandleStep
    wrapper.find('.step-button').props().clicked()
    expect(mockedHandleStep).toHaveBeenCalledTimes(1)
  })

  it('should increment state Etapes when called', () => {
    const preventDefault = jest.fn()
    wrapper.find('.step-button').props().clicked({ preventDefault })
    expect(wrapper.state('etapes')).toEqual(2)
  })

  test('Should render button  Terminer Programme at steps > 2  ', () => {
    expect(wrapper.find('.terminer-programme')).toHaveLength(0)
    wrapper.setState({ etapes: 2 })
    expect(wrapper.find('.terminer-programme')).toHaveLength(1)
  })

  test('Should change state selected when called (HandleSelect with module)', () => {
    const newValue = { sousmodules: Array(3), sequences: Array(0), title: 'jesuismodule', id: '5de0e0c1a6ba2205308cdb36' }
    const action = { action: 'select-option', option: undefined, name: 'modules' }
    wrapper.setState({ etapes: 2 })
    instance.handleSelect(newValue, action)
    expect(wrapper.state('selected')).toEqual(newValue)
    expect(wrapper.state('moduleId')).toEqual(newValue.id)
  })

  test('Should change state selected when called (HandleSelect with sous module)', () => {
    const newValue = { sequences: Array(2), title: 'jesuissousmodule', id: '5de0e0e0a6ba2205308cdb37' }
    const action = { action: 'select-option', option: undefined, name: 'sousmodules' }
    wrapper.setState({ etapes: 2 })
    instance.handleSelect(newValue, action)
    expect(wrapper.state('selected')).toEqual(newValue)
    expect(wrapper.state('smoduleId')).toEqual(newValue.id)
  })

  test('Should not change state moduleId when called (HandleSelect with nothing)', () => {
    const newValue = { title: 'Sequences', id: '5de0e0e0a6ba2205308cdb37' }
    const action = { action: 'select-option', option: undefined, name: 'sequences' }
    wrapper.setState({ etapes: 2 })
    instance.handleSelect(newValue, action)
    expect(wrapper.state('selected')).toEqual(newValue)
    expect(wrapper.state('moduleId')).toEqual('')
    expect(wrapper.state('smoduleId')).toEqual('')
  })
})
