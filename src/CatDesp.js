import kitten2 from "./img/kitten2.jpg";
import kitten1 from "./img/kitten1.jpg";

let catDescription = [
  {
    name: "Kurtis",
    age: "2 Months",
    price: "Too much for your blood",
    photo: kitten2,
  },
  {
    name: "LeAnn",
    age: "Ageless",
    price: "Your soul",
    photo: kitten1,
  },
];

export default function getKitten() {
  return catDescription;
}
