import getRandomInt from '../getRandomInt.js';

const operations = ['+', '*', '-'];

const getRandomOperator = () => {
  const index = getRandomInt(operations.length - 1);
  return operations[index];
};

const calculate = (a, b, operator) => {
  switch (operator) {
    case '+':
      return a + b;
    case '*':
      return a * b;
    case '-':
      return a - b;
    default:
      throw Error(`Unknown operator ${operator}`);
  }
};

const generateQuestionAnswer = () => {
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
  generateQuestionAnswer,
};
