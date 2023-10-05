import logo from '../../assets/logo.png';

import {
  Section,
  LogoImage,
  NavList,
  NavItem,
  NavigateLink,
} from './Header.styled';

const Header = () => {
  const scrollToSection = id => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Section>
      <LogoImage src={logo} />
      <nav>
        <NavList>
          <NavItem>
            <NavigateLink
              to="#services"
              onClick={() => scrollToSection('services')}
            >
              Services
            </NavigateLink>
          </NavItem>
          <NavItem>
            <NavigateLink
              to="#portfolio"
              onClick={() => scrollToSection('portfolio')}
            >
              Portfolio
            </NavigateLink>
          </NavItem>
          <NavItem>
            <NavigateLink
              to="#contact"
              onClick={() => scrollToSection('contact')}
            >
              ContactUs
            </NavigateLink>
          </NavItem>
        </NavList>
      </nav>
    </Section>
  );
};

export default Header;
