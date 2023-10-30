import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import {PORT, mongoDBURL } from "config.js";

const app = express();

app.use(express.json());

app.use(cors());

app.get('/', (request, response)=>{
    console.log(request);
    response.status(302).send("Welcome to practice");
});

mongoose
    .connect(mongoDBURL)
    .then(()=>{
        console.log("App is connected to Database");
        app.listen(PORT, ()=>{
            console.log(`App is listening to port: ${PORT}`)
        });
    })

app.use('/books', BooksRoute1)