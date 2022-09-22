import React from "react";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { Container } from "react-bootstrap";


class BeastForm extends React.Component {


  render() {
    return (
      <>
        <Container>
          <Form onSubmit={this.props.handleFormSubmit}>
          
            <Form.Group className="mb-3" controlId="horns">
              <Form.Select aria-label="Default select example">
                <option>Open to search # of Horns</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
                <option value="100">TONS</option>
              </Form.Select>
            </Form.Group>

            {/* <Form.Group className="mb-3" controlId="description" >
            <Form.Label>Search Description</Form.Label>
            <Form.Control placeholder="Start typing to search descriptions" />
          </Form.Group> */}
     
          <Button variant="primary" type="submit">
            Search
          </Button>
        </Form>
        </Container>
      </>
    );
  }
}

export default BeastForm;
