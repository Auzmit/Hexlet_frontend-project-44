#!/usr/bin/env node
import cliGames from '../src/cli.js';
/* import {readUserAnswer} from '../src/index.js'; */
import readlineSync from 'readline-sync';

//Get User's name and greet him, and explain the rules of the "brain-calc" game
let username = cliGames();
console.log('Hello, ' + username + '!');
console.log('What is the result of the expression?');

for (let i = 1; i <= 3; i+=1) {
  
  //Randomize the two integer numbers in range from 0 to max (including 0, but not max)
  function getRandomInt() {
    let max = 100;
    return Math.floor(Math.random() * max);
  }
  const intRandomNumber_1 = getRandomInt();
  const intRandomNumber_2 = getRandomInt();

  //Create array with Math. signs and randomly take one of them
  let arrMatSigns = ['+', '-', '*'];
  const intRandomNumber_from1to3 = Math.floor(Math.random() * 3);
  const strRandomMathSign = arrMatSigns[intRandomNumber_from1to3];

  console.log('Question:', intRandomNumber_1, strRandomMathSign, intRandomNumber_2);
  
  //Find correct answer
  let intCorrectAnswer = 0.1;
  if (intRandomNumber_from1to3 === 0) {
    intCorrectAnswer = intRandomNumber_1 + intRandomNumber_2;
  } else if (intRandomNumber_from1to3 === 1) {
    intCorrectAnswer = intRandomNumber_1 - intRandomNumber_2;
  } else {
    intCorrectAnswer = intRandomNumber_1 * intRandomNumber_2;
  }
  let strCorrectAnswer = String(intCorrectAnswer);


  //Check if the user gived correct answer
  let userAnswer = readlineSync.question('Your answer: ');
  if (userAnswer !== strCorrectAnswer) {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${intCorrectAnswer}'.`);
    console.log(`Let's try again, ${username}!`);
    break;
  } else {console.log('Correct!');}

  //Check if the user answered all 3 questions correctly
  if (i === 3) {
    console.log(`Congratulations, ${username}!`);
  }

}