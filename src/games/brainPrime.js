import getRandomInt from '../getRandomInt.js';
import { yes, no } from '../index.js';

const isPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i += 1) {
    if (num % i === 0) return false;
  }
  return num > 1;
};

const generateQuestionAnswerPair = () => {
  const question = getRandomInt();
  return {
    question,
    correctAnswer: isPrime(question) ? yes : no,
  };
};

export default {
  description: 'Answer "yes" if given number is prime. Otherwise answer "no".',
  generateQuestionAnswerPair,
};
