export const getLetterMatchCount = (guessedWord, secretWord) => {
  const sceretLetterSet = new Set(secretWord.split(''));
  const guessedLetterSet = new Set(guessedWord.split(''));

  return [...sceretLetterSet].filter((letter) => guessedLetterSet.has(letter))
    .length;
};
