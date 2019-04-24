import React from "react";
import "./Footer.scss";
import { Row, Container, Col } from "react-bootstrap";
export const Footer = props => {
  return (
    <div className="footer">
      <Row>
        <Col md={2} lg={2} xl={2} sm={3} xs={3} className="list text-center">
          <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Title</h5>
          <ul className="list-unstyled">
            <li>
              <a href="#!">Link 1</a>
            </li>
            <li>
              <a href="#!">Link 2</a>
            </li>
          </ul>
        </Col>
        <Col md={2} lg={2} xl={2} sm={3} xs={3} className="list text-center">
          <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Title</h5>
          <ul className="list-unstyled">
            <li>
              <a href="#!">Link 1</a>
            </li>
            <li>
              <a href="#!">Link 2</a>
            </li>
          </ul>
        </Col>
      </Row>
      <Row className="justify-center">
        <Col className="list text-center">
          © Copyright <strong>HP</strong>. All Rights Reserved
        </Col>
      </Row>
    </div>
  );
};
