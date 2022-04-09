const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
    title: String, 
    description:String,
    status:String
});

let Task = mongoose.model("Task",TaskSchema)

module.exports = Task;