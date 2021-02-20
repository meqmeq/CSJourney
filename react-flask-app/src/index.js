import React from "react";
import ReactDOM from "react-dom";
import { ReactSVG } from 'react-svg'
import {Spring} from 'react-spring/renderprops'
import 'bootstrap/dist/css/bootstrap.min.css';
import box from './components/Box'

// Import bootstrap components
import { Container, Row, Col } from "react-bootstrap";

const rootElement = document.getElementById("root");

// Variables


const animatedBox = <Spring
  from={{ opacity: 0 }}
  to={{ opacity: 1 }}>
  {props => 
  <>
  
  <Col className="test d-flex justify-content-center" style={props}>
      <div>
          <Row>{box}</Row>
        <Row className="test d-flex justify-content-center"><h1>4</h1></Row>
      </div>
      </Col>
  
  </>}
</Spring>

function App () {
    return (
        <Container fluid>
            <Row>
                <Col className="d-flex justify-content-center">
                    <h1>Hello World!</h1>
                </Col>
            </Row>
            <Row className="justify-content-center">        
                    {animatedBox}     
                    {animatedBox} 
                    {animatedBox}         
            </Row>
          
        </Container>
    
    ) 
    
}


ReactDOM.render(<App />, rootElement);
