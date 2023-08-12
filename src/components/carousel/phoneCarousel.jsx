import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

function ControlledCarousel(props) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  const imges = props.data;

  if (imges) {
    return (
      <Carousel activeIndex={index} onSelect={handleSelect}>
        {imges.map((img) => (
          <Carousel.Item key={img}>
            <img
              className="testimonialImages d-block img_carousel"
              src={img}
              alt="phone img"
            />
          </Carousel.Item>
        ))}
      </Carousel>
    );
  }
}

export default ControlledCarousel;
