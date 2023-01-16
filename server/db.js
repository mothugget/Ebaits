'use strict';

import mongoose from 'mongoose';



mongoose.connect(
 
    "mongodb://localhost:27017/ebaitDB",
    { useNewUrlParser: true, useUnifiedTopology: true},
    (err) => {
        if (err) {
            console.log(`Failed to connect to database ${err}`); 
        } else {
            console.log(`Database connected @ port 27017`);  
        }
    }
    );

export default mongoose;  

