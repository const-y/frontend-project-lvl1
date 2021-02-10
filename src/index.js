import { question } from 'readline-sync';
import sayHello from './cli.js';

const stagesCount = 3;

const game = ({ description, generateQuestion }) => {
  const stage = (counter) => {
    if (counter === 0) {
      return true;
    }
    const { value, correctAnswer } = generateQuestion();
    console.log(`Question: ${value}`);
    const answer = question('Your answer: ');
    if (answer === correctAnswer) {
      console.log('Correct!');
      const newCounter = counter - 1;
      return stage(newCounter);
    }
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    return false;
  };

  console.log('Welcome to the Brain Games!');
  const name = sayHello();
  console.log(description);
  const win = stage(stagesCount);
  if (win) {
    console.log(`Congratulations, ${name}!`);
  } else {
    console.log(`Let's try again, ${name}!`);
  }
};

export default game;
