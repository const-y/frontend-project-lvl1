import getRandomInt from '../getRandomInt.js';

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

const generateQuestionAnswerPair = () => {
  const operator = getRandomOperator();
  const a = getRandomInt();
  const b = getRandomInt();
  return {
    question: `${a} ${operator} ${b}`,
    correctAnswer: String(calculate(a, b, operator)),
  };
};

export default {
  description: 'What is the result of the expression?',
  generateQuestionAnswerPair,
};
