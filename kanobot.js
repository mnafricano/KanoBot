/*
	Name: KanoBot
    Author: Afreekano (Marcello Africano)
    Version: 1.0
*/

var Bot    = require('ttapi');
var AUTH   = 'xxxxxxxxxxxxxxxxxxxxxxxx';
var USERID = 'xxxxxxxxxxxxxxxxxxxxxxxx';
var ROOMID = 'xxxxxxxxxxxxxxxxxxxxxxxx';

var bot = new Bot(AUTH, USERID)

// When the bot recieves a message, tell the console to say that he has.
bot.on('pmmed', function(data) {
  // Log to console.
  console.log('The bot has recieved a message.');
});
