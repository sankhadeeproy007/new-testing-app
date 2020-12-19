import { shallow } from 'enzyme';

import { findByTestAttr } from '../../test/testutils';

import GuessedWords from '.';

const defaultProps = {
  guessedWords: [{ guessedWord: 'Train', letterMatchCount: 3 }],
};

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<GuessedWords {...setupProps} />);
};

describe('Guessedwords component', () => {
  describe('If no words are guessed', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setup({ guessedWords: [] });
    });
    // render without error
    test('should render without error', () => {
      const emptyComponent = findByTestAttr(
        wrapper,
        'empty-guessedwords-component',
      );
      expect(emptyComponent).toHaveLength(1);
    });
    // give instructions for guessing word
    test('should show instructions for guessing word correctly', () => {
      const instructionsComponent = findByTestAttr(wrapper, 'instructions');
      expect(instructionsComponent.text()).not.toHaveLength(0);
    });
  });
});
