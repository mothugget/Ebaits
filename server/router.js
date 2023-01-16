'use strict';
import express from 'express';
import { getUser, postUser, deleteUser } from './controllers/user.js';
import { getPosts, postPost, deletePost } from './controllers/post.js';
const router = express.Router();

router.get('/user/:username', getUser);
router.get('/user/signin/:email', getUser)
router.post('/user', postUser);
router.delete('/user/:username', deleteUser);

router.get('/posts', getPosts);
router.post('/post', postPost);
router.delete('/post/:_id', deletePost);

export default router;