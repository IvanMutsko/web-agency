import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  gap: 30px;
  padding: 100px 30px;
`;

export const NavItem = styled.li``;

export const NavigateLink = styled(Link)`
  display: block;
  color: #fff;
  border: none;
  font-size: 24px;
  font-family: inherit;
  font-weight: 700;

  padding: 5px 20px;
  text-decoration: none;

  transition: transform 400ms ease;

  &:hover,
  &:focus {
    transform: scale(0.9);
  }
`;
