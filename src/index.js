import { question } from 'readline-sync';

export const yes = 'yes';
export const no = 'no';

const stagesCount = 3;

const stage = (generateQuestion, counter) => {
  if (counter === 0) {
    return true;
  }
  const { value, correctAnswer } = generateQuestion();
  console.log(`Question: ${value}`);
  const answer = question('Your answer: ');
  if (answer === correctAnswer) {
    console.log('Correct!');
    const newCounter = counter - 1;
    return stage(generateQuestion, newCounter);
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  return false;
};

const game = ({ description, generateQuestion }) => {
  console.log('Welcome to the Brain Games!');
  const name = question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(description);
  const win = stage(generateQuestion, stagesCount);
  if (win) {
    console.log(`Congratulations, ${name}!`);
  } else {
    console.log(`Let's try again, ${name}!`);
  }
};

export default game;
