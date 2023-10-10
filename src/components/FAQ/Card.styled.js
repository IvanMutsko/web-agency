import styled from 'styled-components';
import 'animate.css';

export const WrapForScroll = styled.div`
  padding: 20px;
`;

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
  position: relative;
  margin: 0 0 20px 0;
  padding-bottom: 5px;
  text-align: center;
  border-bottom: 1px solid #fff;

  & span {
    position: absolute;
    left: 0;
    bottom: -2.3em;
    color: #c5c5c5;
    font-weight: 300;
    font-size: 14px;
    letter-spacing: 3px;
  }
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const SubWrap = styled.div`
  opacity: 0;
  height: 0;
  transition: all 500ms ease-in-out;

  &.show {
    opacity: 1;
    height: 200px;
  }
`;

export const Text = styled.p`
  font-size: 18px;
  &.answer {
    font-size: 22px;
    font-weight: 500;
    margin-bottom: 20px;
  }
`;
