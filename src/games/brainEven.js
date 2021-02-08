import { getRandomInt } from '../utils.js';

const yes = 'yes';
const no = 'no';

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
