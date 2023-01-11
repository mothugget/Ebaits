'use strict';
import express from 'express';
import { getStuff, postStuff, deleteStuff } from './controllers/stuffController.js';
const router = express.Router();

router.get('/stuff', getStuff);
router.post('/stuff', postStuff);
router.delete('/stuff/:_id', deleteStuff);

export default router;