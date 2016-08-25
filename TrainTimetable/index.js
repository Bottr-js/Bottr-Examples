var Pozi = require('pozi')
var bot = new Pozi.Bot({
   json_file_store: './data'
});

// TODO: Replace with real data
var timetable = [
  {
    time: "7:00",
    destination: "London"
  },
  {
    time: "8:00",
    destination: "Swindon"
  },
  {
    time: "9:00",
    destination: "London"
  },
  {
    time: "10:00",
    destination: "Swindon"
  },
  {
    time: "11:00",
    destination: "London"
  },
  {
    time: "12:00",
    destination: "Swindon"
  }
]

bot.hears([/timetable/], ['message_received'], function(bot, utterance, context) {

  var rows = timetable.map(function(item){
    return item.time + " " + item.destination
  })

  //List timetable
  bot.reply("The timetable for today is:")
  bot.reply(rows.join("\n"));
});

// Put into array
bot.hears([/thanks/, /cheers/, /thank you/, /ta/, /thx/, /ty/], ['message_received'], function(bot, utterance, context) {
  bot.reply("No problem!")
});

// Hook up to twitter
bot.spawn({
  client: 'twitter',
  name: 'TrainTimesBot'
})
