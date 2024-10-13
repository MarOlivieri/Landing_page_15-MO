import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Include your styles
import "../styles/index.css";

// Import components
import Home from "./component/home.jsx";
import About from "./component/About.jsx"; // Nuevo componente About
import Services from "./component/Services.jsx"; // Nuevo componente About

// Define la aplicación principal con rutas
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} /> {/* Ruta para la nueva página About */}
        <Route path="/Services" element={<Services />} /> {/* Ruta para la nueva página About */}
      </Routes>
    </Router>
  );
};

// Render the App
ReactDOM.render(<App />, document.querySelector("#app"));