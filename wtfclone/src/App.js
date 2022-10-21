import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import header from "./Header/Header";
import Home from "./Home/Home";
import Gym from "./Gyms/Gym";

function App() {
  return (
    <div>
      <BrowserRouter>
        <header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gym" element={<Gym />} />
        </Routes>
      </BrowserRouter>
      <footer />
    </div>
  );
}

export default App;
