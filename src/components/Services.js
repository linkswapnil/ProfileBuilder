import React from "react";
import { Card, Button, Row, Col} from "react-bootstrap";
export const Services = props => {
  return (
    <div className="mt-5">
      <Row>
        <Col xs={12} sm={12} md={12}>
          <div className="text-center">
            <h2>Our Services</h2>
          </div>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={3} lg={3} xl={3} sm={12} xs={12}>
          <Card className="m-1">
            <Card.Body>
              <Card.Title>Services 1</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} lg={3} xl={3} sm={12} xs={12}>
          <Card className="m-1">
            <Card.Body>
              <Card.Title>Services 2</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} lg={3} xl={3} sm={12} xs={12}>
          <Card className="m-1">
            <Card.Body>
              <Card.Title>Services 3</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} lg={3} xl={3} sm={12} xs={12}>
          <Card className="m-1">
            <Card.Body>
              <Card.Title>Services 4</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};
