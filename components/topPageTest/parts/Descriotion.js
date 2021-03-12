import React, { useContext } from "react"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import { Color } from "../../../static/colors"
import DescriptionData from "./DescriptionData"
import MediaQuery from "react-responsive"


const topTitle = makeStyles((theme) => ({
  mainTitle: {
    color: useContext(Color).colors.header,
    textWeight: "bold",
    textAlign: "center",
    marginBottom: "50px",
    marginTop: "70px",
    fontSize:"2.2rem"
    // "@media (max-width: 600px)": {
    //   fontSize: "4rem"
    //   // color: "blue"
    // },
    // "@media (min-width: 601px)": {
    //   fontSize: "2rem"
    //   // color: "red"
    // }
  },
  descriptions: {
    margin: theme.spacing(1)
  }
}))

export default function Description(props) {
  const classes = topTitle()

  return (
    <>
      <MediaQuery query="(max-width: 600px)">
        <Typography variant="h6" className={classes.mainTitle}>
          「教えたい人」と「学びたい人」のレッスンプラットフォーム
        </Typography>
      </MediaQuery>
      <MediaQuery query="(min-width: 601px)">
        <Typography variant="h5" className={classes.mainTitle}>
          「教えたい人」と「学びたい人」のレッスンプラットフォーム
        </Typography>
      </MediaQuery>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={1}
        // className={classes.descriptions}
      >
        <Grid item xs={10} sm={7} lg={3}  className={classes.content}>
          <DescriptionData
            title={"自分に合ったレッスン"}
            content1={
              "ジャンル、レベル、場所、時間など目的に合ったレッスンを受けることができます。"
            }
            src="../../../static/topcard1.jpg"
            content2={"現地集合・現地解散で気軽にレッスンを受けてみましょう。"}
            herf={"/lesson_list"}
            btnName={"レッスン一覧"}
          />
        </Grid>

        <Grid item xs={10} sm={7} lg={3}>
          <DescriptionData
            title={"自分の身に着けた技術を共有"}
            src="../../../static/topcard2.jpg"
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
        <Grid item xs={10} sm={7} lg={3}>
          <DescriptionData
            title={"リーズナブル"}
            src="../../../static/topcard3.jpg"
            content1={
              "スノースクールなどの企業ではなく、個人同士で納得した金額でレッスンを契約します。"
            }
            content2={"そのため、比較的リーズナブルに教えてもらうことができます。"}
            herf={"/lesson_list"}
            btnName={"レッスンを探す"}
          />
        </Grid>
      </Grid>
    </>
  )
}
