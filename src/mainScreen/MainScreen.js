import React, { Component, Fragment } from "react";
import styled from "styled-components";
import { MockedBg } from "../shared/mockedBgs";
import { DarkTextareaHotspot } from "../shared/hotspots";
import MainScreenPicture from "../img/mainScreen.png";
import MainScreenLightPicture from "../img/mainScreenLight.png";
import PlusButton from "./PlusButton";
import ButtonMenu from "./ButtonMenu";

const RenderedDiv = styled.div`
  position: absolute;
  left: 51.94%;
  top: 46.1%;
  width: 46.4%;
  height: 53.3%;
  padding: 0 3.22%;
  box-sizing: border-box;
  border: none;
  background: transparent;
  color: #464646;
  outline: none;
  font-size: 1.46vh;
  font-family: "CMU Serif";
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
          <DarkTextareaHotspot
            value={currentText}
            onChange={this.handleTextareaChange}
            spellcheck="false"
          />
          <RenderedDiv>{currentText}</RenderedDiv>
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
