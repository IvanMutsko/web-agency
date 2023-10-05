import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Section = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 20px 60px;
`;

export const LogoImage = styled.img`
  width: 100px;
`;

export const NavList = styled.ul`
  display: flex;
  list-style: none;
  gap: 30px;
`;

export const NavItem = styled.li``;

export const NavigateLink = styled(Link)`
  display: block;
  color: #fff;
  border: none;
  font-size: 24px;
  font-family: inherit;
  font-weight: 700;

  text-decoration: none;

  transition: transform 400ms ease-out;

  &:hover,
  &:focus {
    transform: scale(1.2);
  }
`;
