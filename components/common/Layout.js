//HeaderとFooterをまとめたファイル
//props.childrenはLayoutタグで挟まれた要素
//このファイルにHTMLの<Head>を書く

import React, { Component } from "react"
import Head from "next/head"
import HeaderUi from "./Header"
import Footer from "../topPage/Footer"
// import style from "../static/Style";

class Layout extends Component {
  render() {
    return (
      <>
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="viewPort"
            content="width=device-width, initial-scale=1.0"
          />
          <title>Subero</title>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
          />
        </Head>

        <HeaderUi />
        {this.props.children}
      </>
    )
  }
}
export default Layout
