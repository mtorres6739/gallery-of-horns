import React from "react";
import HornedBeast from "./components/HornedBeast";
import BeastModal from "./components/BeastModal";

// copy the imports!

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// import data.json
import data from "./assets/data.json";


class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showModel: false,
      selectedBeast: {},
    };
  }

  setShowModelTrue = (key) => {
    this.setState({ showModel: true });

    const filteredBeast = data.filter((beast) => {
      return beast._id === key;
    });
    this.setState({ selectedBeast: filteredBeast[0] });
  }

  setShowModelFalse = () => {
    this.setState({ showModel: false });
  }



  render() {
    return (
      <Container>
        <Row>
          {data.map((beast, index) => {
            return (
              <Col>
              <HornedBeast
                key={beast._id}
                id={beast._id}
                title={beast.title}
                description={beast.description}
                image_url={beast.image_url}
                horns={beast.horns}
                showModalTrue={this.setShowModelTrue}
              />
              </Col>
            );
          })}


          <BeastModal
            showModel={this.state.showModel}
            setShowModelFalse={this.setShowModelFalse}
            selectedBeast={this.state.selectedBeast}
          />

        </Row>
      </Container>
    );
  }
}


export default Main;
