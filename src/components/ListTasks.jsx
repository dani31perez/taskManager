import React, { useState } from "react";
import "../styles/ListTasks.css";
import { ListGroup, Form, FloatingLabel } from "react-bootstrap";
import ItemTask from "./ItemTask";

const ListTasks = ({ tasks, deleteTask }) => {
  const [search, setSearch] = useState("");
  const filteredTasks = tasks.filter(
    (task) => task.category === search || search === ""
  );

  return (
    <>
      {tasks.length > 0 && (
        <FloatingLabel
          controlId="floatingSelect"
          label="Filter by category"
          className="mt-4"
        >
          <Form.Select
            aria-label="Category"
            required
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          >
            <option value="">All</option>
            <option value="Personal">Personal</option>
            <option value="Work">Work</option>
            <option value="Study">Study</option>
          </Form.Select>
        </FloatingLabel>
      )}
      <ListGroup className="text-start mt-4">
        {filteredTasks.length != 0 ? (
          filteredTasks.map((task, index) => (
            <ItemTask
              key={index}
              task={task}
              i={index}
              deleteTask={deleteTask}
            />
          ))
        ) : tasks.length > 0 && (
          <p>No tasks found for this category</p>
        )}
      </ListGroup>
    </>
  );
};

export default ListTasks;
