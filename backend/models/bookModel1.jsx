import mongoose from "mongoose";

const bookSchema1 = mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        author: {
            type: String,
            required: true
        },
        publishYear: {
            type: Number,
            required: true
        }
    }, 
    {
        timestamps: true
    }
);

export const book1 = mongoose.model('Books1', bookSchema1);