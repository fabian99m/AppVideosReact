import React, { useEffect, useState } from "react";

import Header from "../components/Header";
import Search from "../components/Search";
import Categories from "../components/Categories";
import Carousel from "../components/Carousel";
import CarouselItem from "../components/CarouselItem";
import Footer from "../components/Footer";

import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";

import "./styles/App.scss";

const App = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {  
    fetch("http://localhost:3002/initialState")
      .then((response) => response.json())
      .then((data) => setVideos(data));

  },[]);

  console.log(videos);

  return (
    <React.Fragment>

      <Header />
      <Search />
      
      <Categories nombre="Mi lista">
        <Carousel>
          <CarouselItem url={img1}></CarouselItem>
          <CarouselItem url={img2}></CarouselItem>
          <CarouselItem url={img3}></CarouselItem>
          <CarouselItem url={img4}></CarouselItem>
        </Carousel>
      </Categories>

      <Categories nombre="Tendencias">
        <Carousel>
          <CarouselItem url={img1}></CarouselItem>
          <CarouselItem url={img2}></CarouselItem>
        </Carousel>
      </Categories>

      <Footer />
    </React.Fragment>
  );
};

export default App;
