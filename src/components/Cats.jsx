import React from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import kitten1 from "../img/kitten1.jpg";
import kitten2 from "../img/kitten2.jpg";
import getKitten from "../CatDesp";
import CatDescription from "./CatDescription";

function Cats() {
  const params = useParams();
  console.log(params.id);

  const selectedKitten = () => {
    const kittens = getKitten();
    const foundKitten = kittens.find((kitty) => kitty.name === params.id);
    return (
      <div>
        <img src={foundKitten.photo} alt="" className="dogs" />
        <CatDescription kitten={foundKitten} />
      </div>
    );
  };

  return params.id === undefined ? (
    <article className="cat-display">
      <Link to="/cats/LeAnn">
        <img src={kitten1} alt="" className="dogs" />
        <h2>LeAnn</h2>
      </Link>
      <Link to="/cats/Kurtis">
        <img src={kitten2} alt="" className="dogs" />
        <h2>Kurtis</h2>
      </Link>
    </article>
  ) : (
    <div>{selectedKitten()}</div>
  );
}

export default Cats;
