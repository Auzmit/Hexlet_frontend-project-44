#!/usr/bin/env node
import cliGames from '../src/cli.js';
import readlineSync from 'readline-sync';

//Get User's name and greet him, and explain the rules of the "...-gcd" game
let username = cliGames();
console.log('Hello, ' + username + '!');
console.log('Find the greatest common divisor of given numbers.');

for (let i = 1; i <= 3; i+=1) {
  
  //Randomize the two integer numbers in range from 1 to max (including 1 and max)
  function getRandomInt() {
    let max = 10;
    return Math.ceil(Math.random() * max);
  }
  const intRandomNumber_1 = getRandomInt();
  const intRandomNumber_2 = getRandomInt();
  
  console.log('Question:', intRandomNumber_1, intRandomNumber_2);

  //Find correct answer
  let intLowestOfTwoRandonNumbers = intRandomNumber_1;
  if (intRandomNumber_1 > intRandomNumber_2) {
    intLowestOfTwoRandonNumbers = intRandomNumber_2;
  }
  let intCorrectAnswer = 0.1;
  for (let i = intLowestOfTwoRandonNumbers; i >= 1; i -= 1) {
    if (intRandomNumber_1 % i === 0) {
      if (intRandomNumber_2 % i === 0) {
        intCorrectAnswer = i;
        break;
      }
    }
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