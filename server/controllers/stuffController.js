'use strict';
import Stuff from '../models/stuffModel.js';

const getStuff = async (req, res) => {
    try {
        const stf = await Stuff.find();
        res.status(200);
        res.send(stf);
    } catch (e) {
        console.log('error ', e);
        res.sendStatus(500);
    }
};

const postStuff = async (req, res) => {
    try {
        await Stuff.create(req.body);
        res.status(201);
        res.send();
    } catch (e) {
        console.log('error ', e);
        res.sendStatus(500);
    }
};

const deleteStuff = async (req, res) => {
    try {
        await Stuff.deleteOne(req.params);
        console.log(req.params)
        res.status = 200;
        res.send(req.params)
    } catch (err) {
        res.body = err;
        res.status = 500;
    }
};

export { getStuff, postStuff, deleteStuff };

