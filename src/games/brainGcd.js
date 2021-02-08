import { getRandomInt } from '../utils.js';

const maxNumber = 100;

const gcd = (a, b) => {
  if (!b) {
    return a;
  }

  return gcd(b, a % b);
};

const generateQuestion = () => {
  const a = getRandomInt(maxNumber);
  const b = getRandomInt(maxNumber);
  const value = `${a} ${b}`;
  const correctAnswer = String(gcd(a, b));
  return { value, correctAnswer };
};

export default {
  description: 'Find the greatest common divisor of given numbers.',
  generateQuestion,
};
