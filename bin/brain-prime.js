#!/usr/bin/env node
import cliGames from '../src/cli.js';
/* import {readUserAnswer} from '../src/index.js'; */
import readlineSync from 'readline-sync';

//Get User's name and greet him, and explain the rules of the "brain-even" game
let username = cliGames();
console.log('Hello, ' + username + '!');
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

for (let i = 1; i <= 3; i+=1) {
  
  //Randomize the integer number in range from 0 to max (including 0, but not max)
  function getRandomInt() {
    let max = 10;
    return Math.floor(Math.random() * max);
  }
  const intRandomNumber = getRandomInt();

  console.log('Question:', intRandomNumber);

  //Check if the intRandomNumber is prime
  let strCorrectAnswer = 'yes';
  for (let i = 2; i <= Math.floor(intRandomNumber / 2); i += 1) {
    if (intRandomNumber % i === 0) {
      strCorrectAnswer = 'no';
      break;
    }
  }

  //check if the user correctly determined the parity of the randomized number
  let userAnswer = readlineSync.question('Your answer: ');
  if (userAnswer !== strCorrectAnswer) {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was 'yes'.`);
    console.log(`Let's try again, ${username}!`);
    break;
  } else {console.log('Correct!');}

  //Check if the user answered all 3 questions correctly
  if (i === 3) {
    console.log(`Congratulations, ${username}!`);
  }

}