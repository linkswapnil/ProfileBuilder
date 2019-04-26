import React from "react";
import { Modal, Button } from "react-bootstrap";
export class ServicesModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      services: props.services
    };
  }
  handleCheck(s) {
    const services = this.state.services;
    const service = services.find(service => service.id === s.id);
    service.selected = !service.selected;
    this.setState({
      services
    });
  }
  render() {
    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Edit Services
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ul className="list-unstyled service-list">
            {this.state.services.map((s, i) => {
              return (
                <li>
                  <input
                    id={s.id}
                    onChange={() => {
                      this.handleCheck(s);
                    }}
                    defaultChecked={s.selected}
                    type="checkbox"
                  />
                  <label htmlFor={s.id}>{s.name}</label>
                </li>
              );
            })}
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button
            onClick={() => {
              this.props.updateServices(this.state.services);
              this.props.onHide();
            }}
            variant="primary"
          >
            Save
          </Button>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
