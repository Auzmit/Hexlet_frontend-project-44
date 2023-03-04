#!/usr/bin/env node
import cliGames from '../src/cli.js';

// Get User's name and greet him
const username = cliGames();
console.log(`Hello, ${username}!`);
