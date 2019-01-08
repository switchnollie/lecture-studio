import React from "react";
import { Link } from "react-router-dom";
import { MockedBgSmall } from "../shared/mockedBgs";
import { ButtonHotspot, LightTextInputHotspot } from "../shared/hotspots";
import MockPicture from "../img/startscreen1.png";
import styled from "styled-components";

const LoginButtonHotspot = styled(ButtonHotspot)`
  left: 680px;
  top: 522px;
  width: 162px;
  height: 34px;
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
      <LoginButtonHotspot />
    </Link>
  </MockedBgSmall>
);
