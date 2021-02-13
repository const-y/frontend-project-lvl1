import getRandomInt from '../getRandomInt.js';

const calculateProgression = (start, length, diff) => {
  const result = [];
  let current = start;
  while (result.length < length) {
    result.push(current);
    current += diff;
  }
  return result;
};

const generateQuestionAnswerPair = () => {
  const length = 10;
  const diff = getRandomInt();
  const hiddenIndex = getRandomInt(length - 1);
  const progression = calculateProgression(getRandomInt(), length, diff);
  const question = progression.map((item, index) => (index === hiddenIndex ? '..' : item)).join(' ');
  return {
    question,
    correctAnswer: String(progression[hiddenIndex]),
  };
};

export default {
  description: 'What number is missing in the progression?',
  generateQuestionAnswerPair,
};
