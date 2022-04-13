import { useState } from "react"


export default function CreateTask(){
    const [title,setTitle] = useState('')
    const [description,setDescription] = useState('')
    const [status,setStatus] = useState("In Progress")
    const statusOptions = ["In Progress","Completed"]


    function submit(){
        console.log(title + "  " + description + "  " + status)
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
                <button type="submit" onClick={submit}>Submit</button>

        </div>
    )
}