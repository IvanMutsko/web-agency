import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 40px;
  background-color: #c5c5c5;
`;

export const Title = styled.h2`
  margin: 0 0 20px 0;
  text-align: center;

  font-size: 28px;
  color: #000;

  @media screen and (min-width: 1024px) {
    font-size: 40px;
    margin-bottom: 40px;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-bottom: 30px;
  list-style: none;

  @media screen and (min-width: 1024px) {
    font-size: 22px;

    width: 900px;
  }
`;
