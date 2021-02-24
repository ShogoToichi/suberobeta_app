//next.jsのRedux利用に必要なファイル？

import App, {Container} from "next/app";
import React from "react";
import withReduxStore from "../lib/redux-store";
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';



class _App extends App {
  render(){
    const {Component, pageProps, store , persistor} = this.props
    return (
      <Container>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
          <Component {...pageProps}/>
          </PersistGate>
        </Provider>
      </Container>
    )
  }
}

export default withReduxStore(_App)
