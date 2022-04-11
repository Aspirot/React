const taskDao = require('../dal/TaskDAO')

async function sendIndexFile(req, res) { 
    res.sendFile(__dirname + "/index.html")
}

async function sendAllTasks(req, res){
    res.set('Access-Control-Allow-Origin', '*');
    var tasks = "";
    tasks = await taskDao.findTasks()
    res.send(tasks)
}

async function sendTaskByObjectId(req, res) {
    res.set('Access-Control-Allow-Origin', '*');
    let id = req.params.id;
    var task = "";
    task = await taskDao.findTaskByObjectId(id)
    res.send(task)
}

async function sendTaskById(req, res) {
    res.set('Access-Control-Allow-Origin', '*');
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

module.exports = {
    sendIndexFile:sendIndexFile,
    sendAllTasks:sendAllTasks,
    sendTaskById:sendTaskById,
    postNewTask:postNewTask,
}