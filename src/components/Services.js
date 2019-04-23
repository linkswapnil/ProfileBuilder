import React from "react";
import { Card, Button } from "react-bootstrap";
export const Services = props => {
  return (
    <div id="services" class="services-area area-padding">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-sm-12 col-xs-12">
            <div className="section-headline services-head text-center">
              <h2>Our Services</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <Card className="col-md-3 col-sm-3 col-xs-3">
            <Card.Body>
              <Card.Title>Services 1</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          <Card className="col-md-3 col-sm-3 col-xs-3">
            <Card.Body>
              <Card.Title>Services 2</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          <Card className="col-md-3 col-sm-3 col-xs-3">
            <Card.Body>
              <Card.Title>Services 3</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          <Card className="col-md-3 col-sm-3 col-xs-3">
            <Card.Body>
              <Card.Title>Services 4</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};
