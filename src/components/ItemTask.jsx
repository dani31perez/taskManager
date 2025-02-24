import React from "react";
import { Row, Col, ListGroup, Container } from "react-bootstrap";

const ItemTask = ({ task, deleteTask}) => {
  return (
    <ListGroup.Item className="border-0 p-0">
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
              onClick={() => deleteTask(task)}
            ></i>
          </Col>
        </Row>
      </Container>
    </ListGroup.Item>
  );
};

export default ItemTask;
