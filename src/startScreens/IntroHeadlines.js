import React, { Component } from "react";
import { Link } from "react-router-dom";
import { MockedBgSmall } from "../shared/mockedBgs";
import MockPicture from "../img/startscreen2.png";
import { ButtonHotspot, LightTextInputHotspot } from "../shared/hotspots";
import styled from "styled-components";
import CheckIcon from "../img/checkIcon.svg";
import ArrowButton from "../shared/ArrowButton";

const NextButton = styled(ButtonHotspot)`
  left: 804px;
  top: 517px;
  width: 47px;
  height: 40px;
  svg {
    height: 34px;
    width: 34px;
  }
  &:active {
    svg path {
      fill: rgba(116, 197, 243, 0.7);
    }
    color: rgba(116, 197, 243, 0.7);
  }
`;

const ExerciseTextField = styled(LightTextInputHotspot)`
  left: 19px;
  top: 391px;
  width: 822px;
  height: 55px;
`;

const imageStyles = {
  position: "absolute",
  left: "858px",
  top: "398px",
  width: "42px",
  height: "43px"
};

class IntroHeadlines extends Component {
  state = {
    userInput: "",
    checkShown: false
  };

  handleInputChange = e => {
    const newVal = e.target.value;
    this.setState({ userInput: e.target.value });
    if (newVal.indexOf("# ") !== -1 && newVal.replace(/#/g, "").length > 1) {
      this.setState({ checkShown: true });
    } else {
      this.setState({ checkShown: false });
    }
  };
  render() {
    const { checkShown, userInput } = this.state;
    return (
      <MockedBgSmall src={MockPicture}>
        <ExerciseTextField
          type="text"
          onChange={this.handleInputChange}
          value={userInput}
          required
        />
        {checkShown && <img src={CheckIcon} style={imageStyles} alt="check" />}
        <Link to="/intro/4">
          <NextButton>
            <ArrowButton />
          </NextButton>
        </Link>
      </MockedBgSmall>
    );
  }
}

export default IntroHeadlines;
