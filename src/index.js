#!/usr/bin/env node
/* import readlineSync from 'readline-sync'; */

// Randomize the integer number (including 0, but not max)
export function getRandomInt_Floor(max) {
  return Math.floor(Math.random() * max);
}

// Randomize the integer number (including 1 and max)
export function getRandomInt_Ceil(max) {
  return Math.ceil(Math.random() * max);
}

/* export function readUserAnswer() {
  return readlineSync.question('Your answer: ');
}  */

/* export function doIfAllAnswersAreRight() {
  let boolShouldWeBreak = false;
  let userAnswer = readlineSync.question('Your answer: ');
  if (userAnswer !== strCorrectAnswer) {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${intCorrectAnswer}'.`);
    console.log(`Let's try again, ${username}!`);
    boolShouldWeBreak = true;
  } else {console.log('Correct!');}

  //Check if the user answered all 3 questions correctly
  if (i === 3) {
    console.log(`Congratulations, ${username}!`);
    boolShouldWeBreak = true;
  }
  return boolShouldWeBreak;
} */
