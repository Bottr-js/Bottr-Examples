var Pozi = require('pozi')
var fs = require('fs');
var bot = new Pozi.Bot();

bot.use(new Pozi.FacebookMessengerClient())

bot.on('message_received', function(message, session) {
  session.send(message.text)
});

module.exports = bot
