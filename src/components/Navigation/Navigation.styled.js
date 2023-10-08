import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  gap: 30px;
  padding: 100px 30px;

  @media screen and (min-width: 1024px) {
    padding: 150px 400px;
  }
`;

export const NavItem = styled.li``;

export const NavigateLink = styled(Link)`
  display: inline-block;
  color: #fff;
  border: none;
  font-size: 24px;
  font-family: inherit;
  font-weight: 700;

  padding: 5px 20px;
  text-decoration: none;

  transition: all 300ms ease-in;

  &:hover,
  &:focus {
    transform: scale(1.25);
    color: #03e9f4;
  }
`;
