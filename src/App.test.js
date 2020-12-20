import { shallow } from 'enzyme';

import { findByTestAttr } from './test/testutils';

import App from './App';

const setup = () => shallow(<App />);

describe('checking the counter module', () => {
  test('renders without error', () => {
    const wrapper = setup();
    const appComponent = findByTestAttr(wrapper, 'component-app');
    expect(appComponent).toHaveLength(1);
  });
});
