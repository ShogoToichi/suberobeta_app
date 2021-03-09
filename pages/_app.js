//page共通する設定をするファイル

import App from "next/app"
import React from "react"
import withReduxStore from "../redux/with-redux-store"
import { Provider } from "react-redux"
import { colors } from "../static/colors"
import { Color } from "../static/colors"
import { PersistGate } from "redux-persist/integration/react" // persist用
import store, { persistor } from "../redux/configureStore" // persist用
import style from "../static/Style"


class _App extends App {
  render() {
    // ↓ ここどういうことか分かってない，勝手にProviderでreduxStoreじゃなくてconfigureStoreのstore使ってるけどいいのかなんなのかわかってない
    const { Component, pageProps, reduxStore } = this.props
    return (
      <Color.Provider value={{ colors }}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            {style}
            <Component {...pageProps} />
          </PersistGate>
        </Provider>
      </Color.Provider>

    )
  }
}

export default withReduxStore(_App)
