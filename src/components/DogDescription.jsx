import React from "react";

function DogDescription({ doggo }) {
  return (
    <div>
      <h3> Name: {doggo.name}</h3>
      <h3> Age: {doggo.age}</h3>
      <h3> Price: {doggo.price}</h3>
    </div>
  );
}

export default DogDescription;
