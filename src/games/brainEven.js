import { getRandomInt } from '../utils.js';

const maxNumber = 100;
const yes = 'yes';
const no = 'no';

const isEven = (value) => value % 2 === 0;

const generateQuestion = () => {
  const value = getRandomInt(maxNumber);
  const correctAnswer = isEven(value) ? yes : no;
  return { value, correctAnswer };
};

export default {
  description: 'Answer "yes" if the number is even, otherwise answer "no".',
  generateQuestion,
};
