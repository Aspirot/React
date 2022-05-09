import axios  from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"

export default function UpdateTask(){
    let nav = useNavigate();
    let {taskId} = useParams();
    const [title,setTitle] = useState('')
    const [description,setDescription] = useState('')
    const [status,setStatus] = useState('')
    const [hasUpdated,setHasUpdated] = useState(false)
    const statusOptions = ["In Progress","Completed"]

    useEffect(() => { async function fetchTask(){
        if(taskId){
            const baseURL = 'http://localhost:8082/tasks';
            await axios.get(`${baseURL}/${taskId}`)
            .then((resp) => {setTitle(resp.data.title);setDescription(resp.data.description);setStatus(resp.data.status)})}
     }
     fetchTask()
    },[taskId])

    async function update(){
        if(title && description && status){
            const baseURL = 'http://localhost:8082/tasks/updateTask';
            const updatedTask = { title:title,description:description,status:status};
            await axios.put(`${baseURL}/${taskId}`,updatedTask)
                .then(() => {setHasUpdated(true);console.log(updatedTask)})
        }
    }

    return(
        <div>
            <h1>Update a task</h1>
            {title &&
            <div>
                <label>
                Title : 
                <input type="text" value={title} onChange={event => setTitle(event.target.value)}/>
            </label>
            <br/>
            <label>
                Description : 
                <input type="text" value={description} onChange={event => setDescription(event.target.value)} />
            </label>
            <br/>
            <label>
                Status : 
                <select type="text" value={status} onChange={event => setStatus(event.target.value)}>
                    {statusOptions.map(o => (
                        <option value={o} key={o}>{o}</option>
                    ))}
                </select>
            </label>
            <br/>
            <button type="update" onClick={update}>Update</button>
            </div>}
            {!title && <h3>There is no task with this id</h3>}
            {hasUpdated && 
            <h3>Task has been updated!</h3>}
            <h5 onClick={() => {nav("/");}}>Go to home</h5>
        </div>
    )
}