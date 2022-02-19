const EventEmmitter = require('events');
const emitter = new EventEmmitter();

// Register A Listener
emitter.on('messageLogged', (arg) => {
    console.log('Listerner Called', arg);
});

// Rised An Event
emitter.emit('messageLogged', { id: 1, url: 'http://'}); // Emit -  Produce Something

const log = require('./logger');
log('message');