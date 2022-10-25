import React from "react";

function PetDescription({ pet }) {
  return (
    <div>
      <h3> Name: {pet.name}</h3>
      <h3> Age: {pet.age}</h3>
      <h3> Price: {pet.price}</h3>
    </div>
  );
}

export default PetDescription;
