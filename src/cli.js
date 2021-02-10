import { question } from 'readline-sync';

const sayHello = () => {
  const name = question('May I have your name?');
  console.log(`Hello, ${name}!`);
};

export default sayHello;
