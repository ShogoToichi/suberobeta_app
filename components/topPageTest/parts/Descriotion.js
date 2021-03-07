import React, { useContext } from "react"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import { Color } from "../../../static/colors"
import DescriptionData from "./DescriptionData"
import MediaQuery from "react-responsive"
import Card from "@material-ui/core/Card"
import { Container } from "next/app"

const topTitle = makeStyles((theme) => ({
  mainTitle: {
    color: useContext(Color).colors.header,
    textWeight: "bold",
    textAlign: "center",
    marginBottom: "50px"
    // "@media (max-width: 600px)": {
    //   fontSize: "4rem"
    //   // color: "blue"
    // },
    // "@media (min-width: 601px)": {
    //   fontSize: "2rem"
    //   // color: "red"
    // }
  },
  contents: {
    marginTop: "-200px"
    // backgroundColor: "#D0D9EE"
    // opacity: 0.8
  }
  // descriptions: {
  // },
  // test: {
  // }
}))

export default function Description(props) {
  const classes = topTitle()

  return (
    <Container className={classes.test}>
      <div className={classes.contents}>
        <MediaQuery query="(max-width: 600px)">
          <div className={classes.mainTitle}>
            <Typography variant="h6">
              「教えたい人」と「学びたい人」のレッスンプラットフォーム
            </Typography>
          </div>
        </MediaQuery>
        <MediaQuery query="(min-width: 601px)">
          <div className={classes.mainTitle}>
            <Typography variant="h5">
              「教えたい人」と「学びたい人」のレッスンプラットフォーム
            </Typography>
          </div>
        </MediaQuery>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          // className={classes.descriptions}
        >
          <Grid item xs={12} sm={4} className={classes.content}>
            <DescriptionData
              title={"手軽に自分に合ったレッスンが受けられる"}
              content1={
                "ジャンル、レベル、場所、時間など目的に合ったレッスンを受けることができます。"
              }
              content2={
                "現地集合・現地解散で気軽にレッスンを受けてみましょう。"
              }
              herf={"/lesson_list"}
              btnName={"レッスン一覧"}
            />
          </Grid>

          <Grid item xs={12} sm={4}>
            <DescriptionData
              title={"自分の身に着けた技術をみんなと共有"}
              content1={
                "磨いてきた技術・理論を周りに共有してスキー・スノーボードの輪を広めよう。"
              }
              content2={
                "午前中は自分の練習、午後はsuberoレッスンなど自由にレッスンを組むことができます。"
              }
              herf={"/lesson_add"}
              btnName={"レッスンを作る"}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <DescriptionData
              title={"リーズナブル"}
              content1={
                "スノースクールなどの企業ではなく、個人同士で納得した金額でレッスンを契約するため比較的リーズナブルに教えてもらうことができます。"
              }
              content2={""}
              herf={"/lesson_list"}
              btnName={"レッスンを探す"}
            />
          </Grid>
        </Grid>
      </div>
    </Container>
  )
}
