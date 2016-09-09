var Bottr = require('bottr')
var bot = new Bottr.Bot('TrainTimesBot');

bot.use(new Bottr.TwilioClient())
bot.use(new Bottr.TwitterClient())

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

bot.hears(/timetable/i, function(message, session) {

  var rows = timetable.map(function(item){
    return item.time + " " + item.destination
  })

  session.send("The timetable for today is: \n" + rows.join("\n"))
});

bot.hears([/thanks/i, /cheers/i, /thank you/i, /ta/i, /thx/i, /ty/i], function(message, session) {
  session.send("No problem!")
});

module.exports = bot
