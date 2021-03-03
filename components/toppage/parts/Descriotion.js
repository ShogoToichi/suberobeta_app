import React, { useContext } from "react"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"
import { Color } from "../../../static/colors"
import DescriptionData from "./DescriptionData"

const toptitle = makeStyles((theme) => ({
  maintitle: {
    color: useContext(Color).colors.header,
    marginTop: "200px",
    textWeight: "bold",
    textAlign: "center"
  }
}))

export default function Description(props) {
  const classes = toptitle()

  return (
    <div>
      <div className={classes.maintitle}>
        <Typography variant="h5">
          「教えたい人」と「学びたい人」のレッスンプラットフォーム
        </Typography>
      </div>
      {/* 中の<br></br>を有効にしたい  */}
      <DescriptionData
        title={"手軽に自分に合ったレッスンが受けられる"}
        content={
          "ジャンル、レベル、場所、時間など目的に合ったレッスンを受けることができます。<br>現地集合・現地解散で気軽にレッスンを受けてみましょう。"
        }
        herf={"/lesson_list"}
        btnName={"レッスン一覧"}
      />

      <DescriptionData
        title={"自分の身に着けた技術をみんなと共有"}
        content={
          "磨いてきた技術・理論を周りに共有してスキー・スノーボードの輪を広めよう。<br></br>午前中は自分の練習、午後はsuberoレッスンなど自由にレッスンを組むことができます。"
        }
        herf={"/lesson_add"}
        btnName={"レッスンを作る"}
      />

      <DescriptionData
        title={"リーズナブル"}
        content={
          "スノースクールなどの企業ではなく、個人同士で納得した金額でレッスンを契約するため<br></br>比較的リーズナブルに教えてもらうことができます。"
        }
        herf={"/lesson_list"}
        btnName={"レッスンを探す"}
      />
    </div>
  )
}
