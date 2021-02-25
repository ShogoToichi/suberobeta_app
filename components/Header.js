//ヘッダー設定用ファイル
//Layoutで読み込む
//※要追加 : loginとマイページボタンを条件分岐で表示切替

import React, { Component } from "react";
import Link from "next/link";
import Account from "./Account";
import {connect} from "react-redux";

function Header(props){
  
    return(<header>
      <div>{props.header}</div>
      <h1>{props.header}</h1>
      <Link href="/">
        <button >トップページ</button>
      </Link>
      {props.login ?
        <Link href="./mypage">
          <button>マイページ</button>
        </Link>
      :
        <Account/>  
      }
      <Link href="./lesson_list">
        <button>レッスン一覧</button>
      </Link>
    </header>);
  }


Header = connect((state)=>state)(Header);
export default Header;