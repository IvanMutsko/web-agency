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

export const Button = styled.button`
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

export const ButtonWant = styled.a`
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
