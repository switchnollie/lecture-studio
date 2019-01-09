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

export const DarkTextareaHotspot = styled.textarea`
  position: absolute;
  left: 30px;
  top: 401px;
  width: 645px;
  height: 390px;
  padding: 0px 40px;
  box-sizing: border-box;
  border: none;
  background: transparent;
  color: #c0c2c7;
  outline: none;
  font-size: 11.35px;
  font-family: "Fira Code";
`;

export const ButtonHotspot = styled.button`
  cursor: pointer;
  position: absolute;
  outline: none;
  background: transparent;
  border: none;
`;
