import React from "react";
import { Services } from "./Services";
import { Row, Col, Button } from "react-bootstrap";
export const Home = props => {
  return (
    <div className="App">
      <Row>
        <Col className="text-center">
          <h1 className="font-weight-light">
            Powerful <b>Documentation</b> and Help Center Profile Builder.
          </h1>
        </Col>
      </Row>
      <Row>
        <Col className="text-center">
          <Button href="#" className="btn-success">
            Get Started
          </Button>
        </Col>
      </Row>
      <Services />
    </div>
  );
};
