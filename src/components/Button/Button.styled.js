import styled from 'styled-components';

export const Btn = styled.a`
  background: linear-gradient(-30deg, #387180 50%, #3c7a89 50%);
  padding: 20px 40px;
  margin: 12px;
  display: inline-block;
  -webkit-transform: translate(0%, 0%);
  transform: translate(0%, 0%);
  overflow: hidden;
  color: #fff;
  font-size: 24px;
  font-weight: 500;
  letter-spacing: 3px;
  text-align: center;
  text-transform: uppercase;
  text-decoration: none;
  -webkit-box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);

  &::before {
    content: '';
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    background-color: #03e9f4;
    opacity: 0;
    -webkit-transition: 0.2s opacity ease-in-out;
    transition: 0.2s opacity ease-in-out;
  }

  &:hover::before {
    opacity: 0.2;
  }

  & span {
    position: absolute;
  }

  & span:nth-child(1) {
    top: 0px;
    left: 0px;
    width: 100%;
    height: 2px;
    background: -webkit-gradient(
      linear,
      right top,
      left top,
      from(rgba(43, 8, 8, 0)),
      to(#03e9f4)
    );
    background: linear-gradient(to left, rgba(43, 8, 8, 0), #03e9f4);
    -webkit-animation: 2s animateTop linear infinite;
    animation: 2s animateTop linear infinite;
  }

  @keyframes animateTop {
    0% {
      -webkit-transform: translateX(100%);
      transform: translateX(100%);
    }
    100% {
      -webkit-transform: translateX(-100%);
      transform: translateX(-100%);
    }
  }

  & span:nth-child(2) {
    top: 0px;
    right: 0px;
    height: 100%;
    width: 2px;
    background: -webkit-gradient(
      linear,
      left bottom,
      left top,
      from(rgba(43, 8, 8, 0)),
      to(#03e9f4)
    );
    background: linear-gradient(to top, rgba(43, 8, 8, 0), #03e9f4);
    -webkit-animation: 2s animateRight linear -1s infinite;
    animation: 2s animateRight linear -1s infinite;
  }

  @keyframes animateRight {
    0% {
      -webkit-transform: translateY(100%);
      transform: translateY(100%);
    }
    100% {
      -webkit-transform: translateY(-100%);
      transform: translateY(-100%);
    }
  }

  & span:nth-child(3) {
    bottom: 0px;
    left: 0px;
    width: 100%;
    height: 2px;
    background: -webkit-gradient(
      linear,
      left top,
      right top,
      from(rgba(43, 8, 8, 0)),
      to(#03e9f4)
    );
    background: linear-gradient(to right, rgba(43, 8, 8, 0), #03e9f4);
    -webkit-animation: 2s animateBottom linear infinite;
    animation: 2s animateBottom linear infinite;
  }

  @keyframes animateBottom {
    0% {
      -webkit-transform: translateX(-100%);
      transform: translateX(-100%);
    }
    100% {
      -webkit-transform: translateX(100%);
      transform: translateX(100%);
    }
  }

  & span:nth-child(4) {
    top: 0px;
    left: 0px;
    height: 100%;
    width: 2px;
    background: -webkit-gradient(
      linear,
      left top,
      left bottom,
      from(rgba(43, 8, 8, 0)),
      to(#03e9f4)
    );
    background: linear-gradient(to bottom, rgba(43, 8, 8, 0), #03e9f4);
    -webkit-animation: 2s animateLeft linear -1s infinite;
    animation: 2s animateLeft linear -1s infinite;
  }

  @keyframes animateLeft {
    0% {
      -webkit-transform: translateY(-100%);
      transform: translateY(-100%);
    }
    100% {
      -webkit-transform: translateY(100%);
      transform: translateY(100%);
    }
  }
`;
