import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Card from '../components/Card/card'

Enzyme.configure({ adapter: new Adapter() })

let wrapper
beforeEach(() => {
  wrapper = shallow(
    <Card styleName="my-card">
      <div>
            Ma div
      </div>
    </Card>
  )
})

describe('Card', () => {
  test('renders content', () => {
    expect(wrapper).toBeDefined()
    expect(wrapper.exists()).toBe(true)
  })

  test('Takes props', () => {
    expect(wrapper.props().className).toBe('card my-card')
    expect(wrapper.props().children.type).toBe('div')
    expect(wrapper.props().children.props.children).toBe('Ma div')
  })
})
