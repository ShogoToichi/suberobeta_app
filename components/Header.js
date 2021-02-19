import React, { Component } from "react";
import Link from "next/link";

class Header extends Component {
  
  render(){
    return(<header>
      <div>{this.props.header}</div>
      <h1>{this.props.header}</h1>
      <Link href="./toppage">
        <button style={this.btnstyle}>トップページ</button>
      </Link>
      <Link href="./mypage">
        <button style={this.btnstyle}>マイページ</button>
      </Link>
      <Link href="./lesson_list">
        <button style={this.btnstyle}>レッスン一覧</button>
      </Link>
    </header>);
  }
}

export default Header;