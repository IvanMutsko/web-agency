import styled from 'styled-components';

export const Section = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 40px;
  background-color: #000;
`;

export const Text = styled.p`
  font-size: 24px;
  margin-bottom: 20px;

  @media screen and (min-width: 1024px) {
    font-size: 28px;
  }
`;

export const Wrap = styled.div`
  display: flex;
  gap: 25px;
  flex-direction: column;

  @media screen and (min-width: 1024px) {
    flex-direction: row;
  }
`;

export const Link = styled.a`
  display: block;
  color: #fff;
  font-size: 34px;

  transition: color 300ms ease-in;

  &:hover {
    color: #03e9f4;
  }

  &.address {
    text-decoration: none;
    margin-top: 20px;
    font-size: 18px;
  }
`;
