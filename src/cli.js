import { question } from 'readline-sync';

const sayHello = () => {
  const name = question('What is your name? ');
  console.log(`Hello, ${name}!`);
};

export default sayHello;
