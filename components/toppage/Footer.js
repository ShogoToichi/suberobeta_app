//フッター設定用ファイル
//レイアウトで読み込む


import React, { Component } from "react";

export default function Footer (props){

const footer_style={
  marginTop:"20px",
  color:"#999",
  position: "absolute",
  bottom:"0",
  right:"20px",
  fontSize:"16px",

}

const footer_p={
  mergin:"0px",
  padding:"0px",
  color:"#777",
}

  const footer = {
    color:"#999",
    fontSize:"11pt",
    borderBottom: "1px solid #999",
    margin:"50px 0px 10px 0px",
    position: "relative",
    height:"120px",
    backgroundColor:"#E9E9E9",
    paddingLeft:"30px",
    paddingTop:"1px",
  }
 
const footertext_style={}


    return (<footer style={footer}>
      <p style={footer_p}>企業情報</p>
      <p style={footer_p}>アクセス</p>
      <p style={footer_p}>採用情報</p>
      <div style={footer_style}>{props.footer}</div>
    </footer>);
  }
