#!/usr/bin/env node
import readlineSync from 'readline-sync';

export default function getUsernameAndGreetHim() {

	console.log('Welcome to the Brain Games!');

	//Get User's name and greet him using library "readline-sync"
	let username = readlineSync.question('May I have your name?\n')
	// Wait for user's response.
	console.log('Hi, ' + username + '!');
}
