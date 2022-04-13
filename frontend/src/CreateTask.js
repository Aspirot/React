import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom";


export default function CreateTask(){
    let nav = useNavigate();
    const [title,setTitle] = useState('')
    const [description,setDescription] = useState('')
    const [status,setStatus] = useState("In Progress")
    const [hasCreated,setHasCreated] = useState(false)
    const statusOptions = ["In Progress","Completed"]

    function create(){
        if(title && description && status)
            addTask()
        else
            console.log("Give all the information on the task")
    }

    async function addTask(){
        const baseURL = 'http://localhost:8082/tasks/addTask';
        const newTask = { title:title,description:description,status:status};
        await axios.post(`${baseURL}`,newTask)
        .then(() => {setHasCreated(true);console.log(newTask)})
        setTitle('')
        setDescription('')
        setStatus("In Progress")
    }

    return(
        <div>
            <h1>Create a task</h1>
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
            <button type="create" onClick={create}>Create</button>
            {hasCreated && 
            <h3>Task has been created!</h3>}
            <h5 onClick={() => {nav("/");}}>Go to home</h5>
        </div>
    )
}