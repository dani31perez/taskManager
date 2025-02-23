import React from "react";
import "../styles/ListTasks.css";
import { ListGroup, Container, Row, Col } from "react-bootstrap";

const ListTasks = ({ tasks, deleteTask }) => {
  return (
    <ListGroup className="text-start mt-4">
      {tasks.map((task, i) => (
        <ListGroup.Item key={i} className="border-0 p-0">
          <Container fluid={true}>
            <Row>
              <Col xs={10}>
                <p className="fw-semibold mb-2 fs-5 ">{task.name}</p>
                <p className="mb-2 fs-6 text-secondary">
                  Category: {task.category}
                </p>
              </Col>
              <Col xs={2} className="col-icon">
                <i
                  className="text-secondary fa-solid fa-trash fa-lg"
                  onClick={() => deleteTask(i)}
                ></i>
              </Col>
            </Row>
          </Container>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default ListTasks;
