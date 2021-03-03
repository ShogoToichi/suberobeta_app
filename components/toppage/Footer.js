//フッター設定用ファイル
//レイアウトで読み込む

import React, { Component, useContext } from "react"
import { Color } from "../../static/colors"

export default function Footer(props) {
  const footer_style = {
    marginTop: "20px",
    color: useContext(Color).colors.footer_subero,
    position: "absolute",
    bottom: "0",
    right: "20px",
    fontSize: "16px"
  }

  const footer_p = {
    mergin: "0px",
    padding: "0px",
    color: useContext(Color).colors.footer_p
  }

  const footer = {
    color: "#999",
    fontSize: "11pt",
    borderBottom: "1px solid #999",
    margin: "50px 0px 10px 0px",
    position: "relative",
    height: "120px",
    backgroundColor: useContext(Color).colors.grayBtn,
    paddingLeft: "30px",
    paddingTop: "1px"
  }

  return (
    <footer style={footer}>
      <p style={footer_p}>企業情報</p>
      <p style={footer_p}>アクセス</p>
      <p style={footer_p}>採用情報</p>
      <div style={footer_style}>{props.footer}</div>
    </footer>
  )
}
