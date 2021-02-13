import { question } from 'readline-sync';

export const yes = 'yes';
export const no = 'no';

const stagesCount = 3;

const stage = (generateQuestionAnswerPair, counter) => {
  if (counter === 0) {
    return true;
  }
  const { question: gameQuestion, correctAnswer } = generateQuestionAnswerPair();
  console.log(`Question: ${gameQuestion}`);
  const answer = question('Your answer: ');
  if (answer === correctAnswer) {
    console.log('Correct!');
    const newCounter = counter - 1;
    return stage(generateQuestionAnswerPair, newCounter);
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  return false;
};

const play = ({ description, generateQuestionAnswerPair }) => {
  console.log('Welcome to the Brain Games!');
  const name = question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(description);
  const win = stage(generateQuestionAnswerPair, stagesCount);
  if (win) {
    console.log(`Congratulations, ${name}!`);
  } else {
    console.log(`Let's try again, ${name}!`);
  }
};

export default play;
