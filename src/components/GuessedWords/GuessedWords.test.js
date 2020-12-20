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
  describe('If there are words guessed', () => {
    let wrapper;
    const guessedWords = [
      { guessedWord: 'train', letterMatchCount: 3 },
      { guessedWord: 'aglile', letterMatchCount: 1 },
      { guessedWord: 'party', letterMatchCount: 5 },
    ];
    beforeEach(() => {
      wrapper = setup({ guessedWords });
    });

    test('should render without error', () => {
      const emptyComponent = findByTestAttr(wrapper, 'guessedwords-component');
      expect(emptyComponent).toHaveLength(1);
    });

    test('should render guessed word section', () => {
      const guessedWords = findByTestAttr(wrapper, 'guessedwords');
      expect(guessedWords).toHaveLength(1);
    });

    test('should display correct number of guessed words', () => {
      const guessedWordNodes = findByTestAttr(wrapper, 'guessedword');
      expect(guessedWordNodes).toHaveLength(guessedWords.length);
    });
  });
});
