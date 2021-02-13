import getRandomInt from '../getRandomInt.js';
import { yes, no } from '../index.js';

const isEven = (value) => value % 2 === 0;

const generateQuestion = () => {
  const value = getRandomInt();
  const correctAnswer = isEven(value) ? yes : no;
  return { value, correctAnswer };
};

export default {
  description: 'Answer "yes" if the number is even, otherwise answer "no".',
  generateQuestion,
};
