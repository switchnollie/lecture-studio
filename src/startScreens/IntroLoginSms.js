import React from "react";
import { Link } from "react-router-dom";
import { MockedBgSmall } from "../shared/mockedBgs";
import { ButtonHotspot, LightTextInputHotspot } from "../shared/hotspots";
import MockPicture from "../img/startscreen1.png";
import styled from "styled-components";
import ArrowButton from "../shared/ArrowButton";

const LoginButtonHotspot = styled(ButtonHotspot)`
  left: 755px;
  top: 522px;
  width: 87px;
  height: 34px;
  color: #74c5f3;
  font-size: 20px;
  font-weight: bold;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;

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

const CodeInput = styled(LightTextInputHotspot)`
  left: 266px;
  top: 313px;
  width: 394px;
  height: 35px;
`;

export default () => (
  <MockedBgSmall src={MockPicture}>
    <CodeInput type="text" required />
    <Link to="/intro/3">
      <LoginButtonHotspot>
        <span>OK</span>
        <ArrowButton />
      </LoginButtonHotspot>
    </Link>
  </MockedBgSmall>
);
