const UPPER = 100;
const YES = 'yes';
const NO = 'no';

const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

const isEven = (value) => value % 2 === 0;

const generateQuestion = () => {
  const value = getRandomInt(UPPER);
  const correctAnswer = isEven(value) ? YES : NO;
  return { value, correctAnswer };
};

export default {
  generateQuestion,
};
