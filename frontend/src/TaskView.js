const TaskView = (props) => {
    return (
      <div>
            <ul>
                <li>Id: {props.selectedTask.id}</li>
                <li>Title: {props.selectedTask.title}</li>
                <li>Description: {props.selectedTask.description}</li>
                <li>Status: {props.selectedTask.status}</li>
            </ul>
      </div>
    )
  }

  export default TaskView;
