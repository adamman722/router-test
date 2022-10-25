import React from "react";
import dog1 from "../img/dog1.jpg";
import dog2 from "../img/dog2.webp";
function Dogs() {
  return (
    <article>
      <img src={dog1} alt="" className="dogs" />
      <img src={dog2} alt="" className="dogs" />
    </article>
  );
}

export default Dogs;
