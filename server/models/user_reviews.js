const mongoose = require('mongoose');

const userReviewsSchema = mongoose.Schema({
    postId:{
        type:String,
        require:true
    },
    ownerId:{
        type:String,
        require:true
    },
    ownerUsername:{
        type:String,
        require:true,
        trim:true
    },
    titlePost:{
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
    }
},{timestamps:true});

const UserReview = mongoose.model('UserReview',userReviewsSchema);

module.exports = {UserReview}