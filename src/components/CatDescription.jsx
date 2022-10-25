import React from "react";

function CatDescription({ kitten }) {
  return (
    <div>
      <h3> Name: {kitten.name}</h3>
      <h3> Age: {kitten.age}</h3>
      <h3> Price: {kitten.price}</h3>
    </div>
  );
}

export default CatDescription;
