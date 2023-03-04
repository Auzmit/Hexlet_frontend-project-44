#!/usr/bin/env node
import readlineSync from 'readline-sync';

export default function cliGames() {
  console.log('Welcome to the Brain Games!');

  // Get User's name (using library "readline-sync")
  const username = readlineSync.question('May I have your name?\n');

  // Wait for user's response.
  return username;
}
