const taskDao = require('../dal/TaskDAO')

async function sendIndexFile(req, res) { 
    res.sendFile(__dirname + "/index.html")
}



module.exports = {
    sendIndexFile:sendIndexFile,
}