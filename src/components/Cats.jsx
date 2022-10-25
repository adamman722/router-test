import React from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import getKitten from "../CatDesp";
import PetDescription from "./PetDescription";

function Cats() {
  const params = useParams();
  console.log(params.id);
  const kittens = getKitten();

  const selectedKitten = () => {
    const foundKitten = kittens.find((kitty) => kitty.name === params.id);
    return (
      <div>
        <img src={foundKitten.photo} alt="" className="dogs" />
        <PetDescription pet={foundKitten} />
      </div>
    );
  };
  const petLinks = kittens.map((kitten) => {
    return (
      <Link to={kitten.name}>
        <img src={kitten.photo} alt="" className="dogs" />
        <h2>{kitten.name}</h2>
      </Link>
    );
  });

  return params.id === undefined ? (
    <article className="cat-display">{petLinks}</article>
  ) : (
    <div>{selectedKitten()}</div>
  );
}

export default Cats;
