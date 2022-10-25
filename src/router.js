import { Routes, Route } from "react-router-dom";
import App from "./App";
import PetDescription from "./components/PetDescription";
import Cats from "./components/Cats";
import Dogs from "./components/Dogs";

export const MainRoutes = () => (
  <Routes>
    <Route path="/" element={<App />}>
      <Route path="/dogs" element={<Dogs />}>
        <Route path="/dogs/:id" element={<PetDescription />} />
      </Route>
      <Route path="/cats" element={<Cats />}>
        <Route path="/cats/:id" element={<PetDescription />} />
      </Route>
    </Route>
  </Routes>
);
