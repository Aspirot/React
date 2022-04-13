import {Link, Route, Routes, BrowserRouter as Router} from "react-router-dom"
import CreateTask from './CreateTask';
import DeleteTask from "./DeleteTask";
import ReadTasks from "./ReadTasks";
import UpdateTask from "./UpdateTask";

function App() {
  return (
    <Router>
            <Routes>
                <Route path={"/"} element={<Navigation/>}/>
                <Route path={"/Tasks"} element={<ReadTasks/>}/>
                <Route path={"/Tasks/Create"} element={<CreateTask/>}/>
                <Route path={"/Tasks/Update/:taskId"} element={<UpdateTask/>}/>
                <Route path={"/Tasks/Delete/:taskId"} element={<DeleteTask/>}/>
                <Route path={"*"} element={<ErrorPage/>}/>
            </Routes>
            <div>
                <br/>
                <Footer/>
            </div>
        </Router>
  );
}

const Navigation = () => {
  return(
      <nav style={{borderBottom: 'solid 1px', paddingBottom: '1rem'}}>
          <ul>
              {/*<li><Link to="/">Home</Link></li>*/}
              <li><Link to="/Tasks">See all tasks</Link></li>
              <li><Link to="/Tasks/Create">Create a task</Link></li>
              {/*these will be accessed by going through ReadTasks
              <li><Link to="/Tasks/Update">Update a task</Link></li>
              <li><Link to="/Tasks/Delete">Delete a task</Link></li>
              */}
          </ul>
      </nav>
  )
}

function Footer(){
  return <div>A REACT project by Denis Aspirot and William Guilbault</div>
}

function ErrorPage(){
  return <div>This is the error page</div>
}

export default App;
