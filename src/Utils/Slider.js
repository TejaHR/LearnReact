import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

const SliderComponent = ({ sliderParams = [] }) => {
    console.log(sliderParams);
    return (
        <div style={{
            display: 'block',
            width: 500,
            padding: 30,
        }}>
            <Carousel>
                {sliderParams.map((item, index) => ( 
                    <Carousel.Item key={index} interval={1500}>
                        <img className="d-block w-100"
                            src={item.url}
                            alt="Image"
                           style={{ borderRadius:10 }}
                             /> 
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );
};

export default SliderComponent;
