import React, { useState } from "react";
import {
  Container,
  Image,
  Row,
  Col,
  ListGroup,
  ProgressBar,
  Card,
  Button,
} from "react-bootstrap";
import profile from "../Pictures/profile.jpg";
import Pic1 from "../Pictures/Iceland/1.JPG";
import Pic2 from "../Pictures/Iceland/2.JPG";
import Pic3 from "../Pictures/Iceland/3.JPG";
import "./home.css";
import { useSpring, animated, useTrail, a } from "react-spring";
import { Spring } from "react-spring/renderprops";

let box = document.querySelector("div");

let width = box.clientWidth;
let height = box.clientHeight;

const calc = (x, y) => [(y - height) / 30, x + width / 20, 1.08];
const trans = (x, y, s) =>
  `perspective(680px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const skillList = ["Python", "JSX/React", "C/C++", ""];

const About = () => {
  const [img, setImg] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 1, tension: 100, friction: 8 },
  }));

  const [skills, setSkills] = useState(false);

  const trail = useTrail(skillList.length, {
    mass: 5,
    tension: 2000,
    friction: 200,
    opacity: skills ? 1 : 0,
    x: skills ? 0 : 40,
    height: skills ? 100 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  });

  return (
    <>
      <Spring
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
        config={{ duration: 1000 }}
      >
        {(props) => (
          <Container className="whiteContainer" fluid style={props}>
            <Row style={{ padding: 10 }} mx-auto className="h-100">
              <Col
                className="Image"
                style={{
                  textAlign: "center",
                  alignItems: "center",
                  textAlignVertical: "center",
                  margin: "auto",
                }}
              >
                <div>
                  <animated.div
                    className="test"
                    onMouseMove={({ clientX: x, clientY: y }) =>
                      setImg({ xys: calc(x, y) })
                    }
                    onMouseLeave={() => setImg({ xys: [0, 0, 1] })}
                    style={{
                      transform: img.xys.interpolate(trans),
                    }}
                  >
                    <Image
                      src={profile}
                      style={{
                        width: 400,
                        height: "auto",
                      }}
                    />
                  </animated.div>
                </div>
              </Col>
              <Col
                style={{
                  textAlign: "center",
                  alignItems: "center",
                  textAlignVertical: "center",
                  margin: "auto",
                }}
              >
                <body>
                  <h2>Why Hello there Fellow Journeyman!</h2>
                  <p>
                    My name is Marc, and in this the following pages, I've
                    created a portfolio type website that will contain my
                    CSJourney
                  </p>
                  <h2>Courses currently being worked on :</h2>
                </body>
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
            {/* First Section */}
            <Row className="h-auto darkRow">
              <Col
                style={{
                  textAlign: "center",
                }}
              >
                <h1>Skills</h1>
              </Col>
            </Row>
            <Row className="darkRow" style={{ height: 650 }}>
              <Col
                onClick={() => setSkills((skills) => !skills)}
                style={{
                  textAlign: "center",
                  alignItems: "center",
                  margin: "auto",
                }}
              >
                {skills === false && <h1>CLICK ME</h1>}
                {trail.map(({ x, height, ...rest }, index) => (
                  <a.div
                    key={skillList[index]}
                    className="trails-text"
                    style={{
                      ...rest,
                      transform: x.interpolate(
                        (x) => `translate3d(0,${x}px,0)`
                      ),
                    }}
                  >
                    <a.div style={{ height }}>{skillList[index]}</a.div>
                  </a.div>
                ))}
              </Col>
            </Row>
            <Container fluid className="whiteContainer"></Container>
          </Container>
        )}
      </Spring>
    </>
  );
};

export default About;
