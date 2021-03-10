import React from "react";
import { Container, Image, Row, Col } from "react-bootstrap";
import profile from "../Pictures/profile.jpg";
import "./home.css";

function Home(props) {
  return (
    <>
      <Container>
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
            <br />
            <br />
            <p>
              My name is Marc, and in this the following pages, I've created a
              portfolio type website that will contain my CSJourney
            </p>

            <h3>Course currently being worked on :</h3>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Home;
