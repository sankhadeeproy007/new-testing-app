import { shallow } from 'enzyme';

import { findByTestAttr } from '../../test/testutils';

import Input from '.';

const setup = (props = {}) => {
  return shallow(<Input {...props} />);
};

describe('Input component', () => {
  test('should render without error', () => {
    const wrapper = setup();
    const InputComponent = findByTestAttr(wrapper, 'input');
    expect(InputComponent).toHaveLength(1);
  });
});
