import { question } from 'readline-sync';
import _ from 'lodash';

const lower = 1;
const upper = 100;
const stages = 3;

const isEven = (value) => value % 2 === 0;

// returns true if answer is correct
const isCorrect = (quest, even) => {
  if (isEven(quest)) {
    return even;
  }
  return !even;
};

const toBool = (str) => str === 'yes';

const format = (boolValue) => (boolValue ? 'yes' : 'no');

const game = (counter) => {
  if (counter === 0) {
    return true;
  }
  const quest = _.random(lower, upper);
  console.log('Question: ', quest);
  const answer = toBool(question('Your answer: '));
  if (isCorrect(quest, answer)) {
    console.log('Correct!');
    const newCounter = counter - 1;
    return game(newCounter);
  }
  console.log(`'${format(answer)}' is wrong answer ;(. Correct answer was '${format(!answer)}'.`)
};

const brainEvenGame = () => {
  console.log('Welcome to the Brain Games!');
  const name = question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const win = game(stages);
  if (win) {
    console.log(`Congratulations, ${name}!`);
  } else {
    console.log(`Let's try again, ${name}!`);
  }
};

export default brainEvenGame;
