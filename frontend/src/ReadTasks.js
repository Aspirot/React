import { useState, useEffect } from "react";
import axios  from "axios";
import { useNavigate } from "react-router-dom"
import TaskView from "./TaskView";

export default function ReadTasks(){
    let nav = useNavigate();
    const [tasks, setTasks] = useState([]);
    const [selectedTask, setSelectedTask] = useState(null);

    useEffect(  () =>{
        axios.get('http://localhost:8082/tasks')
        .then((resp) => setTasks(resp.data))
     }, [])

    return(
        <div>
            <h1>Read tasks</h1>
            <ul>
                {tasks.map(t => (
                    <li key={t.id} onClick={() => {setSelectedTask(t)}} >{t.title}</li>
                ))}
            </ul>
            <div>
                <h2>Task details</h2>
                    {(selectedTask) 
                    ? <div>
                        <TaskView selectedTask={selectedTask}/>
                        <h5 onClick={() => {nav(`/Tasks/Delete/${selectedTask._id}`)}}>Delete this task</h5>
                        <h5 onClick={() => {nav(`/Tasks/Update/${selectedTask._id}`)}}>Update this task</h5>
                    </div>
                    
                    : <EmptyView/>}
            </div>
            <h5 onClick={() => {nav("/");}}>Go to home</h5>
        </div>
    )
}
function EmptyView() {
    return (
      <div>
        <p>Select task to display details</p>
      </div>
    )
  }