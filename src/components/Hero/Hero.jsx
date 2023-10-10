import React from 'react';
import ModalContent from '../ModalContent/ModalContent';
import ModalWindow from '../ModalWindow/ModalWindow';
import { Section, Title, OrderBtn } from './Hero.styled';

const Hero = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <Section>
        <Title>
          <span>VNV Solutions</span>: <br />
          Your vision, our code
        </Title>
        <OrderBtn type="button" onClick={openModal}>
          Order now
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </OrderBtn>
      </Section>
      <ModalWindow modalIsOpen={modalIsOpen} closeModal={closeModal}>
        <ModalContent />
      </ModalWindow>
    </>
  );
};

export default Hero;
