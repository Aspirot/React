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

async function findTaskByObjectId(id){
    if(mongoose.isValidObjectId(id))
        return await Task.findById(id).exec();
}

async function findTaskById(id){
    return await Task.findOne({id:id});
}

async function findTaskByTitle(aTitle){
    return await Task.findOne({title:aTitle});
}

async function deleteTaskById(id){
    return await Task.deleteOne({id:id});
}

async function deleteTaskByObjectId(id){
    return await Task.deleteOne({_id:id});
}

async function findAllByStatus(aStatus){
    return await Task.find({status:aStatus})
}

module.exports = {
    dbConnect:dbConnect,
    addTask:addTask,
    findTasks:findTasks,
    findTaskByObjectId:findTaskByObjectId,
    findTaskById:findTaskById,
    findTaskByTitle:findTaskByTitle,
    deleteTaskById:deleteTaskById,
    findAllByStatus:findAllByStatus,
    deleteTaskByObjectId:deleteTaskByObjectId,
};