import React from 'react';
import CallbackForm from '../CallbackForm/CallbackForm';

import { Title, Text } from './ModalContent.styled';

const ModalContent = () => {
  return (
    <>
      <Title>Order the service</Title>
      <Text>
        Write to us and we will contact you within 5 minutes and advise you!
      </Text>
      <CallbackForm />
    </>
  );
};

export default ModalContent;
