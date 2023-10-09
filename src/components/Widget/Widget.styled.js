import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const PopupContent = styled.div`
  font-size: 20px;

  width: 300px;
  border-radius: 5px;
  border: 2px solid #03e9f4;
  padding: 15px;

  background-color: #242424;
  color: #fff;

  & h2 {
    margin-bottom: 20px;
  }

  & img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 150px;
  }

  & p {
    letter-spacing: 3px;
    font-weight: 300;
  }
`;

export const ButtonWrap = styled.div`
  position: fixed;
  bottom: 40px;
  right: 40px;
`;

export const ButtonPopUp = styled(Link)`
  display: block;
  position: relative;
  width: 100px;
  height: 100px;
  background: linear-gradient(to bottom, hotpink 0%, tomato 100%);
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.3);
  border-radius: 50%;
  line-height: 100px;
  text-align: center;
  text-decoration: none;
  color: white;

  &::before {
    display: block;
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: #fff;
    opacity: 0;
    content: '';
    animation: pulse 1s infinite;
  }

  &:hover::before {
    animation: none;
    opacity: 0.4;
    transform: scale(1.3);
  }

  @keyframes pulse {
    from {
      transform: scale(1);
      opacity: 0.7;
    }
    to {
      transform: scale(1.3);
      opacity: 0;
    }
  }
`;
