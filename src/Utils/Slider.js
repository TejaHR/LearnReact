import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "../styling/slider.scss";

const SliderComponent = ({ sliderParams = [] }) => {
  return (
    <div className="carousel-container m-2">
      <Carousel fade>
        {sliderParams.map((item, index) => (
          <Carousel.Item
            key={index}
            interval={150000}
            className="carousel-images"
          >
            <div>
              <img src={item.url} alt="Image" style={{ borderRadius: 10 }} width='100%'  height='auto' />
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default SliderComponent;
