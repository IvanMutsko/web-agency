import React from 'react';
import { Section, Title, OrderBtn } from './Hero.styled';

const Hero = () => {
  return (
    <Section>
      <Title>
        <span>VNV Solutions</span>: <br />
        Your vision, our code
      </Title>
      <OrderBtn href="#">
        Order now
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </OrderBtn>
    </Section>
  );
};

export default Hero;
