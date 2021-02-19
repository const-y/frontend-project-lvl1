import { question } from 'readline-sync';

const stagesCount = 3;

const stage = (generateQuestionAnswer, counter) => {
  if (counter === 0) {
    return true;
  }
  const { question: gameQuestion, correctAnswer } = generateQuestionAnswer();
  console.log(`Question: ${gameQuestion}`);
  const answer = question('Your answer: ');
  if (answer === correctAnswer) {
    console.log('Correct!');
    const newCounter = counter - 1;
    return stage(generateQuestionAnswer, newCounter);
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  return false;
};

const play = ({ description, generateQuestionAnswer }) => {
  console.log('Welcome to the Brain Games!');
  const name = question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(description);
  const win = stage(generateQuestionAnswer, stagesCount);
  if (win) {
    console.log(`Congratulations, ${name}!`);
  } else {
    console.log(`Let's try again, ${name}!`);
  }
};

export default play;
