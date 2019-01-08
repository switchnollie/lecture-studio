import styled from "styled-components";

export const MockedBgSmall = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border-radius: 5px;
  background-image: url(${props => props.src});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
`;

export const MockedBg = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background-image: url(${props => props.src});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
`;
