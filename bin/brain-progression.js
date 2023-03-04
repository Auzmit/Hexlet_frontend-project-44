#!/usr/bin/env node
import readlineSync from 'readline-sync';
import cliGames from '../src/cli.js';
import { getRandomInt_Floor, getRandomInt_Ceil } from '../src/index.js';

// Get User's name and greet him, and explain the rules of the "brain-progression" game
const username = cliGames();
console.log(`Hello, ${username}!`);
console.log('What number is missing in the progression?');

for (let i = 1; i <= 3; i += 1) {
  // Randomize three integer numbers
  // First - starting number of progression (it's in range from 0 to 100 (including 0, but not max))
  const intStartOfProg = getRandomInt_Floor(55);
  // Second - step of progression (it's in range from 2 to 5 (including 2 and 5))
  const intStepOfProg = getRandomInt_Ceil(4) + 1;
  // Third - array order of missing number (it's in range from 0 to 10 (including 0, but not 10))
  const intNumberOfMissNum = getRandomInt_Floor(10);

  // Create array - progression
  let arrProg = [];
  let intMissNum = 0;
  for (let j = 0; j <= 9; j += 1) {
    arrProg[j] = intStartOfProg + intStepOfProg * j;
    if (j === intNumberOfMissNum) {
      arrProg[j] = '..';
      intMissNum = intStartOfProg + intStepOfProg * j;
    }
  }

  console.log('Question:', arrProg.join(' '));

  // Transfer correct answer (intMissNum) into string for we can compare it with the userAnswer
  const strCorrectAnswer = String(intMissNum);

  // Check if the user gived correct answer
  const userAnswer = readlineSync.question('Your answer: ');
  if (userAnswer !== strCorrectAnswer) {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${intMissNum}'.`);
    console.log(`Let's try again, ${username}!`);
    break;
  } else { console.log('Correct!'); }

  // Check if the user answered all 3 questions correctly
  if (i === 3) {
    console.log(`Congratulations, ${username}!`);
  }
}
