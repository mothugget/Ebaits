'use strict';

import mongoose from '../db.js';

const Schema = mongoose.Schema;

const postSchema = new Schema({
    username: {
        type: String,
        required: true,
    },  
    name: String,
    type: String,
    length: Number,
    weight: Number,
    imgid: [String]
});

const Post = mongoose.model('Post', postSchema);


export default Post;