const events = require('events');
const eventEmitter = new events.EventEmitter();

const ringBell = () => {
    console.log('ring ring ring')
}


eventEmitter.on('guestHere', ringBell);

//////////////////////

const sayHello = () =>{
    console.log(`hello who's there`)
}

eventEmitter.on('guestHere', sayHello);

////////////////////

eventEmitter.on('guestHere', (action) =>{
    console.log(action)
});

////////////////////
eventEmitter.emit('guestHere','its me your guest');


