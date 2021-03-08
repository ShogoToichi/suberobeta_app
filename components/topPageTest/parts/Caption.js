import React, { useContext } from "react"
import { makeStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import { Color } from "../../../static/colors"
import Grid from "@material-ui/core/Grid"
// import Button from "../../commonParts/Button"
import Button from "@material-ui/core/Button"

const topTitle = makeStyles((theme) => ({
  title: {
    width: "100%",
    paddingTop: "2rem",
    marginBottom: "2rem"
    // paddingBottom: "800px",
    // backgroundImage: "url(../../../static/Snowboarding.jpg)",
    // marginBottom: "-720px"
  },
  cap: {
    marginLeft: "0px",
    color: useContext(Color).colors.header,
    fontSize: "1.5rem"
  },
  mainCap: {
    color: useContext(Color).colors.header,
    fontWeight: "bold",
    fontSize: "7rem"
  },
  // img: {
  //   right: "200px",
  //   height: "300px",
  //   width: "300px"
  // },
  titleContents: {
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    borderRadius: "1rem"
  },
  LinkBtn: {
    color: useContext(Color).colors.header,
    marginBottom: "3%"
  }
}))

export default function Caption(props) {
  const classes = topTitle()

  return (
    <div className={classes.title}>
      <Grid container justify="center" textAlign="center">
        <Grid item xs={12} sm={6} md={4} className={classes.titleContents}>
          <Typography align="center" className={classes.cap}>
            好きな時間に好きな場所で
            <br />
            スキー・スノーボードレッスン
          </Typography>

          <Typography align="center" className={classes.mainCap}>
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
