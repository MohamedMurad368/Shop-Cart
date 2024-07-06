import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './Css/Slider.css';
import iphone from '../Assets/1.jpg';
import kid from '../Assets/kids.jpeg';

const Slider = () => {
  const [slidesPerView, setSlidesPerView] = useState(3);
  const [showButtons, setShowButtons] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1000) {
        setSlidesPerView(1);
        setShowButtons(false); // Hide buttons on smaller screens
      } else {
        setSlidesPerView(3);
        setShowButtons(true); // Show buttons on larger screens
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Set initial slidesPerView on component mount

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleMoveLeft = () => {
    if (swiper) {
      swiper.slidePrev();
    }
  };

  const handleMoveRight = () => {
    if (swiper) {
      swiper.slideNext();
    }
  };

  let swiper;

  return (
    <div>
      <Swiper
        spaceBetween={30}
        slidesPerView={slidesPerView}
        navigation={{
          prevEl: '.swiper-button-prev',
          nextEl: '.swiper-button-next',
        }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiperInstance) => (swiper = swiperInstance)}
        className="mySwiper"
      >
        <SwiperSlide><img src={iphone} alt="" /></SwiperSlide>
        <SwiperSlide><img src={kid} alt="" /></SwiperSlide>
        <SwiperSlide><img src={iphone} alt="" className="image-slider" /></SwiperSlide>
        <SwiperSlide><img src={iphone} alt="" className="image-slider" /></SwiperSlide>
        <SwiperSlide><img src={kid} alt="" className="image-slider" /></SwiperSlide>
      </Swiper>
      {showButtons && (
        <div>
          <div className="swiper-button-prev" onClick={handleMoveLeft}>Prev</div>
          <div className="swiper-button-next" onClick={handleMoveRight}>Next</div>
        </div>
      )}
    </div>
  );
};

export default Slider;
