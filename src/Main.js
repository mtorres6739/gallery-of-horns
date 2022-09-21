import React from "react";
import HornedBeast from "./components/HornedBeast";

// copy the imports!
import "bootstrap/dist/css/bootstrap.min.css";

// import data.json
import data from "./assets/data.json";

class Main extends React.Component {
  render() {
    return (
      <>
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
      </>
    );
  }
}


export default Main;
