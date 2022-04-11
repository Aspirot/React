const express = require('express')
const bodyParser = require('body-parser')
const taskService = require('./taskService')
const taskDao = require('../dal/TaskDAO')
const cors = require("cors");

const router = express.Router();
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use("/",router)

taskDao.dbConnect();

router.get('/', taskService.sendIndexFile)
router.get('/tasks', taskService.sendAllTasks)
router.get('/tasks/:id', taskService.sendTaskById)
router.post('/tasks/addTask', taskService.postNewTask)

const port = process.env.PORT || 8082;
app.listen(port, () => console.log(`Server running on port ${port}`))