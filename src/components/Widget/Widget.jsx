import React from 'react';
import Popup from 'reactjs-popup';

import { scrollToSection } from '../../utils/common';

import { ButtonWrap, ButtonPopUp, PopupContent } from './Widget.styled.js';

import logo from '../../assets/logo.png';

const Widget = () => {
  return (
    <Popup
      on="hover"
      trigger={
        <ButtonWrap>
          <ButtonPopUp
            to="#contact"
            onClick={() => {
              scrollToSection('contact');
            }}
          >
            Click!
          </ButtonPopUp>
        </ButtonWrap>
      }
      position="top right"
    >
      <PopupContent>
        <h2>Get a free consultation!</h2>
        <p>
          Write to us and our professionals will contact you for a free
          consultation. We will help you solve any issues related to website
          development or online marketing.
        </p>
        <img src={logo} alt="logo" />
      </PopupContent>
    </Popup>
  );
};

export default Widget;
