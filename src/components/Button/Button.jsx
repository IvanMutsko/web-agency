import React from 'react';

import { Btn } from './Button.styled';

const Button = ({ text }) => {
  return (
    <Btn>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      {text}
    </Btn>
  );
};

export default Button;
