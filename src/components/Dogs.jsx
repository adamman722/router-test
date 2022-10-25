import React from "react";
import dog1 from "../img/dog1.jpg";
import dog2 from "../img/dog2.webp";
import { Link, useParams } from "react-router-dom";
import getDoggos from "../DogDesp";
import PetDescription from "./PetDescription";

function Dogs() {
  const params = useParams();
  const doggos = getDoggos();
  const selectedDoggos = () => {
    const foundDoggo = doggos.find((doggo) => doggo.name === params.id);
    return (
      <div>
        <img src={foundDoggo.photo} alt="" className="dogs" />
        <PetDescription pet={foundDoggo} />
      </div>
    );
  };

  const petLinks = doggos.map((doggo) => {
    return (
      <Link to={doggo.name}>
        <img src={doggo.photo} alt="" className="dogs" />
        <h2>{doggo.name}</h2>
      </Link>
    );
  });

  return params.id === undefined ? (
    <article className="cat-display">{petLinks}</article>
  ) : (
    <div>{selectedDoggos()}</div>
  );
}

export default Dogs;
