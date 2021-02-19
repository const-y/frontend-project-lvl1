import getRandomInt from '../getRandomInt.js';

const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }
  for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

const generateQuestionAnswer = () => {
  const question = getRandomInt();
  return {
    question,
    correctAnswer: isPrime(question) ? 'yes' : 'no',
  };
};

export default {
  description: 'Answer "yes" if given number is prime. Otherwise answer "no".',
  generateQuestionAnswer,
};
