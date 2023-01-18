'use strict';

import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    country: String,
    posts: [{
        type: Schema.Types.ObjectId,
        ref: "Post"
    }],
    picid: String
});

const User = mongoose.model('User', userSchema);


export default User;