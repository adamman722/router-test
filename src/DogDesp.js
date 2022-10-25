import dog1 from "./img/dog1.jpg";
import dog2 from "./img/dog2.webp";

let doggos = [
  { name: "Hamburger", age: "ehhhhh", price: "$1.99", photo: dog1 },
  {
    name: "Lucy",
    age: "Wouldn't you like to know",
    price: "Price of a black lotus MTG Card",
    photo: dog2,
  },
];

export default function getDoggos() {
  return doggos;
}
