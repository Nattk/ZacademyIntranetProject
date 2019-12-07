import React from 'react'
import Enzyme, { shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import Admin from '../pages/admin/Accueil/accueil'
// This sets the mock adapter on the default instance
Enzyme.configure({ adapter: new Adapter() })

describe('Admin  get promotions', () => {
  const mock = new MockAdapter(axios)

  it('should make api call and set state on click', () => {
    mock.onGet('/api/promotions').reply(200, {
      promotions: [
        { id: 1, title: 'Promotion 1' }
      ]
    })

    axios.get('/api/promotions')
      .then(function (response) {
      })
  })
  it('calls componentDidMount', () => {
    jest.spyOn(Admin.prototype, 'componentDidMount')
    shallow(<Admin />)
    expect(Admin.prototype.componentDidMount.mock.calls.length).toBe(1)
  })
})
const promotion = {
  title: 'Promo Rennes 01',
  city: 'Rennes',
  start: '21/12/2019',
  end: '02/10/2020'
}
describe('<Admin />', () => {
  it('accepts user props', () => {
    const wrapper = mount(<Admin promotions={promotion} />)
    expect(wrapper.props().promotions).toEqual(promotion)
  })
  it('fetches a list of promotions', () => {
    const getSpy = jest.spyOn(axios, 'get')
    shallow(
      <Admin promotions={promotion} />
    )
    expect(getSpy).toBeCalled()
  })
})
