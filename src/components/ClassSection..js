import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

import CustomSlider from '../Slider/Index';

import data from '../data/project-data';
import SlideIn from '../animatioins/SlideIn';

function ClassSection() {
  return (
    <section
      className="flex flex-col justify-evenly sm:grid grid-cols-2 content-center sm:items-center gap-[10rem] bg-white h-[45rem] sm:h-[40rem] px-6 md:px-12"
      style={{
        rowGap: 0,
      }}
    >
      <div className=" text-center sm:text-left text-[1rem] md:text-lg  flex-wrap w-full">
        <SlideIn from="left">
          <h2 className=" font-bold text-3xl md:text-4xl">Our Projects</h2>
        </SlideIn>
        <SlideIn from="right" classNames="my-4 leading-normal">
          <p>
            Explore our past and current projects, including events,
            initiatives, and collaborations, and learn more about our mission
            and impact.
          </p>
        </SlideIn>
      </div>
      <SlideIn
        from="left"
        classNames="order-3 col-1 row-1 mx-auto sm:mx-0 mt-4 sm:mt-0 g "
      >
        <Link to="/projects">
          <button type="button" className="btn-green order-3 ">
            View projects
            {' '}
            <ArrowRightIcon className="h-6 w-4 ml-2 font-bold" />
          </button>
        </Link>
      </SlideIn>
      <SlideIn from="right" classNames="row-span-2">
        <CustomSlider config={{ slidesToShow: 1, type: 'project' }}>
          {data.map((item) => (
            <div className=" w-1/2 max-h-[500px] object-cover" key={item.id}>
              <img src={item.img.src} alt={item.img.alt} className="h-full" />
            </div>
          ))}
        </CustomSlider>
      </SlideIn>
    </section>
  );
}

export default ClassSection;
