#!/usr/bin/env node
import cliGames from '../src/cli.js';
import readlineSync from 'readline-sync';

//Get User's name and greet him, and explain the rules of the game
let username = cliGames();
console.log('Hello, ' + username + '!');
console.log('Answer "yes" if the number is even, otherwise answer "no".');

for (let i = 1; i <= 3; i+=1) {
  
  //Randomize the integer number in range from 1 to max (including 1) - intRandomNumber
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  const intRandomNumber = getRandomInt(100);
  console.log('Question:', intRandomNumber);

  //check if the user correctly determined the parity of the randomized number
  let userAnswer = readlineSync.question('Your answer: ');
  if (((intRandomNumber % 2 === 0) && (userAnswer !== 'yes')) ||
      ((intRandomNumber % 2 !== 0) && (userAnswer !== 'no' ))) {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was 'yes'.`);
    console.log(`Let's try again, ${username}!`);
    break;
  } else {console.log('Correct!');}

  //Check if the user answered all 3 questions correctly
  if (i === 3) {
    console.log(`Congratulations, ${username}!`);
  }

}