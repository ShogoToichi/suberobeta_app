// next.jsのReduxの設定ファイル?

import { Component } from "react";
import { initStore } from "./store";

const __NEXT_REDUX_STORE__ = "__NEXT_REDUX_STORE__"

function getOrCreateStore (initialState) {
  // SSR時(ブラウザ上の処理ではない時)にストアの中身をinitialStateに変更する
  if(!process.browser) {
    return initStore(initialState)
  } else {
    // window.__NEXT_REDUX_STORE__に値が入っていないとき(初回のクライアント側の処理時)だけStoreの中身をinitialStateに変更する．
    if (!window[__NEXT_REDUX_STORE__]) {
      window[__NEXT_REDUX_STORE__] = initStore(initialState)
    }
    return window[__NEXT_REDUX_STORE__]
  }
}

const withReduxStore = (App) => {
  return class AppWithRedux extends Component{

    static async getInitialProps (appContext) {
      // Get or Create the store with `undefined` as initialState
      // This allows you to set a custom default initialState
      const reduxStore = getOrCreateStore()

      // Provide the store to getInitialProps of pages
      appContext.ctx.reduxStore = reduxStore

      let appProps = {}
      if (typeof App.getInitialProps === "function"){
        appProps = await App.getInitialProps(appContext)
      }
      return {
        ...appProps,
        initialReduxState: reduxStore.getState()
      }
    }
    constructor (props) {
      super(props)
      this.reduxStore = getOrCreateStore(props.initialReduxState)
    }

    render (){
      return <App {...this.props} reduxStore={this.reduxStore} />
    }
  }
}

export default withReduxStore
