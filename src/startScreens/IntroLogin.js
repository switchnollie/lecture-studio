import React from "react";
import { Link } from "react-router-dom";
import { MockedBgSmall } from "../shared/mockedBgs";
import { ButtonHotspot, LightTextInputHotspot } from "../shared/hotspots";
import MockPicture from "../img/startscreen1.png";
import styled from "styled-components";
import ArrowButton from "../shared/ArrowButton";

const LoginButtonHotspot = styled(ButtonHotspot)`
  left: 685px;
  top: 522px;
  width: 157px;
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

const PasswordInput = styled(LightTextInputHotspot)`
  left: 266px;
  top: 312px;
  width: 394px;
  height: 35px;
`;

const EmailInput = styled(LightTextInputHotspot)`
  left: 266px;
  top: 262px;
  width: 394px;
  height: 35px;
`;

export default () => (
  <MockedBgSmall src={MockPicture}>
    <EmailInput type="text" required />
    <PasswordInput type="password" required />
    <Link to="/intro/2">
      <LoginButtonHotspot>
        <span>Anmelden</span>
        <ArrowButton />
      </LoginButtonHotspot>
    </Link>
  </MockedBgSmall>
);
