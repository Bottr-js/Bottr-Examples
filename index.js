var Bottr = require('bottr')

var server = new Bottr.Server()

// Start EchoBot Example
server.use('/echobot', require('./EchoBot'))

// Start Train Timetable Example
server.use('/train-timetable', require('./TrainTimetable'))

// Start Scrabble Dictionary Example
server.use('/scrabble-dictionary', require('./ScrabbleDictionary'))

var port = process.env.PORT || 3000
console.log('Examples listening on port ' + port)
server.listen(port)
