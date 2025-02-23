import { useState } from "react";
import "./App.css";
import FormTasks from "./components/FormTasks";

function App() {
  const [tasks, setTasks] = useState([]);

  return (
    <>
      <div className="container-fluid container-global">
        <h1 className="text-secondary-emphasis">Task Manager</h1>
        <FormTasks tasks={tasks} setTasks={setTasks}/>
      </div>
    </>
  );
}

export default App;
