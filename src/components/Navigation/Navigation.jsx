import React from 'react';

import { scrollToSection } from '../../utils/common';

import { NavList, NavItem, NavigateLink } from './Navigation.styled';

const Navigation = ({ closeMenu }) => {
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
            Contacts
          </NavigateLink>
        </NavItem>
      </NavList>
    </nav>
  );
};

export default Navigation;
