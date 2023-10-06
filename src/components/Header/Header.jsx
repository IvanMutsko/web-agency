import { useEffect, useState } from 'react';
import { HiMenu } from 'react-icons/hi';

import Navigation from '../Navigation/Navigation';
import logo from '../../assets/logo.png';

import {
  Section,
  LogoImage,
  BurgerMenu,
  BurgerBtn,
  Overlay,
} from './Header.styled';

const Header = () => {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  const handleBurgerClick = () => {
    setIsBurgerOpen(!isBurgerOpen);
  };

  useEffect(() => {
    document.body.classList.add('modal-open');

    const pressEsc = evt => {
      if (evt.code === 'Escape') {
        setIsBurgerOpen(false);
      }
    };

    window.addEventListener('keydown', pressEsc);

    return () => {
      window.removeEventListener('keydown', pressEsc);
    };
  }, []);

  return (
    <Section>
      <LogoImage src={logo} />

      <BurgerBtn onClick={handleBurgerClick}>
        <HiMenu />
      </BurgerBtn>

      <BurgerMenu className={isBurgerOpen ? 'open' : ''}>
        <Overlay>
          <Navigation closeMenu={handleBurgerClick} />
        </Overlay>
      </BurgerMenu>
    </Section>
  );
};

export default Header;
