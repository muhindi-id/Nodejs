const EventEmitter = require('events')
const LogEvents = require('./LogEvents')
const eventEmitter = new EventEmitter()
 eventEmitter.on('logevent',(msg) => LogEvents(msg))
setTimeout(() =>{
    eventEmitter.emit('logevent',"ktuikik")
},2000)