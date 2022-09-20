import React from "react";
import HornedBeast from "./components/HornedBeast";

const animalArray =
  [{
    "_id": 1,
    "image_url": "https://img.freepik.com/free-vector/cute-monster-kid-cartoon-vector-icon-illustration-monster-holiday-icon-concept-isolated-premium-vector-flat-cartoon-style_138676-3995.jpg?w=740&t=st=1663633510~exp=1663634110~hmac=c3fcf0c65974c6053fe65812a57947376359f9b49f43454e9e8678893ca7e53e",
    "title": "Horned Animal 1",
    "description": "A unicorn and a narwhal nuzzling their horns",
    "keyword": "narwhal",
    "horns": 1
  },

  {
    "_id": 2,
    "image_url": "https://img.freepik.com/premium-vector/cute-alien-unicorn-meditating-yoga-cartoon-vector-icon-illustration-science-sport-icon-isolated_138676-5900.jpg?w=740",
    "title": "Horned Animal 2",
    "description": "Parent rhino with two babies",
    "keyword": "rhino",
    "horns": 2
  },

  {
    "_id": 3,
    "image_url": "https://img.freepik.com/free-vector/cute-cat-unicorn-flying-cartoon-illustration-animal-wildlife-icon-concept_138676-1909.jpg?w=740&t=st=1663634825~exp=1663635425~hmac=17f30630365bf60534c07104b2f42fda54eb7838aed70fe334961a33ca8c9300",
    "title": "Horned Animal 3",
    "description": "Someone wearing a very silly unicorn head mask",
    "keyword": "unicorn",
    "horns": 1
  }]

class Main extends React.Component {
  render() {
    return (
      <>

        {animalArray.map((animal) => {

          return (
            <>
              <HornedBeast
                title={animal.title}
                image_url={animal.image_url}
                description={animal.description}
              />
            </>
          )
        })}
      </>
    );
  }
}

export default Main;
