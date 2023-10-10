import styled from 'styled-components';

export const ButtonClose = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  padding: 0;

  color: #242424;
  border: none;
  background-color: transparent;

  font-size: 30px;
  cursor: pointer;

  transition: color 300ms ease-in;

  &:hover {
    color: #03e9f4;
  }

  z-index: 4;
`;
