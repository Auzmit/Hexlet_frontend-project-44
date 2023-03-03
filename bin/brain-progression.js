#!/usr/bin/env node
import cliGames from '../src/cli.js';
/* import {readUserAnswer} from '../src/index.js'; */
import readlineSync from 'readline-sync';

//Get User's name and greet him, and explain the rules of the "brain-progression" game
let username = cliGames();
console.log('Hello, ' + username + '!');
console.log('What number is missing in the progression?');

for (let i = 1; i <= 3; i+=1) {
  
  //Randomize the three integer numbers
  //First - starting number of progression (it's in range from 0 to 100 (including 0, but not max))
    const intStartOfProg = Math.floor(Math.random() * 55);
  //Second - step of progression (it's in range from 2 to 5 (including 2 and 5)) 
    const intStepOfProg = Math.ceil(Math.random() * 4) + 1;
  //Third - number of missing number (it's in range from 0 to 10 (including 1, but not 10))
    const intNumberOfMissNum = Math.floor(Math.random() * 10);

  //Create array - progression
  let arrProg = [];
  let intMissNum = 0;
  for (let i = 0; i <= 9; i += 1) {
    arrProg[i] = intStartOfProg + intStepOfProg * i;
    if (i === intNumberOfMissNum) {
      arrProg[i] = '..';
      intMissNum = intStartOfProg + intStepOfProg * i;
    }
  }

  console.log('Question:', arrProg.join(' '));
  /* for (let i = 0; i <= 9; i += 1) {
    console.log(arrProg[i]);
  } */
  
  //Transfer correct answer (intMissNum) into string for we can compare it with the userAnswer
  let strCorrectAnswer = String(intMissNum);

  //Check if the user gived correct answer
  let userAnswer = readlineSync.question('Your answer: ');
  if (userAnswer !== strCorrectAnswer) {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${intMissNum}'.`);
    console.log(`Let's try again, ${username}!`);
    break;
  } else {console.log('Correct!');}

  //Check if the user answered all 3 questions correctly
  if (i === 3) {
    console.log(`Congratulations, ${username}!`);
  }

}