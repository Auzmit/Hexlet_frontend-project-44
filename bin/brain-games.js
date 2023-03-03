#!/usr/bin/env node
import cliGames from '../src/cli.js';

//Get User's name and greet him
let username = cliGames();
console.log('Hello, ' + username + '!');