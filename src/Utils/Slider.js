import React from "react";
import Carousel from "react-bootstrap/Carousel";

const SliderComponent = ({ sliderParams = [] }) => {
  return (
    <div
      className="slider-container d-block w-100"
    >
      <Carousel>
        {sliderParams.map((item, index) => (
          <Carousel.Item key={index} interval={1500}>
            <img
              className="d-block w-100"
              src={item.url}
              alt="Image"
              style={{ borderRadius: 10 }}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default SliderComponent;
