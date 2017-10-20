const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/App');

const carSchema = mongoose.Schema({
    brand: String,
    model: String,
    year: Number,
    avail: Boolean
});

const Car = mongoose.model('Car',carSchema);

// ######### STORE DATA ######### //
/*
const addCar = new Car({
    brand:"Ford",
    model:"Focus",
    year:"2000",
    avail:"true"
})

addCar.save((err,doc)=>{
    if(err) return console.log(err);

    console.log(doc)
})
*/

// ######### FIND DATA ######### //
/*
Car.find({brand:"Ford"},(err,doc)=>{
    if(err) return console.log(err)

    console.log(doc)
})

Car.findOne({_id:"59d80961e7b23004d531f9ab"},(err,doc)=>{
    if(err) return console.log(err)

    console.log(doc)
})

Car.findById("59d80961e7b23004d531f9ab",(err,doc)=>{
    if(err) return console.log(err)

    console.log(doc)
})
*/


// ######### REMOVE DATA ######### //
/*
Car.findOneAndRemove({brand:"Nissan"},(err,doc)=>{
    if(err) return console.log(err)

    console.log(doc)
})

Car.findByIdAndRemove("59d8092e9c02d704d229845d",(err,doc)=>{
    if(err) return console.log(err)

    console.log(doc)
})

Car.remove({},(err,doc)=>{
    if(err) return console.log(err)

    console.log(doc)
})
*/

// ######### UPDATE DATA ######### //
/*
Car.update({_id:"59d815d282a7c8f698974bd4"},{
    $set:{
        year:2000
    }
},(err,doc)=>{
    if(err) return console.log(err)
    console.log(doc)
})


// docs: http://mongoosejs.com/docs/api.html#model_Model.findByIdAndUpdate
Car.findByIdAndUpdate("59d815d282a7c8f698974bd4",{
    $set:{
        model:"focus"
    }
},{
    new:true
},(err,doc)=>{
    if(err) return console.log(err);
    console.log(doc)
})

Car.findById("59d815d282a7c8f698974bd4",(err,car)=>{
    if(err) return console.log(err);

    car.set({
        brand:"whatever"
    })
    car.save((err,doc)=>{
        if(err) return console.log(err);
        console.log(doc)
    })
})
*/