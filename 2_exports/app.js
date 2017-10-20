const message = require('./message');
message();
message.message1x();

// const message2 = require('./message2').message2;
// message2();

const {message2} = require('./message2');
message2();

// let message3 = require('./message3').message3;
// message3()

// let message3x = require('./message3').message3x;
// message3x();

const whatever = require('./message3');
whatever.message3();
whatever.message3x();


const message4 = require('./message4');
console.log(message4.message)