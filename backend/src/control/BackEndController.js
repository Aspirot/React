const taskDAO = require("../dal/TaskDAO")

async function main(){
    //console.log("Attempting connection...")
    await taskDAO.dbConnect()
    //taskDAO.addTask({id:1,title : "Java project", description : "Back-end application project", status : "In Progress"});
    //taskDAO.addTask({id:2,title : "React project", description : "Front-end application project", status : "In Progress"});
    //taskDAO.deleteTaskById("6250d23e11d9bdb0a3b5e2c1")
    //const customers = await customerDAO.findCustomers();
    //console.log(customers);

    const task = await taskDAO.findTaskByTitle("React project")
    console.log(task);

    const tasks = await taskDAO.findAllByStatus("In Progress")
    console.log(tasks)
}

main();