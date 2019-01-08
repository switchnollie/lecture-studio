import React, { Component, Fragment } from "react";
import { MockedBg } from "../shared/mockedBgs";
import MainScreenPicture from "../img/mainScreen.png";
import MainScreenLightPicture from "../img/mainScreenLight.png";

export default class MainScreen extends Component {
  state = {
    currentText: "",
    buttonOpened: false
  };
  render() {
    const { currentTheme } = this.props;
    return (
      <Fragment>
        <MockedBg
          src={
            currentTheme === "dark" ? MainScreenPicture : MainScreenLightPicture
          }
          style={{ cursor: "text" }}
        />
      </Fragment>
    );
  }
}
