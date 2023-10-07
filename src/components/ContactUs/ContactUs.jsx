import React from 'react';

import { BsTelegram, BsWhatsapp } from 'react-icons/bs';
import { FaViber } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import CallbackForm from '../CallbackForm/CallbackForm';

import {
  Section,
  Title,
  Wrap,
  ContactsWrap,
  ContactLink,
} from './ContactUs.styled';

const ContactUs = () => {
  return (
    <Section id="contact">
      <Title>Contact us</Title>
      <Wrap>
        <ContactsWrap>
          <ContactLink href="mailto:team@vnv.solutions">
            <MdEmail />
            team@vnv.solutions
          </ContactLink>
          <ContactLink
            href="https://t.me/vnv_solutions"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsTelegram />
            Telegram
          </ContactLink>
          <ContactLink
            href="https://www.whatsapp.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsWhatsapp />
            WhatsAPP
          </ContactLink>
          <ContactLink
            href="https://www.viber.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaViber />
            Viber
          </ContactLink>
        </ContactsWrap>
        <CallbackForm />
      </Wrap>
    </Section>
  );
};

export default ContactUs;
