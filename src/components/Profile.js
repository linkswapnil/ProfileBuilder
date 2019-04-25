import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import { Edit } from "./icons/Edit";
import { ProfileModal } from "./ProfileModal";
import { ServicesModal } from "./ServicesModal";
export class Profile extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      profileModalShow: false,
      servicesModalShow: false
    };
  }
  closeProfileModal() {
    this.setState({ profileModalShow: false });
  }
  onEditProfile() {
    this.setState({ profileModalShow: true });
  }
  closeServicesModal() {
    this.setState({ servicesModalShow: false });
  }
  onEditServices() {
    this.setState({ servicesModalShow: true });
  }
  render() {
    return (
      <div>
        <Row>
          <Col>
            <Card className="m-1">
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
                <Card.Text className="pl-3">
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
          <Col>
            <Card className="m-1">
              <Card.Body>
                <Card.Title>
                  Services
                  <Edit
                    onClose={this.closeProfileModal}
                    onEditClick={() => {
                      this.onEditServices();
                    }}
                  />
                </Card.Title>
                <Card.Text className="pl-3">
                  <Row>FirstName : John</Row>
                  <Row>LastName : Smith</Row>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card className="m-1">
              <Card.Body>
                <Card.Title>
                  Skills
                  <Edit
                    onClose={this.closeProfileModal}
                    onEditClick={() => {
                      this.onEditServices();
                    }}
                  />
                </Card.Title>
                <Card.Text className="pl-3">
                  <Row>
                    <div className="tag">
                      <span class="icons">
                        <li className="list-unstyled"
                          aria-hidden="true"
                          type="plus-icon"
                          size="small"
                        >
                          <svg
                            viewBox="0 0 24 24"
                            width="24px"
                            height="24px"
                            x="0"
                            y="0"
                            preserveAspectRatio="xMinYMin meet"
                            class="artdeco-icon"
                            focusable="false"
                          >
                            <path
                              d="M14,9H9v5H7V9H2V7H7V2H9V7h5V9Z"
                              class="small-icon"
                            />
                          </svg>
                        </li>
                      </span>
                      Skill 1sbadjkjksdahkashd
                    </div>
                    <div className="tag">Skill 2</div>
                    <div className="tag">Skill 3</div>
                    <div className="tag">Skill 4</div>
                    <div className="tag">Skill 5</div>
                    <div className="tag">Skill 6</div>
                  </Row>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <ServicesModal
          show={this.state.servicesModalShow}
          onHide={() => {
            this.closeServicesModal();
          }}
        />
      </div>
    );
  }
}
