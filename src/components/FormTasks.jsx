import React, { useState } from "react";
import { Form, FloatingLabel, Button } from "react-bootstrap";

const FormTasks = ({ tasks, setTasks }) => {
  const [task, setTask] = useState("");
  const [category, setCategory] = useState("Choose");
  const [validate, setValidate] = useState(false);

  const handleSubmit = (e) => {
    const form = e.currentTarget;
    e.preventDefault();
    if (form.checkValidity() === false){
        setValidate(true);
    } else {
      setTasks([...tasks, { name: task, category: category }]);
      setTask("");
      setCategory("");
      setValidate(false);
      console.log(tasks);
    }

  };

  return (
    <Form
      noValidate
      validated={validate}
      onSubmit={handleSubmit}
      className="text-start"
    >
      <FloatingLabel
        controlId="floatingTask"
        label="Add a new task"
        className="my-4"
      >
        <Form.Control
          required
          type="text"
          placeholder="Add a new task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <Form.Control.Feedback type="invalid">
          Please enter a task to add
        </Form.Control.Feedback>
      </FloatingLabel>
      <FloatingLabel controlId="floatingSelect" label="Category">
        <Form.Select
          aria-label="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        >
          <option value="">Choose a category</option>
          <option value="Personal">Personal</option>
          <option value="Work">Work</option>
          <option value="Study">Study</option>
        </Form.Select>
        <Form.Control.Feedback type="invalid">
          Please choose a category
        </Form.Control.Feedback>
      </FloatingLabel>
      <div className="d-grid mt-4">
        <Button size="lg" type="submit">
          Add task
        </Button>
      </div>
    </Form>
  );
};

export default FormTasks;
