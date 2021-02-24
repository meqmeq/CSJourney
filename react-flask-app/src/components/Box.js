import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Spring } from "react-spring/renderprops";
import "bootstrap/dist/css/bootstrap.min.css";

const box = (
  <svg width="125" height="125">
    <defs>
      <linearGradient id="MyGradient">
        <stop stopColor="pink" />
        <stop offset="99.9%" stopColor="#ECE6EC" />
      </linearGradient>
    </defs>
    <rect
      fill="url(#MyGradient)"
      x="10"
      y="10"
      width="100"
      height="100"
      rx="15"
    />
  </svg>
);

const animatedBox = (index) => {
  return (
    <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
      {(props) => (
        <>
          <Col className="test d-flex justify-content-center" style={props}>
            <div>
              <Row>{box}</Row>
              <Row className="test d-flex justify-content-center">
                <h1>{index + 1}</h1>
              </Row>
            </div>
          </Col>
        </>
      )}
    </Spring>
  );
};

const boxElements = (num) => {
  let boxList = [];
  for (let i = 0; i < num; i++) {
    boxList.push(animatedBox(i));
  }
  return boxList;
};

export default boxElements;
