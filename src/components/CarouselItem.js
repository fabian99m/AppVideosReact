import React from "react";

import "./styles/CarouselItem.css";

import lplay from '../assets/play.png'
import lplus from '../assets/plus.png'

const  CarouselItem = ({cover,year,contentRating,duration,title}) => {
  
  return (
     <div className="carousel-item">
      <img className="carousel-item__img" src={cover} alt="Imagen" />
      <div className="carousel-item__details">
        <div>
          <img className="img-play" src={lplay} alt="" />
          <img className="img-plus" src={lplus} alt="" />
        </div>
        <p>{title}</p>
        <p>{year} {contentRating} {duration} min </p>
      </div>
    </div> 
  );
};

export default CarouselItem;
