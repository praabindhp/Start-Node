const EventEmmitter = require('events');
const emitter = new EventEmmitter();

// Register A Listener
emitter.on('messageLogged', function(){
    console.log('Listerner Called');
});

// Rised An Event
emitter.emit('messageLogged'); // Emit -  Produce Something