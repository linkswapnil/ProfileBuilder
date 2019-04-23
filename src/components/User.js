import React from "react";
import "./User.scss";
import { Nav, Row, Tab, Col } from "react-bootstrap";
import { Orders } from "./Orders";
import { Profile } from "./Profile";
import { Payments } from "./Payments";
export const User = props => {
  return (
    <div className="profile container mt-1 mb-1">
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col sm={4} xs={4}>
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
          <Col sm={8} xs={8}>
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
      </Tab.Container>
    </div>
  );
};
