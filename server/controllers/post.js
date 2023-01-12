'use strict';

import Post from '../models/post.js';
import User from '../models/user.js';

const getPosts = async (req, res) => {
    try {
        const pst = await Post.find();
        res.status(200);
        res.send(pst);
    } catch (e) {
        console.log('error ', e);
        res.sendStatus(500);
    }
};

const postPost = async (req, res) => {
    try {
        const newPost = req.body.newPost;
        const resPost = await Post.create(newPost);
        const updatedUser = await updateUserPostField(resPost.username, resPost._id)
        res.status(201);
        res.send({user: updatedUser,
        post: resPost});
    } catch (e) {
        console.log('error ', e);
        res.sendStatus(500);
    }
};

const deletePost = async (req, res) => {
    try {
        await Post.deleteOne(req.params);
        console.log(req.params)
        res.status = 200;
        res.send(req.params)
    } catch (err) {
        res.body = err;
        res.status = 500;
    }
};

const updateUserPostField = async (userName, postId)=> {
    const user = (await User.find({username:userName}))[0];
    user.posts.push(postId)
    return await user.save();
}

export { getPosts, postPost, deletePost };

