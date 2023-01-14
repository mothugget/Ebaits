'use strict';

import Post from '../models/post.js';
import User from '../models/user.js';

const getPosts = async (req, res) => {
    try {
        const post = await Post.find()
            .sort({createdAt:1})
            .limit(10)
            .populate("user");
        res.status(200);
        res.send(post.reverse());
    } catch (e) {
        console.log('error ', e);
        res.sendStatus(500);
    }
};

const postPost = async (req, res) => {
    try {
        const newPost = req.body.newPost;
        const idPost = await Post.create(newPost);
        await User.findOneAndUpdate({ _id: idPost.user }, { $push: { posts: idPost._id } });
        const resPost = await Post.findOne({ _id: idPost._id }).populate("user");
        res.status(201);
        res.send(resPost);
    } catch (e) {
        console.log('error ', e);
        res.sendStatus(500);
    }
};

const deletePost = async (req, res) => {
    try {
        const user = await Post.findOne(req.params);
        await User.findOneAndUpdate({ _id: user.user }, { $pull: { posts: { $in: [req.params] } } });
        const confirmation = await Post.deleteOne(req.params);
        res.status = 200;
        res.send(confirmation);
    } catch (err) {
        res.body = err;
        res.status = 500;
    }
};



export { getPosts, postPost, deletePost };

