const mongoose = require("mongoose");
const Task = require("../model/Task");

const connectionString = "mongodb+srv://boey:forAmine@boeycluster.fuzbh.mongodb.net/React?retryWrites=true&w=majority";

async function dbConnect(){
    mongoose.connect(connectionString, 
        () => {console.log("Connected to database");}, 
        (err) => {console.error(err.message); process.exit(1);}
    )
}

async function addTask(jsonStr) {
    const task = new Task(jsonStr);
    await task.save();
    console.log("Task added")
}

async function findTasks(){
    return await Task.find({});
}

async function findTaskById(id){
    return await Task.findById(id).exec();
}

async function findTaskByTitle(aTitle){
    return await Task.findOne({title:aTitle});
}

async function deleteTaskById(id){
    return await Task.deleteOne({_id:id});
}

async function findAllByStatus(aStatus){
    return await Task.find({status:aStatus})
}

module.exports = {
    dbConnect:dbConnect,
    addTask:addTask,
    findTasks:findTasks,
    findTaskById:findTaskById,
    findTaskByTitle:findTaskByTitle,
    deleteTaskById:deleteTaskById,
    findAllByStatus:findAllByStatus,
};