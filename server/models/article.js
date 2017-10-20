const mongoose = require('mongoose');

const articleSchema = mongoose.Schema({
    title:{
        type:String,
        require:true,
        trim:true
    },
    ownerUsername:{
        type:String,
        require:true,
        trim:true
    },
    review:{
        type:String,
        require:true,
        trim:true,
        maxlength:500
    },
    rating:{
        type:Number,
        require:true,
        min:1,
        max:10
    },
    ownerId:{
        type:String,
        require:true
    }
},{timestamps:true});

const Article = mongoose.model('Article',articleSchema);

module.exports = {Article};