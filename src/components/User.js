import React from "react";
import "./User.scss";
import { Nav, Row, Tab, Col, Container } from "react-bootstrap";
import { Orders } from "./Orders";
import { Profile } from "./Profile";
import { Payments } from "./Payments";
export const User = props => {
  return (
    <Tab.Container id="left-tabs" defaultActiveKey="first">
      <div className="user mt-4">
        <Row>
          <Col sm={2} xs={4} md={2} lg={1} xl={1}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="first">Profile</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Order</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="third">Payments</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={10} xs={8} md={10} lg={11} xl={11}>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <Profile />
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <Orders />
              </Tab.Pane>
              <Tab.Pane eventKey="third">
                <Payments />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </div>
    </Tab.Container>
  );
};
