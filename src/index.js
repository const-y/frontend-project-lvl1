import { question } from 'readline-sync';

const stagesCount = 3;

const play = ({ description, generateQuestionAnswer }) => {
  console.log('Welcome to the Brain Games!');
  const name = question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(description);
  let win = true;
  for (let i = 1; i <= stagesCount; i += 1) {
    const { question: gameQuestion, correctAnswer } = generateQuestionAnswer();
    console.log(`Question: ${gameQuestion}`);
    const answer = question('Your answer: ');
    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      win = false;
      break;
    }
  }
  if (win) {
    console.log(`Congratulations, ${name}!`);
  } else {
    console.log(`Let's try again, ${name}!`);
  }
};

export default play;
