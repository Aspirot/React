import axios  from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"

export default function UpdateTask(){
    let nav = useNavigate();
    let {taskId} = useParams();
    const [task, setTask] = useState();

    useEffect(() => { async function fetchTask(){
        if(taskId){
            const baseURL = 'http://localhost:8082/tasks';
            await axios.get(`${baseURL}/${taskId}`)
            .then((resp) => setTask(resp.data))}
     }
     fetchTask()
    })


    return(
        <div>
            <h1>Update a task</h1>
            {task && <UpdateTaskView selectedTask={task}/>}
            {!task && <h3>There is no task with this id</h3>}
            <h5 onClick={() => {nav("/");}}>Go to home</h5>
        </div>
    )
}

const UpdateTaskView = (props) => {
    return (
      <div>
            <ul>
                <li>Id: {props.selectedTask._id}</li>
                <li>Title: {props.selectedTask.title}</li>
                <li>Description: {props.selectedTask.description}</li>
                <li>Status: {props.selectedTask.status}</li>
            </ul>
      </div>
    )
  }