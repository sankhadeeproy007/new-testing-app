import { shallow } from 'enzyme';

import { findByTestAttr } from '../../test/testutils';

import Congrats from '.';

const defaultProps = { success: false };

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<Congrats {...setupProps} />);
};

describe('Congrats component', () => {
  test('should render without error', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'congrats-component');
    expect(component).toHaveLength(1);
  });

  test('should render no text when `success` prop is false', () => {
    const wrapper = setup({ success: false });
    const component = findByTestAttr(wrapper, 'congrats-component');
    expect(component.text()).toBe('');
  });

  test('should render non-empty congrats message when `success` prop is true', () => {
    const wrapper = setup({ success: true });
    const messageComponent = findByTestAttr(wrapper, 'congrats-message');
    expect(messageComponent.text()).not.toHaveLength(0);
  });
});
