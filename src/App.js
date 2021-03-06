import React, { Component, Fragment } from "react";
import styled from "styled-components";
import { Route, Redirect } from "react-router-dom";
import IntroLogin from "./startScreens/IntroLogin";
import IntroLoginSms from "./startScreens/IntroLoginSms";
import IntroHeadlines from "./startScreens/IntroHeadlines";
import IntroBold from "./startScreens/IntroBold";
import IntroThemes from "./startScreens/IntroThemes";
import IntroLoading from "./startScreens/IntroLoading";
import MainScreen from "./mainScreen/MainScreen";
import StartScreenBgPicture from "./img/turquoiseBlur.jpg";

const StartScreenBg = styled.div`
  background-image: url(${StartScreenBgPicture});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: relative;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
`;

const MainScreenBg = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #fff;
  box-sizing: border-box;
  box-shadow: inset 50.282vw 0 #1e2338;
`;

const ModalBg = styled.div`
  position: relative;
  width: 926.8090032154px;
  height: 638.4px;
  top: 50%;
  left: 50%;
  background-color: #1e2338;
  transform: translate(-50%, -50%) scale(0.8);
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  border-radius: 5px;
  overflow: hidden;
`;

const ProgressBar = styled.div`
  position: absolute;
  width: 890px;
  height: 8px;
  bottom: 26px;
  left: 20px;
  overflow: hidden;
  border-radius: 4px;

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #74c5f3;
    transform-origin: left center;
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    transform: scaleX(${props => props.progress});
  }
`;

const mapLocationToProgress = location => {
  let progress;
  switch (location.pathname) {
    case "/intro/1":
      progress = 0;
      break;
    case "/intro/2":
      progress = 0.2;
      break;
    case "/intro/3":
      progress = 0.4;
      break;
    case "/intro/4":
      progress = 0.6;
      break;
    case "/intro/5":
      progress = 0.8;
      break;
    case "/intro/6":
      progress = 1;
      break;
    default:
      progress = 0;
  }
  return progress;
};

class App extends Component {
  state = {
    currentTheme: "dark"
  };

  changeCurrentTheme = newTheme => this.setState({ currentTheme: newTheme });

  render() {
    const { currentTheme } = this.state;
    return (
      <Fragment>
        <Route exact path="/" render={() => <Redirect to="/intro/1" />} />
        <Route
          path="/intro"
          render={({ location }) => {
            const currentProgress = mapLocationToProgress(location);
            return (
              <StartScreenBg>
                <ModalBg>
                  <Route exact path="/intro/1" component={IntroLogin} />
                  <Route exact path="/intro/2" component={IntroLoginSms} />
                  <Route exact path="/intro/3" component={IntroHeadlines} />
                  <Route exact path="/intro/4" component={IntroBold} />
                  <Route
                    exact
                    path="/intro/5"
                    render={({ history }) => (
                      <IntroThemes
                        history={history}
                        currentTheme={currentTheme}
                        changeCurrentTheme={this.changeCurrentTheme}
                      />
                    )}
                  />
                  <Route
                    exact
                    path="/intro/6"
                    render={({ history }) => (
                      <IntroLoading
                        history={history}
                        currentTheme={currentTheme}
                      />
                    )}
                  />
                  <ProgressBar progress={currentProgress} />
                </ModalBg>
              </StartScreenBg>
            );
          }}
        />
        <Route
          exact
          path="/main"
          render={() => (
            <MainScreenBg>
              <MainScreen currentTheme={currentTheme} />
            </MainScreenBg>
          )}
        />
      </Fragment>
    );
  }
}

export default App;
