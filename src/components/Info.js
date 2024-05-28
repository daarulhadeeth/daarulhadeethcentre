import React from 'react';
import { Link } from 'react-router-dom';

import Writer from '../animatioins/Writer.';
import SlideIn from '../animatioins/SlideIn';
import styles from './modules/Info.module.css';

function Showcase() {
  return (
    <>
      <section className={`${styles.sectionOne} `}>
        <header>
          <SlideIn
            from="top"
            classNames="flex justify-center items-center flex-col"
          >
            <h1
              className={`${styles.h1} text-3xl lg:text-5xl md:text-4xl lg:leading-normal`}
            >
              Welcome to
              <br />
              {' '}
              <Writer
                texts={['Daaru-l-hadeeth', 'دار الحديث', 'Institute of Hadeeth']}
                wrapperClassName={styles.highlight}
              />
              <br />
              {' '}
              Center
            </h1>
            <h2 className="text-lg text-center">
              for Islamic and Technical Studies
            </h2>
            <br />
          </SlideIn>
          <SlideIn from="left " classNames="px-4 mx-auto">
            <p className=" text-sm lg:text-lg  ">
              Discover a network of Muslim students dedicated to
              {' '}
              <br className="hidden lg:inline" />
              building a better future for the Ummah.
            </p>
            <Link to="/registration">
              <button
                type="button"
                className="btn-green rounded-md my-8 mx-auto"
              >
                Enrol now
              </button>
            </Link>
          </SlideIn>
        </header>
      </section>
    </>
  );
}

export default Showcase;
