#!/usr/bin/env node
import readlineSync from 'readline-sync';
import cliGames from '../src/cli.js';
import { getRandomIntFloor } from '../src/index.js';

// Get User's name and greet him, and explain the rules of the "brain-calc" game
const username = cliGames();
console.log(`Hello, ${username}!`);
console.log('What is the result of the expression?');

for (let i = 1; i <= 3; i += 1) {
  const intRndNum1 = getRandomIntFloor(100);
  const intRndNum2 = getRandomIntFloor(100);

  // Create array with Math. signs and randomly take one of them
  const arrMathSigns = ['+', '-', '*'];
  const intRndNumfrom0to2 = Math.floor(Math.random() * 3);
  const strRndMathSign = arrMathSigns[intRndNumfrom0to2];

  console.log('Question:', intRndNum1, strRndMathSign, intRndNum2);

  // Find correct answer
  let intCorrectAnswer = 0.1;
  if (intRndNumfrom0to2 === 0) {
    intCorrectAnswer = intRndNum1 + intRndNum2;
  } else if (intRndNumfrom0to2 === 1) {
    intCorrectAnswer = intRndNum1 - intRndNum2;
  } else {
    intCorrectAnswer = intRndNum1 * intRndNum2;
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
