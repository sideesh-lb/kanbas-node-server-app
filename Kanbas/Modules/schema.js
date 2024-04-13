import mongoose from "mongoose";

const learningObjectiveSchema = new mongoose.Schema({
    name: { type: String, required: true }
});
  
const moduleSchema = new mongoose.Schema({

    name: { type: String, required: true },
    description: { type: String, required: true },
    course: { type: String, required: true },
    learningObjectives: [learningObjectiveSchema]
},
{collection: "modules"}
);

export default moduleSchema;