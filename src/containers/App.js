import React from "react";

import Header from "../components/Header";
import Search from "../components/Search";
import Categories from "../components/Categories";
import Carousel from "../components/Carousel";
import CarouselItem from "../components/CarouselItem";
import Footer from "../components/Footer";
import useInitialState from "../Hooks/useInitialState";

import "./styles/App.scss";

const App = () => {
  const [videos] = useInitialState("http://localhost:3002/initialState");

  return (
    <React.Fragment>
      <Header />
      <Search />

      {Object.keys(videos).map(
        name => videos[name].length > 0 && (
            <Categories nombre={name}>
              <Carousel>
                {videos[name].map(videos => (
                  <CarouselItem {...videos}></CarouselItem>
                ))}
              </Carousel>
            </Categories>
          )
      )}

      <Footer />
    </React.Fragment>
  );
};

export default App;
