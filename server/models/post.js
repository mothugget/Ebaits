'use strict';

import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const postSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    name: String,
    type: String,
    length: Number,
    weight: Number,
    imgid: [String]
},
    { timestamps: true });

const Post = mongoose.model('Post', postSchema);


export default Post;