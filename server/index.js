'use strict';



import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv'
import path from 'path';
import { fileURLToPath } from 'url';
import router from './router.js';

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(path.resolve(__dirname, './.env')) });

const DB_PORT = process.env.DB_PORT;
const DB_NAME = process.env.DB_NAME;
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(router); 

mongoose.connect(

    `mongodb://localhost:${DB_PORT}/${DB_NAME}`,
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err) => {
        if (err) {
            console.log(`Failed to connect to database ${err}`);
        } else {
            console.log(`Database connected @ port 27017`);
            app.listen(PORT, () => {
                console.log(`Server running at http://localhost:${PORT}`);
            });
        }
    }
);

export default mongoose;  


