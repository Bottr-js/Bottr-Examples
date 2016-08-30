var Pozi = require('pozi')
var bot = new Pozi.Bot('TrainTimesBot');

bot.use(new Pozi.TwilioClient())
bot.use(new Pozi.TwitterClient())

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

bot.hears(/timetable/, function(message, session) {

  var rows = timetable.map(function(item){
    return item.time + " " + item.destination
  })

  session.send("The timetable for today is: \n" + rows.join("\n"))
});

bot.hears([/thanks/, /cheers/, /thank you/, /ta/, /thx/, /ty/], function(message, session) {
  session.send("No problem!")
});

module.exports = bot
