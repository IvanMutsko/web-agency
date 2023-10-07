import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 40px;
  background-color: #000;
`;

export const Title = styled.h2`
  margin: 0;
  text-align: center;
  margin-bottom: 20px;

  font-size: 28px;
  color: #fff;

  @media screen and (min-width: 1024px) {
    font-size: 40px;
    margin-bottom: 40px;
  }
`;

export const Wrap = styled.div`
  @media screen and (min-width: 1024px) {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    gap: 60px;
  }
`;

export const ContactsWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 20px;

  @media screen and (min-width: 1024px) {
    gap: 40px;
  }
`;

export const ContactLink = styled.a`
  display: flex;
  gap: 10px;

  color: inherit;
  text-decoration: none;
  font-size: 20px;
  letter-spacing: 2px;

  transition: color 250ms ease-in;

  &:hover,
  &:focus {
    color: #03e9f4;
  }

  @media screen and (min-width: 1024px) {
    font-size: 30px;
    gap: 20px;
  }
`;
