import React from 'react';

import { NavList, NavItem, NavigateLink } from './Navigation.styled';

const Navigation = ({ closeMenu }) => {
  const scrollToSection = id => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav>
      <NavList>
        <NavItem>
          <NavigateLink
            to="#services"
            onClick={() => {
              scrollToSection('services');
              closeMenu();
            }}
          >
            Services
          </NavigateLink>
        </NavItem>
        <NavItem>
          <NavigateLink
            to="#portfolio"
            onClick={() => {
              scrollToSection('portfolio');
              closeMenu();
            }}
          >
            Portfolio
          </NavigateLink>
        </NavItem>
        <NavItem>
          <NavigateLink
            to="#contact"
            onClick={() => {
              scrollToSection('contact');
              closeMenu();
            }}
          >
            ContactUs
          </NavigateLink>
        </NavItem>
      </NavList>
    </nav>
  );
};

export default Navigation;
