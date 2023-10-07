import styled from 'styled-components';

export const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  border: 1px solid #fff;
  padding: 30px;
`;

export const Title = styled.h4`
  font-size: 20px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;

  font-size: 18px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 10px;
  font-weight: 500;
  letter-spacing: 2px;
`;

export const RadioInput = styled.input`
  margin-right: 5px;

  cursor: pointer;
`;

export const TextInput = styled.input`
  padding: 10px 20px;
  width: 100%;
  border-radius: 5px;
`;

export const TextArea = styled.textarea`
  padding: 10px 20px;
  width: 100%;
  border-radius: 5px;
  min-height: 170px;
  resize: none;
`;

export const Button = styled.button`
  width: 150px;
  padding: 10px 20px;
  margin-left: auto;
  border-radius: 5px;
  border: 1px solid #fff;
  background-color: transparent;

  color: #fff;
  font-weight: 700;
  font-size: 24px;

  transition: all 250ms ease-in;

  &:hover,
  &:focus {
    color: #03e9f4;
    border: 1px solid #03e9f4;
  }
`;
