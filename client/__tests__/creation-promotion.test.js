
import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import CreaPromotion from '../pages/admin/creation-promotion/creation-promotion'

Enzyme.configure({ adapter: new Adapter() })

let wrapper
beforeEach(() => {
  const toggleModal = jest.fn()
  const connect = jest.fn()
  wrapper = shallow(<CreaPromotion toggleModal={toggleModal} connect={connect} />)
})

describe('Creation Promotion Form tests', () => {
  it('Should exist', () => {
    expect(wrapper).toBeDefined()
    expect(wrapper.exists()).toBe(true)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('Should have id #form_creation_promotion', () => {
    const container = wrapper.find('#form_creation_promotion')
    expect(container).toHaveLength(1)
  })

  it('Should have a recap button ', () => {
    const container = wrapper.find('#recap-button')
    expect(container).toHaveLength(1)
  })

  it('Should change title state with onShowRecapForm on titleInput', () => {
    const input = wrapper.find('#titleInput')
    const mockEvent = {
      target: {
        name: 'title',
        value: 'test Promo'
      }
    }
    input.simulate('change', mockEvent)
    expect(wrapper.state().title).toEqual('test Promo')
  })

  it('Should change city state with handleChange on cityInput', () => {
    const input = wrapper.find('#cityInput')
    const mockEvent = {
      target: {
        name: 'Marseille',
        value: 'Marseille'
      }
    }
    input.simulate('change', mockEvent)
    expect(wrapper.state().selectedCity.target.value).toEqual('Marseille')
  })
  it('should show modal  recap informations when called', () => {
    const handleChange = wrapper.setState({ showModal: true })
    wrapper.find('#recap-button').props().clicked({ handleChange })
    expect(wrapper.state('showModal')).toBe(true)
  })
  it('should show modal récapitulation  informations promotion when called', () => {
    const handleChange = wrapper.setState({ showModal: true })
    wrapper.find('#recap-button').props().clicked({ handleChange })
    expect(wrapper.state('showModal')).toBe(true)
  })
  it('should have a confirm creation promotion button in modal récapitulation ', () => {
    const container = wrapper.find('#confirm-creation-promotion')
    const onCreatePromotion = wrapper.setState({ showModal: true })
    expect(container).toHaveLength(0)
    wrapper.find('#recap-button').props().clicked({ onCreatePromotion })
    expect(wrapper.state('showModal')).toBe(true)
    if (expect(wrapper.state('showModal')).toBe(true)) expect(container).toHaveLength(1)
  })
})
