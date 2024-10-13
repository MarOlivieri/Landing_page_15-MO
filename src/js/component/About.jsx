import React from "react";
import NavBar from "./NavBar.jsx";
import Footer from "./Footer.jsx";

const About = () => {
  return (
    <div>
      <NavBar />
      <div className="container mt-5">
        <h1 className="text-center">About Us</h1>
        <p className="text-center">
          Somos una empresa dedicada a ofrecer los mejores servicios de desarrollo web. 
          Nuestra misión es ayudar a nuestros clientes a tener éxito online.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default About;