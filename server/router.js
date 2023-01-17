'use strict';
import express from 'express';
import { getUser, postUser, deleteUser } from './controllers/user.js';
import { getPosts, createPost, deletePost } from './controllers/post.js';
const router = express.Router();

router.get('/user/:username', getUser);
router.get('/user/id/:_id', getUser);
router.get('/user/signin/:email', getUser)
router.post('/user', postUser);
router.delete('/user/:username', deleteUser);

router.get('/posts', getPosts);
router.post('/post', createPost);
router.delete('/post/:_id', deletePost);

export default router;