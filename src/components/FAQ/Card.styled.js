import styled from 'styled-components';
import 'animate.css';

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  opacity: 0;
  padding: 30px;
  background-color: #000;
  border-radius: 0 40px 0 40px;
  width: 400px;

  font-weight: 300;
  letter-spacing: 2px;
  color: #fff;

  &.visible {
    opacity: 1;
  }
`;

export const ItemTitle = styled.h2`
  margin: 0 0 20px 0;
  padding-bottom: 5px;
  text-align: center;
  border-bottom: 1px solid #fff;
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const SubWrap = styled.div`
  opacity: 0;
  transition: opacity 300ms ease-in-out;

  &.show {
    opacity: 1;
  }
`;

export const Text = styled.p`
  &.answer {
    font-weight: 500;
  }
`;
