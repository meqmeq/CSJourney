import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

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

// List of boxes
// const boxElements = (num) => {
//   let boxList = [];
//   for (let i = 0; i < num; i++) {
//     boxList.push(animatedBox(i));
//   }
//   return boxList;
// };
const Box = (index) => {
  return (
    <>
      <Col className="test d-flex justify-content-center">
        <div>
          <Row>{box}</Row>
          <Row className="test d-flex justify-content-center">
            <h1>{index}</h1>
          </Row>
        </div>
      </Col>
    </>
  );
};

export default Box;
