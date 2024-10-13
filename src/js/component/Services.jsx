import React from "react";
import NavBar from "./NavBar.jsx";
import Footer from "./Footer.jsx";

const Services = () => {
  return (
    <div>
      <NavBar />
      <div className="container mt-5">
        <h1 className="text-center">Services</h1>
        <p className="text-center">
          Somos una empresa dedicada a ofrecer los mejores servicios de desarrollo web. 
          Nuestra misión es ayudar a nuestros clientes a tener éxito online.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Services;