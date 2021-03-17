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
import Hero from "../components/Hero";
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

const Home = () => {
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
          <>
            <Container fluid style={props}>
              <Hero
                title="Marc Quilatan"
                text="Porfolio of mine"
                subTitle="A CS Journeyman"
              />
              <Container fluid className="whiteContainer">
                <Row>
                  <Col style={{ textAlign: "center", margin: "auto" }}>
                    <h1>BlogPost</h1>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Card>
                      <Card.Img variant="top" src={Pic1} />
                      <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                      </Card.Body>
                    </Card>
                    <br />
                  </Col>
                  <Col>
                    <Card>
                      <Card.Img variant="top" src={Pic2} />
                      <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col>
                    <Card>
                      <Card.Img variant="top" src={Pic3} />
                      <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Container>
            </Container>
          </>
        )}
      </Spring>
    </>
  );
};

export default Home;
