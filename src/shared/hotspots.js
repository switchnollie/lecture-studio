import styled from "styled-components";

export const LightTextInputHotspot = styled.input`
  position: absolute;
  padding: 0px 10px;
  box-sizing: border-box;
  border-radius: 8px;
  border: none;
  color: #c0c2c7;
  font-size: 16px;
  background: transparent;

  &:focus,
  &:valid {
    background: #374166;
  }
`;

export const ButtonHotspot = styled.button`
  cursor: pointer;
  position: absolute;
  outline: none;
  background: transparent;
  border: none;
`;
