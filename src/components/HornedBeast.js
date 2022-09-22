import React from "react";
// bootstrap imports
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Image from 'react-bootstrap/Image'
import "../assets/css/style.css"


class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: this.props.description,
      title: this.props.title,
      image_url: this.props.image_url,
      horns: this.props.horns,
    }
  }

  // event handler
  handleClick = (e) => {
    this.setState({
      description: this.state.description + " ❤️️"
    });
  }

  render() {
    return (

      <Card style={{ width: '18rem' }} className="card-box mx-auto my-5">
        <div className="card-img-box">
          <Image
            src={this.state.image_url}
            className="card-img-top"
            fluid
            onClick={(e) => { this.props.showModalTrue(this.props.id); }}
          />
        </div>
        {/* <Card.Img as={Image} fluid={true} variant="top" src={this.state.image_url} onClick={(e) => {
              this.props.showModalTrue(this.props.id);
            }} /> */}
        <div className="card-body-box">
          <Card.Body className="py-auto">
            <Card.Title>{this.state.title}</Card.Title>
            <Card.Text>{this.state.description}</Card.Text>
            <div className="btn"><Button variant="primary" onClick={this.handleClick}>Give me a vote!</Button></div>
          </Card.Body>
        </div>

      </Card >

    );
  }
}

export default HornedBeast;

