import React from "react";


// bootstrap imports
import "bootstrap/dist/css/bootstrap.min.css";
import Image from 'react-bootstrap/Image'
// Modal Code
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

class BeastModal extends React.Component {
  render() {
    return (
      <>
        <Modal show={this.props.showModel} onHide={this.props.setShowModelFalse}>
          <Modal.Header closeButton>
            <div className="modal-title">
              <Modal.Title>{this.props.selectedBeast.title}</Modal.Title>
            </div>
          </Modal.Header>
          <Modal.Body>
            <Image src={this.props.selectedBeast.image_url} alt={this.props.selectedBeast.title} fluid />
            <div className="modal-description">
              <p>{this.props.selectedBeast.description}</p>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.setShowModelFalse}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default BeastModal;
