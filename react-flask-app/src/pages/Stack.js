import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import Box from "../components/Box";
import { useTransition, animated } from "react-spring";
import "../App.css";

// // Import bootstrap components
import { Container, Row, Col } from "react-bootstrap";

let index = 1;
// // Variables
const Stack = () => {
  const [listBox, setListBox] = useState([
    {
      key: index,
      item: Box(index),
    },
  ]);

  const transitions = useTransition(listBox, (item) => item.key, {
    from: { opacity: 0, transform: "translate3d(40px, 0,0)" },
    enter: { opacity: 1, transform: "translate3d(0,0px,0)" },
    leave: { opacity: 0, transform: "translate3d(40px,0,0)" },
  });

  const [showButton, setShowButton] = useState(false);
  const listItems = transitions.map(({ item, props, key }) => (
    <animated.div key={key} style={props}>
      {item.item}
    </animated.div>
  ));
  // console.log(listBox);
  // console.log(index);
  useEffect(() => {
    if (listBox.length > 1) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  });
  return (
    <>
      <Container>
        <div style={{ height: "700" }} className="WhiteDiv">
          <Row style={{ height: " auto" }}>
            <Col className="d-flex justify-content-center">
              <h1>Basic Stack</h1>
            </Col>
          </Row>
          <Row
            className="justify-content-center"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "auto",
            }}
          >
            {listItems}
          </Row>
          <Row className="justify-content-center " style={{ height: " auto" }}>
            {/* Add Button */}
            <Button
              className="btn mr-2"
              variant="primary"
              onClick={() => {
                index++;
                setListBox((oldList) => [
                  ...oldList,
                  {
                    key: index,
                    item: Box(index),
                  },
                ]);
              }}
            >
              Push
            </Button>
            {/* Remove Button */}

            <Button
              style={{ display: showButton ? "block" : "none" }}
              className="btn mr-2"
              variant="primary"
              onClick={() => {
                setListBox((oldList) =>
                  oldList.filter((d) => {
                    return d.key !== oldList.length;
                  })
                );
                index--;
              }}
            >
              Pop
            </Button>
            {/* reset Button */}
            <Button
              className="btn"
              variant="primary"
              onClick={() =>
                setListBox(() => {
                  index = 1;
                  return [
                    {
                      key: index,
                      item: Box(index),
                    },
                  ];
                })
              }
            >
              Reset
            </Button>
          </Row>
        </div>
      </Container>
    </>
  );
};

// const App = () => {
//   return <h1>Hello World!</h1>;
// };

export default Stack;
