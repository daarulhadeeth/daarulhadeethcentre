/* eslint-disable */
import React from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

import Slider from 'react-slick';

const CustomSlider = ({ config, children }) => {
  const NextArrow = (props) => (
    <div>
      <HiChevronRight
        className={`${props.className} ${
          config?.type === 'testimonial' ? 'hidden' : 'block'
        }`}
        onClick={props.onClick}
      />
    </div>
  );
  const PrevArrow = (props) => (
    <HiChevronLeft
      className={`${props.className}  ${
        config?.type === 'testimonial' ? 'hidden' : 'block'
      }`}
      onClick={props.onClick}
    />
  );

  const settings = {
    dots: config?.type !== 'testimonial',
    infinite: true,
    slidesToShow: config?.slidesToShow,
    slidesToScroll: 1,
    initialSlide: 0,
    speed: config?.type === 'testimonial' ? 4000 : 1500,
    autoplay: config?.type === 'testimonial',
    autoplaySpeed: 0,
    cssEase: config?.type === 'testimonial' ? 'linear' : 'ease-in-out',
    swipeToSlide: true,

    responsive: [
      {
        breakpoint: 1124,
        settings: {
          slidesToShow: config?.slidesToShow,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: config?.type === 'testimonial' ? 2 : 1,
          slidesToScroll: 2,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 610,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <Slider {...settings} className={`slider ${config?.type} `}>
      {children}
    </Slider>
  );
};

export default CustomSlider;
