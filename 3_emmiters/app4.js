const events = require('events');
const eventEmitter = new events.EventEmitter();


const message = 'Trigger only once';

eventEmitter.once('showMessage',()=>{
    console.log(message)
});

eventEmitter.emit('showMessage');
eventEmitter.emit('showMessage');
eventEmitter.emit('showMessage');
eventEmitter.emit('showMessage');
eventEmitter.emit('showMessage');
eventEmitter.emit('showMessage');