import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import boxElements from "./components/Box";
import Button from "react-bootstrap/Button";
import { getAppendedData, getInitialData, getTruncatedData } from "./helpers";

// Import bootstrap components
import { Container, Row, Col } from "react-bootstrap";

const rootElement = document.getElementById("root");

// Variables

const App = () => {
  const [numBox, setNumBox] = useState(1);

  console.log(numBox);
  return (
    <>
      <Container fluid>
        <Row>
          <Col className="d-flex justify-content-center">
            <h1>Hello World!</h1>
          </Col>
        </Row>
        <Row className="justify-content-center">{boxElements(numBox)}</Row>
        <Row className="justify-content-center ">
          <Button
            className="btn mr-2"
            variant="primary"
            onClick={() => setNumBox(numBox + 1)}
          >
            Add
          </Button>
          <Button
            className="btn mr-2"
            variant="primary"
            onClick={() => setNumBox(numBox - 1)}
          >
            Remove
          </Button>
          <Button
            className="btn"
            variant="primary"
            onClick={() => setNumBox(1)}
          >
            Reset
          </Button>
        </Row>
      </Container>
    </>
  );
};

ReactDOM.render(<App />, rootElement);
