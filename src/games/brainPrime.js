import getRandomInt from '../getRandomInt.js';
import { yes, no } from '../constants.js';

const isPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i += 1) {
    if (num % i === 0) return false;
  }
  return num > 1;
};

const generateQuestion = () => {
  const value = getRandomInt();
  const correctAnswer = isPrime(value) ? yes : no;
  return { value, correctAnswer };
};

export default {
  description: 'Answer "yes" if given number is prime. Otherwise answer "no".',
  generateQuestion,
};
