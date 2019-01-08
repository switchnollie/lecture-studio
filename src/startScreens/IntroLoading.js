import React, { Component } from "react";
import { MockedBgSmall } from "../shared/mockedBgs";
import MockPicture from "../img/startscreen5.png";

class IntroLoading extends Component {
  componentDidMount() {
    setTimeout(() => this.props.history.push("/main"), 1000);
  }
  render() {
    return (
      <MockedBgSmall src={MockPicture}>
        <div class="lds-ellipsis">
          <div />
          <div />
          <div />
          <div />
        </div>
      </MockedBgSmall>
    );
  }
}

export default IntroLoading;
