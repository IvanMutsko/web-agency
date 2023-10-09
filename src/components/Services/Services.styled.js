import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 40px;
  background-color: #c5c5c5;
`;

export const Title = styled.h2`
  margin: 0;
  text-align: center;

  font-size: 28px;
  font-weight: 700;
  color: #000;

  @media screen and (min-width: 1024px) {
    font-size: 40px;
    margin-bottom: 40px;
  }
`;

export const ServicesWrap = styled.div`
  background-color: #fff;
  border-radius: 10px;
  color: #000;

  @media screen and (min-width: 1024px) {
    font-size: 28px;

    width: 900px;
  }
`;

export const ButtonList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  padding: 20px;
  margin: 0;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;

  background-color: #000;
`;

export const Btn = styled.button`
  padding: 5px 10px;
  border: 1px solid transparent;
  border-radius: 15px;
  cursor: pointer;

  transition: background-color 300ms ease-out;

  &.current {
    background-color: #387180;
    color: #03e9f4;
  }

  &:hover {
    background-color: #3c7a89;
  }
`;

export const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  font-size: 18px;

  padding: 20px;

  @media screen and (min-width: 1024px) {
    font-size: 24px;
  }
`;

export const ContentTitle = styled.h3`
  font-weight: 700;
`;

export const ContentList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const ContentListItem = styled.li`
  font-weight: 700;
`;

export const ContentDescription = styled.p``;
