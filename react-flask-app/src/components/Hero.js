import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import { Row, Col, Container } from "react-bootstrap";
import bgImage from "../Pictures/Iceland/4.JPG";

const Hero = (props) => {
  return (
    <Jumbotron
      className="bg-transparent heroContainer"
      fluid
      style={{
        display: "flex",
        height: "100vh",
        justifyContent: "center",
        textAlign: "center",
        alignItems: "center",
      }}
    >
      <Container>
        <Row>
          <Col>
            {props.title && <h1>{props.title}</h1>}
            {props.subTitle && <h2>{props.subTitle}</h2>}

            {props.text && <h3>{props.text}</h3>}
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
};

export default Hero;
