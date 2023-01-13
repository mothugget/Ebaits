'use strict';

import User from '../models/user.js';
import Post from '../models/post.js';
import chalk from 'chalk';


const getUsers = async (req, res) => {
    try {
        const usr = await User.find();
        res.status(200);
        res.send(usr);
    } catch (e) {
        console.log(chalk.red('getUser'), e);
        res.sendStatus(500);
    }
};

const postUser = async (req, res) => {
    try {
        const newUser = req.body.newUser;
        const resUser = await User.create(newUser);
        res.status(201);
        res.send(resUser);
    } catch (e) {
        console.log(chalk.red('postUser'), e);
        res.status(500)
        res.send(e);

    }
};

const deleteUser = async (req, res) => {
    try {
        const resUser = await User.findOne(req.params);
        resUser.posts.forEach(async (postId) => {
            await Post.deleteOne({ _id: postId.toString() });
        });
        const confirmation = await User.deleteOne(req.params);
        res.status = 200;
        res.send(confirmation);
    } catch (e) {
        console.log(chalk.red('deleteUser'), e)
        res.body = e;
        res.status = 500;
    }
};



export { getUsers, postUser, deleteUser };

