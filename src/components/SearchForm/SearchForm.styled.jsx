import styled from 'styled-components';

export const Form = styled.form`
  width: 350px;
  margin: 20px auto;

  position: relative;
`;

export const SearchFormButton = styled.button`
  width: 48px;
  height: 48px;

  font-size: 20px;
  font-weight: bold;
  color: #2a58b1;
  position: absolute;

  top: 0;
  right: 0;
`;

export const Field = styled.input`
  width: 100%;
  height: 28px;

  border-style: none;
  border-radius: 10px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  background-color: transparent;

  padding: 10px;
  font-size: 18px;
  outline: none;
  letter-spacing: 0.06em;
  font-weight: 200;

  transition: all 0.5s ease-in-out;

  cursor: pointer;

  &::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;

export const ErrorText = styled.p`
  color: red;
  margin: 0;
  text-align: center;
`;
