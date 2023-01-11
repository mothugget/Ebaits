'use strict';

import mongoose from '../db.js';

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },  
    email: String,
    country: String,
    posts: [String],
    picid: String
});

const User = mongoose.model('User', userSchema);


export default User;