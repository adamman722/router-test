import { Routes, Route } from "react-router-dom";
import App from "./App";
import CatDescription from "./components/CatDescription";
import Cats from "./components/Cats";
import Dogs from "./components/Dogs";

export const MainRoutes = () => (
  <Routes>
    <Route path="/" element={<App />}>
      <Route path="/dogs" element={<Dogs />}></Route>
      <Route path="/cats" element={<Cats />}>
        <Route path="/cats/:id" element={<CatDescription />} />
      </Route>
    </Route>
  </Routes>
);
