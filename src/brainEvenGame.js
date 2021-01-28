import { question } from 'readline-sync';
import _ from 'lodash';

const LOWER = 1;
const UPPER = 100;
const STAGES = 3;
const YES = 'yes';
const NO = 'no';

const isEven = (value) => value % 2 === 0;

const generateQuestion = () => {
  const value = _.random(LOWER, UPPER);
  const correctAnswer = isEven(value) ? YES : NO;
  return { value, correctAnswer };
};

const game = (counter) => {
  if (counter === 0) {
    return true;
  }
  const { value, correctAnswer } = generateQuestion();
  console.log('Question: ', value);
  const answer = question('Your answer: ');
  if (answer === correctAnswer) {
    console.log('Correct!');
    const newCounter = counter - 1;
    return game(newCounter);
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  return false;
};

const brainEvenGame = () => {
  console.log('Welcome to the Brain Games!');
  const name = question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const win = game(STAGES);
  if (win) {
    console.log(`Congratulations, ${name}!`);
  } else {
    console.log(`Let's try again, ${name}!`);
  }
};

export default brainEvenGame;
