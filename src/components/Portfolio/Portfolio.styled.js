import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 40px;
  background-color: #242424;
`;

export const Title = styled.h2`
  margin: 0 0 20px 0;
  text-align: center;

  font-size: 28px;

  @media screen and (min-width: 1024px) {
    font-size: 40px;
    margin-bottom: 40px;
  }
`;

export const Wrap = styled.div`
  width: 400px;
  @media screen and (min-width: 1024px) {
    width: 900px;
  }
`;

export const Image = styled.img`
  width: 360px;

  @media screen and (min-width: 768px) {
    width: 500px;
  }

  @media screen and (min-width: 1024px) {
    width: 800px;
  }
`;
