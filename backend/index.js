import express from "express";
import {PORT, mongoDBURL} from "./config.js";
import mongoose from "mongoose";
import {Book} from './models/bookModel.js';
import booksRoute from './routes/booksRoute.js';
import cors from 'cors';


const app = express();

// Middleware for parsing request body
app.use(express.json());

// middleware for handling CORS policy
// option 1: Allow all origins with default of cors(*)
app.use(cors());
// option 2: Allow Custom Origins
// app.use(cors({
//     origin: 'http://localhost:3000',
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     allowheaders: ['Content-Type']
// })
// );

app.get('/', (request, response)=>{
    console.log(request);
    return response.status(302).send("Welcome to tut");
});

mongoose
    .connect(mongoDBURL)
    .then(()=>{
        console.log("App is connected to DB");
        app.listen(PORT, ()=>{
            console.log(`App is listening to port: ${PORT}`);
        });
    })
    .catch((error)=>{
        console.log(error);
    })

    app.use('/books', booksRoute);