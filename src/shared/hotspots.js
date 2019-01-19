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
  left: 2%;
  top: 50.03%;
  width: 46.3%;
  height: 48%;
  padding: 0px 3%;
  box-sizing: border-box;
  border: none;
  background: transparent;
  color: #c0c2c7;
  outline: none;
  font-size: 1.46vh;
  font-family: "Fira Code";
`;

export const LightTextareaHotspot = styled.textarea`
  position: absolute;
  left: 2%;
  top: 54.73%;
  width: 46.3%;
  height: 44.2%;
  padding: 0px 3%;
  box-sizing: border-box;
  border: none;
  background: transparent;
  color: #000;
  outline: none;
  font-size: 1.56vh;
  font-family: "Fira Code";
`;

export const ButtonHotspot = styled.button`
  cursor: pointer;
  position: absolute;
  outline: none;
  background: transparent;
  border: none;
`;
