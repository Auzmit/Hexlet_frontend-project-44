#!/usr/bin/env node
import readlineSync from 'readline-sync';
import cliGames from '../src/cli.js';
import { getRandomIntFloor } from '../src/index.js';

// Get User's name and greet him, and explain the rules of the "brain-even" game
const username = cliGames();
console.log(`Hello, ${username}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');

for (let i = 1; i <= 3; i += 1) {
  const intRndNum = getRandomIntFloor(100);
  console.log('Question:', intRndNum);

  // Find correct answer
  let strCorrectAnswer = 'yes';
  if (intRndNum % 2 !== 0) {
    strCorrectAnswer = 'no';
  }

  // Check if the user correctly determined the parity of the randomized number
  const userAnswer = readlineSync.question('Your answer: ');
  if (userAnswer !== strCorrectAnswer) {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${strCorrectAnswer}'.`);
    console.log(`Let's try again, ${username}!`);
    break;
  } else { console.log('Correct!'); }

  // Check if the user answered all 3 questions correctly
  if (i === 3) {
    console.log(`Congratulations, ${username}!`);
  }
}
