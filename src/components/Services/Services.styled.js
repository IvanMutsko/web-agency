import styled from 'styled-components';

export const Section = styled.section`
  padding: 40px;
  background-color: #c5c5c5;
`;

export const Title = styled.h2`
  margin: 0;
  text-align: center;

  font-size: 28px;
  color: #000;
`;

export const ServicesWrap = styled.div`
  background-color: #fff;
  border-radius: 10px;
  color: #000;
`;

export const ButtonList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 5px;
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
`;

export const ContentTitle = styled.h3`
  margin: 0;
  font-weight: 700;
`;

export const ContentList = styled.ul`
  margin: 0;
`;

export const ContentListItem = styled.li`
  font-weight: 700;
`;

export const ContentDescription = styled.p`
  margin: 0;
`;
