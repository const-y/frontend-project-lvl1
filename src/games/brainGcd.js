import getRandomInt from '../getRandomInt.js';

const gcd = (a, b) => {
  if (!b) {
    return a;
  }

  return gcd(b, a % b);
};

const generateQuestionAnswer = () => {
  const a = getRandomInt();
  const b = getRandomInt();
  return {
    question: `${a} ${b}`,
    correctAnswer: String(gcd(a, b)),
  };
};

export default {
  description: 'Find the greatest common divisor of given numbers.',
  generateQuestionAnswer,
};
