const express = require('express')
const bodyParser = require('body-parser')
const taskService = require('./taskService')
const taskDao = require('../dal/TaskDAO')

const router = express.Router();
const app = express();

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use("/",router)

taskDao.dbConnect();

router.get('/', taskService.sendIndexFile)
//router.get('/customers/:id', taskService.sendCustomerById)
//router.get('/customers', taskService.sendAllCustomers)
//router.post('/customers/addCustomer', taskService.postNewCustomer)

const port = process.env.PORT || 8082;
app.listen(port, () => console.log(`Server running on port ${port}`))