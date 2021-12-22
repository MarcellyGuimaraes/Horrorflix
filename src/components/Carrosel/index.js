import React from "react";
import ReactOwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import options from "./options";

function Carrosel({ children }) {
  return (
    <div>
      <ReactOwlCarousel className="owl-carousel owl-theme" {...options}>
        {children}
      </ReactOwlCarousel>
    </div>
  );
}

export default Carrosel;
