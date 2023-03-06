#!/usr/bin/env node
import readlineSync from 'readline-sync';
import cliGames from '../src/cli.js';
import { getRandomIntCeil } from '../src/index.js';

// Get User's name and greet him, and explain the rules of the "brain-gcd" game
const username = cliGames();
console.log(`Hello, ${username}!`);
console.log('Find the greatest common divisor of given numbers.');

for (let i = 1; i <= 3; i += 1) {
  const intRndNum1 = getRandomIntCeil(100);
  const intRndNum2 = getRandomIntCeil(100);

  console.log('Question:', intRndNum1, intRndNum2);

  // Find correct answer
  let intLowestOfTwoRndNums = intRndNum1;
  if (intRndNum1 > intRndNum2) {
    intLowestOfTwoRndNums = intRndNum2;
  }
  let intCorrectAnswer = 0.1;
  for (let j = intLowestOfTwoRndNums; j >= 1; j -= 1) {
    if (intRndNum1 % j === 0) {
      if (intRndNum2 % j === 0) {
        intCorrectAnswer = j;
        break;
      }
    }
  }
  const strCorrectAnswer = String(intCorrectAnswer);

  // Check if the user gived correct answer
  const userAnswer = readlineSync.question('Your answer: ');
  if (userAnswer !== strCorrectAnswer) {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${intCorrectAnswer}'.`);
    console.log(`Let's try again, ${username}!`);
    break;
  } else { console.log('Correct!'); }

  // Check if the user answered all 3 questions correctly
  if (i === 3) {
    console.log(`Congratulations, ${username}!`);
  }
}
