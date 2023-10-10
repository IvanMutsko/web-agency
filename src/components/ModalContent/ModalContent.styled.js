import styled from 'styled-components';

export const Title = styled.h2`
  margin: 0 0 20px 0;
  text-align: center;
  color: #03e9f4;
  font-size: 28px;
  letter-spacing: 2px;
  font-weight: 500;

  @media screen and (min-width: 1024px) {
    font-size: 40px;
    margin-bottom: 40px;
  }
`;

export const Text = styled.p`
  font-size: 20px;
  padding: 0 20px 20px 20px;
  color: #03e9f4;
  font-weight: 700;
  letter-spacing: 2px;
`;
