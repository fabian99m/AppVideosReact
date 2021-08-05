import React from "react";

import "./styles/CarouselItem.css";

import lplay from '../assets/play.png'
import lplus from '../assets/plus.png'

const CarouselItem = ({url}) => {
  return (
    <div className="carousel-item">
      <img className="carousel-item__img" src={url} alt="Imagen" />
      <div className="carousel-item__details">
        <div>
          <img className="img-play" src={lplay} alt="" />
          <img className="img-plus" src={lplus} alt="" />
        </div>
        <p>Titulo descriptivo</p>
        <p>2019 16+ 1: 114 mts </p>
      </div>
    </div>

  );
};

export default CarouselItem;
