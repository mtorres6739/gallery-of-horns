import React from "react";
import HornedBeast from "./components/HornedBeast";

// copy the imports!
import "bootstrap/dist/css/bootstrap.min.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

// import data.json
import data from "./assets/data.json";

class Main extends React.Component {
  render() {
    return (
      <Container>
        <Row>
      {data.map((beast, index) => {
        return (
          <HornedBeast
            key={index}
            title={beast.title}
            description={beast.description}
            image_url={beast.image_url}
            horns={beast.horns}
          />
        );
      })}
          
        </Row>
      </Container>
    );
  }
}


export default Main;
