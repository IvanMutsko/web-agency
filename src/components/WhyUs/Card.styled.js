import styled from 'styled-components';
import 'animate.css';

export const ListItem = styled.li`
  opacity: 0;
  padding: 30px;
  background-color: #000;
  border-radius: 40px 0 40px 0;
  width: 400px;

  font-weight: 300;
  letter-spacing: 2px;

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

export const Description = styled.p`
  margin: 0 0 25px 0;
`;

export const Button = styled.button`
  width: 12rem;
  cursor: pointer;
  outline: none;
  border: 0;
  vertical-align: middle;
  text-decoration: none;
  background: transparent;
  padding: 0;
  position: relative;
  display: inline-block;

  .circle {
    transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
    position: relative;
    display: block;
    margin: 0;
    width: 3rem;
    height: 3rem;
    background: #282936;
    border-radius: 1.625rem;

    .icon {
      transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
      position: absolute;
      top: 0;
      bottom: 0;
      margin: auto;
      background: #fff;

      &.arrow {
        transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
        left: 0.625rem;
        width: 1.125rem;
        height: 0.125rem;
        background: none;

        &::before {
          position: absolute;
          content: '';
          top: -0.25rem;
          right: 0.0625rem;
          width: 0.625rem;
          height: 0.625rem;
          border-top: 0.125rem solid #fff;
          border-right: 0.125rem solid #fff;
          transform: rotate(45deg);
        }
      }
    }
  }

  .button-text {
    transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 0.75rem 0;
    margin: 0 0 0 1.85rem;
    color: #03e9f4;
    font-weight: 700;
    line-height: 1.6;
    text-align: center;
    text-transform: uppercase;
  }

  &:hover {
    .circle {
      width: 100%;

      .icon {
        &.arrow {
          background: #fff;
          transform: translate(1rem, 0);
        }
      }
    }

    .button-text {
      color: #fff;
    }
  }
`;
