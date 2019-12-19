import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import AllNotification from '../components/Notifications/notifications'

Enzyme.configure({ adapter: new Adapter() })

let wrapper
let wrapperTrue
beforeEach(() => {
  wrapper = shallow(
    <AllNotification show={false} alertType="success">
      <aside className="d-flex flex-row justify-content-between">
        my notification
      </aside>
    </AllNotification>
  )

  wrapperTrue = shallow(
    <AllNotification show={true} alertType="success">
      <aside className="d-flex flex-row justify-content-between">
        my notification
      </aside>
    </AllNotification>
  )
})

describe('Notifications', () => {
  test('renders content', () => {
    expect(wrapper).toBeDefined()
    expect(wrapper.exists()).toBe(true)
  })

  test('class hide is here', () => {
    expect(wrapper.props().className).toBe('alert alert-success hide')
  })

  test('class hide disapear', () => {
    expect(wrapperTrue.props().className).toBe('alert alert-success ')
  })
})
