import getRandomInt from '../getRandomInt.js';

const arithmeticalProgression = (length, d) => {
  const result = [];
  let current = getRandomInt();
  while (result.length < length) {
    result.push(current);
    current += d;
  }
  return result;
};

const generateQuestion = () => {
  const length = 10;
  const d = getRandomInt();
  const hiddenIndex = getRandomInt(length - 1);
  const regression = arithmeticalProgression(length, d);
  const value = regression.map((item, index) => (index === hiddenIndex ? '..' : item)).join(' ');
  const correctAnswer = String(regression[hiddenIndex]);
  return { value, correctAnswer };
};

export default {
  description: 'What number is missing in the progression?',
  generateQuestion,
};
