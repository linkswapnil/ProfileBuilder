import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import { Edit } from "./icons/Edit";
import { ProfileModal } from "./ProfileModal";
import { ServicesModal } from "./ServicesModal";
import TagsInput from "react-tagsinput";

import "react-tagsinput/react-tagsinput.css";
export class Profile extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      profileModalShow: false,
      servicesModalShow: false,
      editSkills: false,
      tags: [],
      skills: [
        "Weapons Handling",
        "Computer Hardware",
        "Administration",
        "Agile"
      ]
    };
  }
  handleChange(skills) {
    this.setState({ skills });
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
  onEditSkills() {
    this.setState({ editSkills: !this.state.editSkills });
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
                  {this.state.editSkills ? (
                    <span
                      class="icon save fas fa-save"
                      onClick={() => {
                        this.onEditSkills();
                      }}
                    />
                  ) : (
                    <Edit
                      onClose={this.closeProfileModal}
                      onEditClick={() => {
                        this.onEditSkills();
                      }}
                    />
                  )}
                </Card.Title>
                <Card.Text className="pl-3">
                  {!this.state.editSkills ? (
                    <Row>
                      {this.state.skills.map(s => {
                        return <div className="react-tagsinput-tag">{s}</div>;
                      })}
                    </Row>
                  ) : (
                    <Row>
                      <TagsInput
                        value={this.state.skills}
                        inputProps={{ placeholder: "Add a Skill.." }}
                        onChange={tags => {
                          this.handleChange(tags);
                        }}
                      />
                    </Row>
                  )}
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
