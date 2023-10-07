import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  flex-direction: column;

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

export const Table = styled.table`
  border-collapse: collapse;
  font-family: sans-serif;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);

  margin-bottom: 20px;

  & thead {
    font-size: 24px;
    font-weight: 700;
    background-color: #000;

    & tr,
    & th {
      padding: 12px 15px;
      border: 1px solid #fff;
    }
  }

  & td:first-child {
    font-size: 16px;
    font-weight: 700;
    letter-spacing: 2px;

    @media screen and (min-width: 1024px) {
      font-size: 22px;
    }
  }

  & td:last-child {
    font-size: 14px;
    font-weight: 300;
    letter-spacing: 1px;
    line-height: 1.3;

    @media screen and (min-width: 1024px) {
      font-size: 20px;
    }
  }

  & td,
  & tr {
    padding: 12px 15px;
    border: 1px solid #fff;
  }
`;

export const Button = styled.button`
  width: 250px;
  padding: 10px 20px;
  margin-left: auto;
  border-radius: 5px;
  border: 1px solid #fff;
  background-color: transparent;

  color: #fff;
  font-weight: 700;
  font-size: 24px;

  transition: all 250ms ease-in;

  &:hover,
  &:focus {
    color: #03e9f4;
    border: 1px solid #03e9f4;
  }
`;
