var Pozi = require('pozi')
var fs = require('fs');
var bot = new Pozi.Bot();

var contents = fs.readFileSync(__dirname + '/words.csv', 'utf8');
var dictionary = contents.split('\n').filter(function(word){
  return word.length > 1 && /^[a-zA-Z]+$/.test(word)
})

bot.on(['message_received'], function(bot, utterance) {

  var letters = utterance.text.split("").filter(function(letter){
      return letter != " "
  })

  var words = dictionary.filter(function(word) {

    var detectedLetters = letters.filter(function(letter){
      return word.indexOf(letter) >= 0
    })

    return detectedLetters.length >= word.length
  })

  words = words.slice(0, Math.min(30, words.length - 1))

  bot.reply("You can make these words with the letters: " + letters.join(" "))
  bot.reply(words.join(", "))
});

// Wire up to twillio
bot.spawn()
