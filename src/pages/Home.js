import React from 'react';
import Faqs from '../components/Faqs';
import Info from '../components/Info';
import images from '../components/images';
import ImageSlider from './ImageSlider';
import Footer from '../components/Footer';

function Home() {
  return (
    <>
      <Info />
      <ImageSlider images={images} />
      <Faqs />
      <Footer />
    </>

  );
}

export default Home;
