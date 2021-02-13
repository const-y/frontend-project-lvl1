import getRandomInt from '../getRandomInt.js';

const gcd = (a, b) => {
  if (!b) {
    return a;
  }

  return gcd(b, a % b);
};

const generateQuestionAnswerPair = () => {
  const a = getRandomInt();
  const b = getRandomInt();
  return {
    value: `${a} ${b}`,
    correctAnswer: String(gcd(a, b)),
  };
};

export default {
  description: 'Find the greatest common divisor of given numbers.',
  generateQuestionAnswerPair,
};
