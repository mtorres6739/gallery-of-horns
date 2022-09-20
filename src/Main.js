import React from "react";
import HornedBeast from "./components/HornedBeast";

class Main extends React.Component {
  render() {
    return (
      <>
        <h1>Animals on Display!</h1>
        <HornedBeast />
        <HornedBeast />
      </>
    );
  }
}

export default Main;