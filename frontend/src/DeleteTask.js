import axios  from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import TaskView from "./TaskView";

export default function DeleteTask(){
    let nav = useNavigate();
    let {taskId} = useParams();
    const [task, setTask] = useState();
    const [isDeleted, setIsDeleted] = useState(false);

    useEffect(() => { async function fetchTask(){
        if(!isNaN(taskId)){
        const baseURL = 'http://localhost:8082/tasks';
        await axios.get(`${baseURL}/${taskId}`)
        .then((resp) => setTask(resp.data))}
     }
     fetchTask()
    })

    async function deleteTask(){
        const baseURL = 'http://localhost:8082/tasks/deleteTask';
        await axios.delete(`${baseURL}/${taskId}`)
        .then(() => {setIsDeleted(true); console.log(`${task} has been deleted!`)})
        .catch((err) => console.log(err))
    }
    

    return(
        <div>
            <h1>Delete a task</h1>
            {task && !isDeleted &&
            <div>
                <TaskView selectedTask={task}/>
                <button onClick={deleteTask}>Delete this task</button>
            </div>
            }
            {!task && !isDeleted && <h3>There is no task with {taskId} as an id or it is invalid</h3>}
            {isDeleted && <h3>The task {taskId} has been successfully deleted</h3>}
            <h5 onClick={() => {nav("/");}}>Go to home</h5>
        </div>
    )
}