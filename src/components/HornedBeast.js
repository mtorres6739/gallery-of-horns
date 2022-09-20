import React from "react";
// bootstrap imports
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";




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
  handleClick = () => {
    this.setState({
      description: this.state.description + " ❤️️"});
  }

  render() {
    return (

      <Card style={{ width: '18rem' }} className="mx-auto my-5">
        <Card.Img variant="top" src={this.state.image_url} />
        <Card.Body>
          <Card.Title>{this.state.title}</Card.Title>
          <Card.Text>
            {this.state.description}
          </Card.Text>
          <Button variant="primary" onClick={this.handleClick}>Go somewhere</Button>
        </Card.Body>
      </Card>

    );
  }
}

export default HornedBeast;

