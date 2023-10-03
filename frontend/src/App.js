import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Layout from "./pages/Layout.jsx";
import Main from "./pages/Main.jsx";
import Recepies from "./pages/Recepies.jsx";
import MeatAndSeafood from "./pages/MeatAndSeafood.jsx";
import Vegetarian from "./pages/Vegetarian.jsx";
import Cuisine from "./pages/Cuisine.jsx";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>;
            <Route index element={<Main />} />;
            <Route path="recepies" element={<Recepies />} />;
            <Route path="meatAndSeafood" element={<MeatAndSeafood />} />;
            <Route path="vegetarian" element={<Vegetarian />} />;
            <Route path="cuisine" element={<Cuisine />} />;
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
