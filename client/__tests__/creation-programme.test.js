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
})
