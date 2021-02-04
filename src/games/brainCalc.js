import { getRandomInt } from '../utils.js';

const maxNumber = 10;
const plus = '+';
const mult = '*';
const minus = '-';

const getRandomOperator = () => {
  const index = getRandomInt(2);
  return [plus, mult, minus][index];
};

const calculate = (a, b, operator) => {
  switch (operator) {
    case plus:
      return a + b;
    case mult:
      return a * b;
    case minus:
      return a - b;
    default:
      throw Error('Неизвестный оператор');
  }
};

const generateQuestion = () => {
  const operator = getRandomOperator();
  const a = getRandomInt(maxNumber);
  const b = getRandomInt(maxNumber);
  const value = `${a} ${operator} ${b}`;
  const correctAnswer = String(calculate(a, b, operator));
  return { value, correctAnswer };
};

export default {
  generateQuestion,
};
