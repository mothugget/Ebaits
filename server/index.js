'use strict';

import express from 'express';
const app = express();
import router from './router.js';
import cors from 'cors';
import * as dotenv from 'dotenv'
import path from 'path';
import { fileURLToPath } from 'url';




const PORT = 3030;

app.use(cors());
app.use(express.json());
app.use(router); 

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`); 
});
