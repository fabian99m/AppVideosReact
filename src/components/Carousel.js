import React from "react";

import "./styles/Carousel.css";

const Carousel = ({ children }) => {
  return (
    <section class="carousel">
      <div class="carousel__container">
        {children}
      </div>
    </section>
  );
};

export default Carousel;
