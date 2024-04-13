import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
    name: {type: String, required:true},
    number: {type: String, required:true, unique: true},
    description: String,
    startDate: String,
    endDate: String,
    image: String
},
{collection: "courses"}
);

export default courseSchema;