const {MongoClient} = require('mongodb');

const URL = 'mongodb://localhost:27017/test'

// ######### CONNECT TO MONGO ######## //
MongoClient.connect(URL,(err,db)=>{
    if(err){
        console.log('Error')
    }
    console.log('connected to test')
    db.close();
})


// ######## INSERT DATA ######## //

// INSERTONE
/*
MongoClient.connect(URL,(err,db)=>{
    db.collection('Cars').insertOne({
        model:"Ford",
        year:2017
    },(err,res)=>{
        if(err){
            return console.log(`Cannot insert: ${err}`)
        }
        console.log(res.ops)
    })
    console.log('connected to test')
    db.close();
})
*/

// INSERT
/*
MongoClient.connect(URL,(err,db)=>{
    const cars = [
        {model:"chevy",year:2017},
        {model:"nissan",year:2018},
    ];
    db.collection("Cars").insert({model:"Ford",year:2000},(err,res)=>{
        if(err){
            return console.log(`Cannot insert: ${err}`)
        }
        console.log(res.ops)
    })
    console.log('connected to test')
    db.close();
})
*/


// INSERT MANY
/*
MongoClient.connect(URL,(err,db)=>{
    const cars = [
        {model:"chevy",year:2017},
        {model:"nissan",year:2018},
        {model:"ferrari",year:2000},
        {model:"audi",year:1998}
    ];
    db.collection("Cars").insertMany(cars,(err,res)=>{
        if(err){
           return console.log(`Cannot insert: ${err}`)
        }
        console.log(res.ops)
    })
    console.log('connected to test')
    db.close();
})
*/

// FIND 
/*
MongoClient.connect(URL,(err,db)=>{
    db.collection("Cars").find({year:2000}).limit().skip(1).toArray((err,docs)=>{
        if(err){
            return console.log(`Cannot get: ${err}`)
        }
        console.log(docs)
    })

    console.log('connected to test')
    db.close();
})
*/

/*
MongoClient.connect(URL,(err,db)=>{
    db.collection("Cars").findOne({year:2000},{model:0,_id:0},(err,doc)=>{
        console.log(doc)
    })
    console.log('connected to test')
    db.close();
});
*/

// DELETE 
/*
MongoClient.connect(URL,(err,db)=>{

    // db.collection("Cars").deleteMany({year:2000},(err,doc)=>{
    //     console.log(doc)
    // })

    // db.collection("Cars").deleteMany({year:1998}).then((result)=>{
    //     console.log(result)
    // })

    // db.collection("Cars").deleteOne({model:"nissan"},(err,doc)=>{
    //     console.log(doc)
    // })

    db.collection("Cars").findOneAndDelete({year:1998},(err,doc)=>{
        console.log(doc)
    })


    console.log('connected to test')
    db.close();
});
*/


// UPDATE
/// OPERATOS: https://docs.mongodb.com/manual/reference/operator/update/
/*
MongoClient.connect(URL,(err,db)=>{

    db.collection("Cars").findOneAndUpdate({
        model:"nissan"
    },{
        $set:{
            model:"bmw"
        },
        $inc:{
            year:+2
        }
    },{
        upsert:true,
        returnOriginal:true
    },(err,doc)=>{
        console.log(doc)
    })

    console.log('connected to test')
    db.close();
});
*/