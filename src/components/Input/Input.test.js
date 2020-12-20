import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr } from '../../test/testutils';

import Input from '.';

const defaultProps = { secretWord: 'train' };

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<Input {...setupProps} />);
};

test('should render without error', () => {
  const wrapper = setup();
  const InputComponent = findByTestAttr(wrapper, 'input');
  expect(InputComponent).toHaveLength(1);
});
describe('Input component state changes', () => {
  // Set mock function
  let mockSetCurrentGuess = jest.fn();

  // Mokcing setState function in beforeEach
  beforeEach(() => {
    // Clearing mock function
    mockSetCurrentGuess.mockClear();

    // Assign mock function to 2nd useState param
    React.useState = jest.fn(() => ['', mockSetCurrentGuess]);
  });

  test('should update input filed based on change', () => {
    const wrapper = setup();
    const InputBox = findByTestAttr(wrapper, 'input-box');

    // Set mock event and simulate onChange
    const mockEvent = { target: { value: 'train' } };
    InputBox.simulate('change', mockEvent);

    expect(mockSetCurrentGuess).toHaveBeenCalledWith('train');
  });

  test('should clear input after submit is clicked', () => {
    const wrapper = setup();
    const SubmitButton = findByTestAttr(wrapper, 'submit-button');

    // In case we need to preventDefault
    // SubmitButton.simulate('click', { preventDefault() {} });
    // Simulate onClick
    SubmitButton.simulate('click');

    expect(mockSetCurrentGuess).toHaveBeenCalledWith('');
  });
});
