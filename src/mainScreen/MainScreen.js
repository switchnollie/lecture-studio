import React, { Component, Fragment } from "react";
import styled from "styled-components";
import { MockedBg } from "../shared/mockedBgs";
import { DarkTextareaHotspot, LightTextareaHotspot } from "../shared/hotspots";
import MainScreenPicture from "../img/mainScreen.png";
import MainScreenLightPicture from "../img/mainScreenLight.png";
import PlusButton from "./PlusButton";
import ButtonMenu from "./ButtonMenu";

const RenderedDiv = styled.div`
  position: absolute;
  left: 51.94%;
  top: 46.1%;
  width: 49.4%;
  height: 56.3%;
  padding: 0 3.22%;
  box-sizing: border-box;
  border: none;
  background: transparent;
  color: #464646;
  outline: none;
  font-size: 1.46vh;
  font-family: "CMU Serif";
`;

const RenderedDivLight = styled.div`
  position: absolute;
  left: 51.94%;
  top: 50.1%;
  width: 46.4%;
  height: 49.3%;
  padding: 0px 3.32%;
  box-sizing: border-box;
  border: none;
  background: transparent;
  color: #464646;
  outline: none;
  font-size: 1.46vh;
  font-family: "Fira Sans";
  font-weight: 400;
`;

export default class MainScreen extends Component {
  state = {
    currentText: "",
    buttonOpened: false
  };

  handleTextareaChange = e => {
    const newVal = e.target.value;
    this.setState({ currentText: newVal });
  };
  render() {
    const { currentText, buttonOpened } = this.state;
    const { currentTheme } = this.props;
    return (
      <Fragment>
        <MockedBg
          src={
            currentTheme === "dark" ? MainScreenPicture : MainScreenLightPicture
          }
          style={{ cursor: "text" }}>
          {currentTheme === "dark" ? (
            <DarkTextareaHotspot
              value={currentText}
              onChange={this.handleTextareaChange}
              spellcheck="false"
            />
          ) : (
            <LightTextareaHotspot
              value={currentText}
              onChange={this.handleTextareaChange}
              spellcheck="false"
            />
          )}
          {currentTheme === "dark" ? (
            <RenderedDiv>{currentText}</RenderedDiv>
          ) : (
            <RenderedDivLight>{currentText}</RenderedDivLight>
          )}
          <PlusButton
            onClick={() =>
              this.setState(state => ({ buttonOpened: !state.buttonOpened }))
            }
          />
          {buttonOpened && <ButtonMenu />}
        </MockedBg>
      </Fragment>
    );
  }
}
