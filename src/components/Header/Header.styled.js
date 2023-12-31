import styled from 'styled-components';

export const Section = styled.header`
  border-bottom: 1px solid #ffffff42;
`;

export const Wrap = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-left: auto;
  margin-right: auto;
  padding: 20px 60px;

  @media screen and (min-width: 1024px) {
    width: 1024px;
  }
`;

export const LogoImage = styled.img`
  width: 80px;
`;

export const BurgerBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #ffffff42;
  color: #ffffff99;
  border: none;
  border-radius: 30%;
  height: 50px;
  width: 50px;
  font-size: 40px;
  cursor: pointer;

  transition: all 300ms ease-in;

  &:hover {
    background-color: #ffffff89;
    color: #03e9f4;
  }

  z-index: 4;
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  z-index: 2;

  overflow: auto;
`;

export const BurgerMenu = styled.div`
  display: none;

  &.open {
    display: block;
  }

  position: absolute;
  width: 100%;
  top: 100%;
  left: 0;

  z-index: 3;
`;
