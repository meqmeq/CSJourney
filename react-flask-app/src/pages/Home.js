import React from "react";
import {
  Container,
  Image,
  Row,
  Col,
  ListGroup,
  ProgressBar,
} from "react-bootstrap";
import profile from "../Pictures/profile.jpg";
import "./home.css";
import { useSpring, animated } from "react-spring";
import { Spring } from "react-spring/renderprops";

function Home(props) {
  return (
    <>
      <Spring
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
        config={{ duration: 1000 }}
      >
        {(props) => (
          <Container style={props}>
            <Row style={{ padding: 10 }}>
              <Col>
                <Image
                  src={profile}
                  className="image"
                  style={{ width: 360, height: "auto" }}
                />
              </Col>
              <Col className="intro">
                <h2>Why Hello there Fellow Journeyman!</h2>

                <p>
                  My name is Marc, and in this the following pages, I've created
                  a portfolio type website that will contain my CSJourney
                </p>

                <h3>Courses currently being worked on :</h3>
                <ListGroup as="ul" variant="flush">
                  <ListGroup.Item>
                    <h4>Hardvard's CS50x</h4>
                    <p>Currently at the final Project (This Website)</p>
                    <ProgressBar animated now={95} label="11 / 12" />
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <h4>
                      Problem Solving with Algorithms and Data Structures using
                      Python
                    </h4>
                    <p>Currently at Chapter 5 out of 8 of the course</p>
                    <ProgressBar animated now={(5 / 8) * 100} label="5 / 8" />
                  </ListGroup.Item>
                </ListGroup>
              </Col>
            </Row>
          </Container>
        )}
      </Spring>
    </>
  );
}

export default Home;
