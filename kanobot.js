/*
	Name: KanoBot
	Author: Afreekano (Marcello Africano)
	Version: 1.0
*/

var Bot    = require('ttapi');
var AUTH   = 'xxxxxxxxxxxxxxxxxxxxxxxx';
var USERID = 'xxxxxxxxxxxxxxxxxxxxxxxx';
var ROOMID = 'xxxxxxxxxxxxxxxxxxxxxxxx';

var bot = new Bot(AUTH, USERID);

/* ===== Debugging ===== */
var debug = false;


/* ======= Public Chat [speak] Event ======= */
bot.on('speak', function(data) {
	// [Debugging] Log to console
	if (debug = true) {
		console.log('Someone said something.');
	}
	else {
		
	}
});

/* ===== Private Message [pmmed] Event ===== */

// When the bot recieves a message, tell the console to say that he has.
bot.on('pmmed', function(data) {
	// [Debugging] Log to console.
	if (debug = true) {
		console.log('The bot has recieved a message.');
	}
	else {
		
	}
});
