const taskDao = require('../dal/TaskDAO')

async function sendIndexFile(req, res) { 
    res.sendFile(__dirname + "/index.html")
}

async function sendAllTasks(req, res){
    var tasks = "";
    tasks = await taskDao.findTasks()
    res.send(tasks)
}

async function sendTaskByObjectId(req, res) {
    let id = req.params.id;
    var task = "";
    task = await taskDao.findTaskByObjectId(id)
    res.send(task)
}

async function sendTaskById(req, res) {
    let id = req.params.id;
    var task = "";
    task = await taskDao.findTaskById(id)
    res.send(task)
}

async function postNewTask(req, res){
    const {id, title, description, status} = req.body;
    const json = {id:id,title:title,description:description,status:status}
    task = await taskDao.addTask(json)
    res.send(JSON.stringify(json) + " added successfully")
}

async function deleteTaskById(req, res){
    let id = req.params.id;
    var deletedTask = "";
    deleteTask = await taskDao.deleteTaskById(id);
    res.send(deletedTask); 
}

module.exports = {
    sendIndexFile:sendIndexFile,
    sendAllTasks:sendAllTasks,
    sendTaskById:sendTaskById,
    postNewTask:postNewTask,
    deleteTaskById:deleteTaskById,
}