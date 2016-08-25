var Pozi = require('pozi')
var bot = new Pozi.Bot();

// Find CSV Dictionary
var dictionary = [
  "sat",
  "hat",
  "mat"
]

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

  bot.reply("Here are the words you can make with the letters: " + letters.join(" "))
  bot.reply(words.join(", "))
});

// Wire up to twillio
bot.spawn()
