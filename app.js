const fs = require('fs');
const commandLineArgs = require('command-line-args');

const optionsDefinitions = [
    {name:'name',type:String},
    {name:'order',type:String},
    {name:'payment',type:Number},
    {name:'exit',type:Boolean}
];

const options = commandLineArgs(optionsDefinitions)

// 1 - node app.js
// 2 - node app.js --name=James
// 3 - node app.js --order=PIZZA
// 4 - node app.js --payment=100
// 5 - node app.js --exit

let getJson = fs.readFileSync('db.json');
let data = JSON.parse(getJson);

const saveIt = (newData) =>{
    const toString = JSON.stringify(newData);
    fs.writeFileSync('db.json',toString);
}


if(options.name){
    data.name = options.name;

    console.log(`Hello, ${options.name}, we are serving CAKE,PIZZA and SALAD`)

    saveIt(data);

} else if(options.order){
    data.order = options.order;

    console.log(`Ok ${data.name}, that would be $25, you will pay with....`)
    saveIt(data);
    
} else if(options.payment){
    data.payment = options.payment;

    console.log(`Your change is ${options.payment - 25}, thanks for eating at chuckies type --exit to get the order`)
    saveIt(data);
}else if(options.exit){
    console.log(data)
    console.log(`Thanks`)

    data.name = '';
    data.order = '';
    data.payment = '';
    saveIt(data);
}else {
    console.log(`Hello, please enter your name`)
}
