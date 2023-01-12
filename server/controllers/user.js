'use strict';

import User from '../models/user.js';


const getUsers = async (req, res) => {
    try {
        const usr = await User.find();
        res.status(200);
        res.send(usr);
    } catch (e) {
        console.log('error ', e);
        res.sendStatus(500);
    }
};

const postUser = async (req, res) => {
    try {
        const newUser = req.body.newUser;
        await User.create(newUser);
        res.status(201);
        res.send(newUser);
    } catch (e) {
        console.log('error ', e);
        res.status(500)
        res.send(e);

    }
};

const deleteUser = async (req, res) => {
    try {
        await User.deleteOne(req.params);
        console.log(req.params)
        res.status = 200;
        res.send(req.params)
    } catch (err) {
        res.body = err;
        res.status = 500;
    }
};



export { getUsers, postUser, deleteUser };

