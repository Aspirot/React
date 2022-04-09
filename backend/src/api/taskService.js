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

async function sendTaskById(req, res) {
    res.set('Access-Control-Allow-Origin', '*');
    let id = req.params.id;
    var task = "";
    task = await taskDao.findTaskById(id)
    res.send(task)
}

module.exports = {
    sendIndexFile:sendIndexFile,
    sendAllTasks:sendAllTasks,
    sendTaskById:sendTaskById,
}