import { useEffect, useState } from 'react';
import { HiMenu } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';

import Navigation from '../Navigation/Navigation';
import logo from '../../assets/logo.png';

import {
  Section,
  Wrap,
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

  const closeMenu = () => {
    setIsBurgerOpen(false);
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
      <Wrap>
        <LogoImage src={logo} />

        <BurgerBtn onClick={handleBurgerClick}>
          {!isBurgerOpen ? <HiMenu /> : <AiOutlineClose />}
        </BurgerBtn>

        <BurgerMenu className={isBurgerOpen ? 'open' : ''}>
          <Overlay onClick={closeMenu}>
            <Navigation closeMenu={handleBurgerClick} />
          </Overlay>
        </BurgerMenu>
      </Wrap>
    </Section>
  );
};

export default Header;
