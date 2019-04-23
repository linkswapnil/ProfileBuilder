import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import { Edit } from "./icons/Edit";
import { ProfileModal } from "./ProfileModal";
export class Profile extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = { profileModalShow: false };
  }
  closeProfileModal() {
    this.setState({ profileModalShow: false });
  }
  onEditProfile() {
    this.setState({ profileModalShow: true });
  }
  render() {
    return (
      <div className="profile">
        <Row>
          <Col sm={10} xs={10}>
            <Card>
              <Card.Body>
                <Card.Title>
                  Profile
                  <Edit
                    onClose={this.closeProfileModal}
                    onEditClick={() => {
                      this.onEditProfile();
                    }}
                  />
                </Card.Title>
                <Card.Text>
                  <Row>FirstName : John</Row>
                  <Row>LastName : Smith</Row>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <ProfileModal
          show={this.state.profileModalShow}
          onHide={() => {
            this.closeProfileModal();
          }}
        />
        <Row>
          <Col sm={10} xs={10}>
            <Card>
              <Card.Body>
                <Card.Title>
                  Profile
                  <Edit
                    onClose={this.closeProfileModal}
                    onEditClick={() => {
                      this.onEditProfile();
                    }}
                  />
                </Card.Title>
                <Card.Text>
                  <Row>FirstName : John</Row>
                  <Row>LastName : Smith</Row>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}
