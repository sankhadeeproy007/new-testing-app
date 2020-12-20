import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr } from '../../test/testutils';

import Input from '.';

const defaultProps = { secretWord: 'train' };

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<Input {...setupProps} />);
};

describe('Input component', () => {
  test('should render without error', () => {
    const wrapper = setup();
    const InputComponent = findByTestAttr(wrapper, 'input');
    expect(InputComponent).toHaveLength(1);
  });

  test('should update input filed based on change', () => {
    // Set mock function
    const mockSetCurrentGuess = jest.fn();

    // Assign mock function to 2nd useState param
    React.useState = jest.fn(() => ['', mockSetCurrentGuess]);
    const wrapper = setup();
    const InputBox = findByTestAttr(wrapper, 'input-box');

    // Set mock event and simulate onChange
    const mockEvent = { target: { value: 'train' } };
    InputBox.simulate('change', mockEvent);

    expect(mockSetCurrentGuess).toHaveBeenCalledWith('train');
  });
});
