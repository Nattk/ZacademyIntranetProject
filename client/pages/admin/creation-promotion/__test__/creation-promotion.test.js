// import React from 'react'
// import '@testing-library/jest-dom/extend-expect'
// import ShallowRenderer from 'react-test-renderer/shallow'
// import CreaPromotion from '../creation-promotion'
// describe('Creation Promotion', () => {

//   it('it should render content', () => {
//     const renderer = new ShallowRenderer()
//     renderer.render(<CreaPromotion />)
//     const result = renderer.getRenderOutput()
//     expect(result.props.children.type).toBe('article')
//   })

// })
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CreaPromotion from '../creation-promotion'


Enzyme.configure({ adapter: new Adapter() });

let wrapper;
beforeEach(() => {
  const toggleModal = jest.fn();
  const connect = jest.fn();
  wrapper = shallow(<CreaPromotion toggleModal={toggleModal} connect={connect} />);
});

describe('Creation Promotion Form tests', () => {
  it('Should exist', () => {
    expect(wrapper).toBeDefined();
    expect(wrapper.exists()).toBe(true);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('Should have id #form_creation_promotion', () => {
    const container = wrapper.find('#form_creation_promotion');
    expect(container).toHaveLength(1);
  });

  it('Should have a recap button', () => {
    const container = wrapper.find('#recap-button');
    expect(container).toHaveLength(1);
  });

  it('Should change title state with onShowRecapForm on titleInput', () => {
    const input = wrapper.find('#titleInput');
    const mockEvent = {
      target: {
        name: 'title',
        value: 'test Promo',
      },
    };
    input.simulate('change', mockEvent);
    expect(wrapper.state().title).toEqual('test Promo');
  });

  it('Should change city state with handleChange on cityInput', () => {
    const input = wrapper.find('#cityInput');
    const mockEvent = {
      target: {
        name: 'Marseille',
        value: 'Marseille',
      },
    };
    input.simulate('change', mockEvent);
    expect(wrapper.state().selectedCity.target.value).toEqual('Marseille');
  });
  // it('Should show  need city if state  === " " on click button with onShowRecapForm', () => {
  //   const p = wrapper.find('#cityValidation');
  //   const input = wrapper.find('#cityInput');
  //   // const mockEvent = {
  //     // target: {

  //     //   value: '',
  //     // },
  //   // };


  //   input.simulate('change', mockEvent);
  //   expect(p.cityValidation).toEqual('Veuillez selectionné une ville');
  // });

  // it('Should have cancel button', () => {
  //   const container = wrapper.find('#cancelButton');
  //   expect(container).toHaveLength(1);
  // });

  it('Should call toggleModal() props on cancel button click', () => {
    const button = wrapper.find('#cancelButton');
    const toggle = wrapper.instance().props.toggleModal;
    button.simulate('click');
    expect(toggle).toHaveBeenCalled();
  });
});
