import getRandomInt from '../getRandomInt.js';
import { yes, no } from '../index.js';

const isEven = (value) => value % 2 === 0;

const generateQuestionAnswer = () => {
  const question = getRandomInt();
  return {
    question,
    correctAnswer: isEven(question) ? yes : no,
  };
};

export default {
  description: 'Answer "yes" if the number is even, otherwise answer "no".',
  generateQuestionAnswer,
};
