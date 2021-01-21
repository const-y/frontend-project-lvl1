import { question } from 'readline-sync';

export const sayHello = () => {
  const name = question('What is your name? ');
  console.log(`Hello, ${name}!`);
}
