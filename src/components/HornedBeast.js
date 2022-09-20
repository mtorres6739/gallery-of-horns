import React from "react";




class HornedBeast extends React.Component {
  render() {
    return (
      <>

        <h2>{this.props.title}</h2>
        <img src={this.props.image_url} alt={this.props.title} title={this.props.title} />
        <p>{this.props.description}</p>
      </>
    );
  }
}

export default HornedBeast;

// Images are from https://www.freepik.com/vectors/animal
