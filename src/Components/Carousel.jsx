import "react-responsive-carousel/lib/styles/carousel.min.css";
import React from 'react';
import { Carousel } from "react-responsive-carousel";
const CustomCarousel = ({ products }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Carousel showThumbs={false} dynamicHeight thumbWidth={'50px'}>
      {products.map(product => (
        <div key={product.id}>
            <img width={'50px'} height={'60px'} src={product.images[0]} alt={product.name} />
          <p>{product.title}</p>
        </div>
      ))}
    </Carousel>
  );
}
export default CustomCarousel;
