//HeaderとFooterをまとめたファイル
//props.childrenはLayoutタグで挟まれた要素
//このファイルにHTMLの<Head>を書く

import React, { Component } from "react";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import style from "../static/Style";

class Layout extends Component {

  render(){
    return (<div>
      <Head>
        <title>{this.props.title}</title>
        <meta charSet="utf-8" />
        <meta name="viewPort"
          content="initial-scale=1.0, width=device-width" />
      </Head>
      {style}
      <Header header={this.props.header}
        title={this.props.title} />
      {this.props.children}
      <Footer Footer="copyright subero.corp"/>
    </div>);
  }
}
export default Layout;