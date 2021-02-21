//フッター設定用ファイル
//レイアウトで読み込む


import React, { Component } from "react";

class Footer extends Component {


  render(){
    return (<footer>
      <div>{this.props.footer}</div>
    </footer>);
  }
}

export default Footer;