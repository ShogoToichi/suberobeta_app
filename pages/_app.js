//page共通する設定をするファイル

import App, {Container} from "next/app";
import React from "react";
import withReduxStore from "../redux/redux-store";
import { Provider } from "react-redux";
import {colors} from "../static/colors";
import {Color} from "../static/colors";

class _App extends App {
  render(){
    const {Component, pageProps, reduxStore} = this.props
    return (
      <Container>
        <Color.Provider value={{colors}}>
        <Provider store={reduxStore}>
          <Component {...pageProps}/>
        </Provider>
        </Color.Provider>
      </Container>
    )
  }
}

export default withReduxStore(_App)