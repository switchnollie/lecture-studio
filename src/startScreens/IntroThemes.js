import React from "react";
import { MockedBgSmall } from "../shared/mockedBgs";
import MockPicture from "../img/startscreen4.png";
import styled from "styled-components";

const DarkThemeCardHotspot = styled.div`
  cursor: pointer;
  position: absolute;
  top: 132px;
  left: 23px;
  width: 436px;
  height: 436px;
  border-radius: 6px;
`;

const LightThemeCardHotspot = styled.div`
  cursor: pointer;
  position: absolute;
  top: 132px;
  left: 471px;
  width: 436px;
  height: 436px;
  border-radius: 6px;
`;

const SelectionBox = styled.div`
  position: absolute;
  pointer-events: none;
  box-sizing: border-box;
  top: 132px;
  left: 23px;
  width: 436px;
  height: 436px;
  border: 4px solid #74c5f3;
  border-radius: 6px;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  transform: translateX(
    ${props => (props.selectedCard === "dark" ? 0 : "448px")}
  );
`;

export default function IntroThemes({
  currentTheme,
  changeCurrentTheme,
  history
}) {
  function handleCardClick(newVal) {
    changeCurrentTheme(newVal);
    setTimeout(() => history.push("/intro/5"), 400);
  }
  return (
    <MockedBgSmall src={MockPicture}>
      <DarkThemeCardHotspot onClick={() => handleCardClick("dark")} />
      <LightThemeCardHotspot onClick={() => handleCardClick("light")} />
      <SelectionBox selectedCard={currentTheme} />
    </MockedBgSmall>
  );
}
