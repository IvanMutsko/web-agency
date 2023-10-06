import styled from 'styled-components';

import bgImage from '../../assets/background.jpg';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  padding: 40px;
  min-height: 400px;

  background-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.4),
      rgba(0, 0, 0, 0.4)
    ),
    url(${bgImage});
  background-size: cover;
  background-repeat: no-repeat;
`;

export const Title = styled.h1`
  font-size: 34px;
  font-weight: 300;
  text-align: center;

  & span {
    font-weight: 700;
  }
`;

export const OrderBtn = styled.a`
  font-size: 20px;

  --body-color: #393937;
  --accent-color: #03e9f4;
  --hover-color: #00b7bf;
  --white-color: #fff;
  --box-shadow: 0 0 5px #00b7bf, 0 0 10px #00b7bf, 0 0 25px #00b7bf,
    0 0 30px #00b7bf;

  position: relative;
  display: inline-block;
  padding: 20px 30px;
  color: var(--accent-color);
  text-transform: uppercase;
  overflow: hidden;
  letter-spacing: 4px;
  transition: 0.5s;
  text-decoration: none;

  & span {
    position: absolute;
    display: block;
  }

  & span:nth-child(1) {
    top: 0;
    left: -100%;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, transparent, var(--accent-color));
    animation: btn-anim1 2s linear infinite;
  }
  @keyframes btn-anim1 {
    0% {
      left: -100%;
    }
    50%,
    100% {
      left: 100%;
    }
  }

  & span:nth-child(2) {
    top: -100%;
    right: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(180deg, transparent, var(--accent-color));
    animation: btn-anim2 2s linear infinite;
    animation-delay: 0.5s;
  }
  @keyframes btn-anim2 {
    0% {
      top: -100%;
    }
    50%,
    100% {
      top: 100%;
    }
  }

  & span:nth-child(3) {
    bottom: 0;
    right: -100%;
    width: 100%;
    height: 2px;
    background: linear-gradient(270deg, transparent, var(--accent-color));
    animation: btn-anim3 2s linear infinite;
    animation-delay: 1s;
  }
  @keyframes btn-anim3 {
    0% {
      right: -100%;
    }
    50%,
    100% {
      right: 100%;
    }
  }

  & span:nth-child(4) {
    bottom: -100%;
    left: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(360deg, transparent, var(--accent-color));
    animation: btn-anim4 2s linear infinite;
    animation-delay: 1.5s;
  }

  @keyframes btn-anim4 {
    0% {
      bottom: -100%;
    }
    50%,
    100% {
      bottom: 100%;
    }
  }

  &:hover {
    background-color: var(--hover-color);
    color: var(--white-color);
    border-radius: 5px;
    box-shadow: var(--box-shadow);
  }
`;
