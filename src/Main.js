import React from "react";
import HornedBeast from "./components/HornedBeast";
import BeastModal from "./components/BeastModal";

// copy the imports!

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// import data.json
import data from "./assets/data.json";
import BeastForm from "./components/BeastForm";


class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showModel: false,
      selectedBeast: {},
      displayedBeast: data,
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


  // handle form submit for DESCRIPTION
  handleFormSubmit = (event) => {
    event.preventDefault();

    // const searchTerm = event.target.description.value;
    // const filteredBeast = data.filter((beast) => beast.description.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()));
    // this.setState({ displayedBeast: filteredBeast });

    const searchHorns = event.target.horns.value;
    const filteredHorns = data.filter((beast) => beast.horns === parseInt(searchHorns));
    this.setState({ displayedBeast: filteredHorns });
  };

// handle form submit for HORNS
  // handleFormSubmitHorns = (event) => {
  //   event.preventDefault();
  //   const searchHorns = event.target.horns.value;
  //   const filteredHorns = data.filter((beast) => beast.horns === parseInt(searchHorns));
  //   this.setState({ displayedBeast: filteredHorns });
  // };

  render() {
    return (
      <>
        <BeastForm handleFormSubmit={this.handleFormSubmit} />



        <Container>
          <Row>
            {/* {data.map((beast, index) => { */}
            {this.state.displayedBeast.map((beast) => {
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
      </>
    );
  }
}


export default Main;
