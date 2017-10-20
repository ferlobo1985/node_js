const EventEmitter = require('events');
const util = require('util');


function Message(){
    this.message = 'Hey dude'
}

util.inherits(Message,EventEmitter)

Message.prototype.showMessage = function(){
    this.emit('showIt',this.message)
}

const message = new Message();

message.on('showIt',(data)=>{
    console.log(data)
})

message.showMessage();