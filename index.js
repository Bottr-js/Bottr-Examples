var Express = require('express')
var app = Express()

app.use('/echobot', require('./EchoBot')) // Start EchoBot Example
app.use('/train-timetable', require('./TrainTimetable')) // Start Train Timetable Example
app.use('/scrabble-dictionary', require('./ScrabbleDictionary')) // Start Scrabble Dictionary Example

var port = process.env.PORT || 3000
console.log('Examples listening on port ' + port)
app.listen(port)
