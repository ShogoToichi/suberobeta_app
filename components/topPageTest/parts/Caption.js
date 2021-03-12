import React, { useContext } from "react"
import { makeStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import { Color } from "../../../static/colors"
import Grid from "@material-ui/core/Grid"
// import Button from "../../commonParts/Button"
import Button from "@material-ui/core/Button"

const topTitle = makeStyles((theme) => ({
  title: {
    // width: "100%",
    // paddingTop: "2rem",
    // marginBottom: "2rem"
    // position: "absolute",
    // top: "15%",
    // left: "25%"
    // paddingBottom: "800px",
    // backgroundImage: "url(../../../static/Snowboarding.jpg)",
    // marginBottom: "-720px"
  },
  cap: {
    // textAlign: "right",
    marginLeft: "0px",
    color: useContext(Color).colors.caption,
    fontSize: "2.2rem"
  },
  mainCap: {
    // textAlign: "right",
    color: useContext(Color).colors.caption,
    fontWeight: "bold",
    fontSize: "10rem"
  },
  // img: {
  //   right: "200px",
  //   height: "300px",
  //   width: "300px"
  // },
  titleContents: {
    // backgroundColor: "rgba(255, 255, 255, 0.6)",
    textAlign: "right",
    borderRadius: "1rem"
  },
  LinkBtn: {
    color: useContext(Color).colors.caption,
    marginBottom: "3%",
    width: "18rem",
    height: "4rem",
    fontSize: "1.4rem",
    fontWeight: "bold"
    // marginRight: "220px",
    // textAlign: "right",
    // float: "right"
  }
}))

export default function Caption(props) {
  const classes = topTitle()

  return (
    <div className={classes.title}>
      <Grid container direction="column" justify="center" alignItems="flex-end">
        <Grid item xs={12} className={classes.titleContents}>
          <Typography align="right" className={classes.cap}>
            好きな時間に好きな場所で
            <br />
            スキー・スノーボードレッスン
          </Typography>

          <Typography align="right" className={classes.mainCap}>
            subero
          </Typography>
          <Typography align="center">
            <Button variant="outlined" size="large" className={classes.LinkBtn}>
              今すぐはじめる
            </Button>
          </Typography>
        </Grid>
        {/* <Grid item xs={12} sm={6} md={4}>
          <Typography align="center">
            <img
              src="../../../static/snowboard.jpg"
              width="100px"
              alt="スノーボード画像"
              className={classes.img}
            />
          </Typography>
        </Grid> */}
      </Grid>
    </div>
  )
}
