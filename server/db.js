'use strict';

import mongoose from 'mongoose';

const DB_PORT = process.env.DB_PORT || 27017;
const DB_NAME = process.env.DB_NAME ;

mongoose.connect(
    `mongodb://localhost:${DB_PORT}/${DB_NAME}`,
    { useNewUrlParser: true, useUnifiedTopology: true},
    (err) => {
        if (err) {
            console.log(`Failed to connect to database ${err}`); 
        } else {
            console.log(`Database connected @ port ${DB_PORT}`);  
            console.log(process.env.DB_PORT)
        }
    }
    );

export default mongoose;  

