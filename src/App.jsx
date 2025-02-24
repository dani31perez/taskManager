import { useState } from "react";
import "./App.css";
import FormTasks from "./components/FormTasks";
import ListTasks from "./components/ListTasks";
import { Container } from "react-bootstrap";

function App() {
  const [tasks, setTasks] = useState([]);

	const deleteTask = (deletedTask) => {
		const taskFilter = tasks.filter ((task) => task.name !== deletedTask.name || task.category !== deletedTask.category);
		setTasks(taskFilter);
	}

  return (
    <>
      <Container fluid={true} className="container-global">
        <h1 className="text-secondary-emphasis">Task Manager</h1>
        <FormTasks tasks={tasks} setTasks={setTasks} />
        <ListTasks tasks={tasks} deleteTask={deleteTask}/>
      </Container>
    </>
  );
}

export default App;
