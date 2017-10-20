const EventEmitter = require('events');

class Message extends EventEmitter {
    constructor(){
        super();
        this.message = 'Hey dude'
        this.showMessage = () =>{
            this.emit('showIt', this.message)
        }
    }
}

const message = new Message();

message.on('showIt', (data)=>{
    console.log(data)
})

message.showMessage();