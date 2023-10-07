import React from 'react';
import Slider from 'react-slick';

import { Section, Title, Image } from './Portfolio.styled';

import irenImg from '../../assets/projects/iren.jpg';
import volstinyImg from '../../assets/projects/volstiny.jpg';
import learnImg from '../../assets/projects/learn.jpg';

const Portfolio = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    lazyLoad: true,
    initialSlide: 2,
    centerMode: true,
    variableWidth: true,
    adaptiveHeight: true,
  };

  return (
    <Section id="portfolio">
      <Title>Portfolio</Title>

      <Slider {...settings}>
        <div>
          <a
            href="https://irenbanquethall.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={irenImg} alt="Restaurant IREN" />
          </a>
        </div>
        <div>
          <a
            href="https://www.learnitlive.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={learnImg} alt="Learn It Live" />
          </a>
        </div>
        <div>
          <a
            href="https://volstinyproduction.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={volstinyImg} alt="Volstiny production" />
          </a>
        </div>
      </Slider>
    </Section>
  );
};

export default Portfolio;
