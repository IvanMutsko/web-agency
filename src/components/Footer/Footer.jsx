import React from 'react';

import {
  BsTelegram,
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsTiktok,
} from 'react-icons/bs';

import { Section, Text, Wrap, Link } from './Footer.styled';

const Footer = () => {
  return (
    <Section>
      <Text>Follow our news and promotions</Text>
      <Wrap>
        <Link
          href="https://t.me/vnv_solutions"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsTelegram />
        </Link>
        <Link
          href="https://www.facebook.com/profile.php?id=100088433736254"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsFacebook />
        </Link>

        <Link
          href="https://www.linkedin.com/company/vnv-tech/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsLinkedin />
        </Link>

        <Link
          href="https://www.instagram.com/vnv_solutions/?igshid=MWI4MTIyMDE%3D"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsInstagram />
        </Link>

        <Link
          href="https://www.tiktok.com/@vnvsolutions"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsTiktok />
        </Link>
      </Wrap>
      <Link
        href="https://maps.app.goo.gl/fEwuAfEjVEUZqjGt5"
        target="_blank"
        rel="noopener noreferrer"
        className="address"
      >
        Karla Miklʹosha, 7 Lviv, Ukraine
      </Link>
    </Section>
  );
};

export default Footer;
