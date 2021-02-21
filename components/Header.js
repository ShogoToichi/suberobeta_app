//ヘッダー設定用ファイル
//Layoutで読み込む
//※要追加 : loginとマイページボタンを条件分岐で表示切替

import React, { Component } from "react";
import Link from "next/link";

class Header extends Component {
  
  render(){
    return(<header>
      <div>{this.props.header}</div>
      <h1>{this.props.header}</h1>
      <Link href="/">
        <button >トップページ</button>
      </Link>
      <Link href="./mypage">
        <button>マイページ</button>
      </Link>
      <Link href="./lesson_list">
        <button>レッスン一覧</button>
      </Link>
    </header>);
  }
}

export default Header;