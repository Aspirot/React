import axios  from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import TaskView from "./TaskView";

export default function UpdateTask(){
    let nav = useNavigate();
    let {taskId} = useParams();
    const [task, setTask] = useState();

    useEffect(() => { async function fetchTask(){
        const baseURL = 'http://localhost:8082/tasks';
        await axios.get(`${baseURL}/${taskId}`)
        .then((resp) => setTask(resp.data))
     }
     fetchTask()
    })


    return(
        <div>
            <h1>Update a task</h1>
            {task && <TaskView selectedTask={task}/>}
            {!task && <h3>There is no task with this id</h3>}
            <h5 onClick={() => {nav("/");}}>Go to home</h5>
        </div>
    )
}