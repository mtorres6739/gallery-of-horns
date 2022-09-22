import React from "react";
// bootstrap imports
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Image from 'react-bootstrap/Image'
// import "../assets/css/style.css"


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
        
          <Image
            src={this.state.image_url}
            className="card-img-top"
            fluid
            onClick={(e) => { this.props.showModalTrue(this.props.id); }}
            style={{ width: '18rem', height: '15rem' }}
          />
       
        {/* <Card.Img as={Image} fluid={true} variant="top" src={this.state.image_url} onClick={(e) => {
              this.props.showModalTrue(this.props.id);
            }} /> */}
        
          <Card.Body 
            className="py-auto"
            style={{ width: '18rem', height: '15rem' }}>
            <Card.Title>{this.state.title}</Card.Title>
            <Card.Text>{this.state.description}</Card.Text>
            <Button 
              variant="primary" 
              onClick={this.handleClick}>Give me a vote!</Button>
          </Card.Body>
       

      </Card >

    );
  }
}

export default HornedBeast;

