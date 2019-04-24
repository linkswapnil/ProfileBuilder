import React from "react";
import { Services } from "./Services";
import { Row, Col } from "react-bootstrap";
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
            <a href="#" class="btn btn-green">
              Get Started
            </a>
          </Col>
        </Row>
        <Services />
    </div>
  );
};
