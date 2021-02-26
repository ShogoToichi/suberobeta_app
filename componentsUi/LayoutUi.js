import React, { Component } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

class Layout extends Component {

  render(){
    return (
    <div>
      <head>
      <meta charSet="utf-8"/>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
      <meta name="viewPort" content="width=device-width, initial-scale=1.0"/>
      <title>Subero</title>
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      </head>

      <body>
      <Header />
      {this.props.children}
      </body>
      
    </div>);
  }
}
export default Layout;