import React from "react";
import "./Footer.scss";
import { Row, Container, Col } from "react-bootstrap";
export const Footer = props => {
  return (
    <div className="footer">
      <Row>
        <Col md={2} lg={2} xl={2} sm={3} xs={3}>
          <div className="ml-3">
            <h5 className="font-weight-bold mt-2">Title 1</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#!">Link 1</a>
              </li>
              <li>
                <a href="#!">Link 2</a>
              </li>
            </ul>
          </div>
        </Col>
        <Col md={2} lg={2} xl={2} sm={3} xs={3}>
          <div className="ml-3">
            <h5 className="font-weight-bold mt-2">Title 2</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#!">Link 1</a>
              </li>
              <li>
                <a href="#!">Link 2</a>
              </li>
            </ul>
          </div>
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
