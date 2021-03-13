import React, { useContext } from "react"
import { makeStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import { Color } from "../../../static/colors"
import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button"
import Hidden from "@material-ui/core/Hidden"

const topTitle = makeStyles((theme) => ({
  bgImg: {
    backgroundColor: "#4C87C9",
    backgroundImage: "url(../../../../static/toppage.jpg)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "43rem"
  },
  cap: {
    textAlign: "right",
    color: useContext(Color).colors.bgGreen,
    fontSize: "2rem",

    "& span": {
      color: "red"
    },
    [theme.breakpoints.down("md")]: {
      color: useContext(Color).colors.caption,
      fontSize: "1.5rem",
      fontWeight: "bold"
    }
  },
  mainCap: {
    color: useContext(Color).colors.caption,
    fontWeight: "bold",
    fontSize: "10rem",
    [theme.breakpoints.down("md")]: {
      color: useContext(Color).colors.caption,
      fontSize: "8rem"
    }
  },
  titleContents: {
    borderRadius: "1rem",
    marginTop: "4rem",
    marginRight: "12rem",
    [theme.breakpoints.down("lg")]: {
      marginRight: "2rem"
    },
    [theme.breakpoints.down("md")]: {
      marginLeft: "1rem",
      marginTop: "22rem"
    }
  },
  LinkBtn: {
    color: useContext(Color).colors.caption,
    marginBottom: "3%",
    width: "18rem",
    height: "4rem",
    fontSize: "1.4rem",
    fontWeight: "bold"
  }
}))

export default function Caption(props) {
  const classes = topTitle()

  return (
    <div className={classes.title}>
      {/* PCでの表示 */}
      <Hidden mdDown>
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="flex-end"
          className={classes.bgImg}
        >
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
              <Button
                variant="outlined"
                size="large"
                className={classes.LinkBtn}
              >
                今すぐはじめる
              </Button>
            </Typography>
          </Grid>
        </Grid>
      </Hidden>

      {/* スマホ・タブレットでの表示 */}
      <Hidden lgUp>
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="flex-start"
          className={classes.bgImg}
        >
          <Grid item xs={12} className={classes.titleContents}>
            <Typography align="right" className={classes.cap}>
              好きな<span>時間</span>に好きな<span>場所</span>で
              <br />
              スキー・スノーボードレッスン
            </Typography>

            <Typography align="right" className={classes.mainCap}>
              subero
            </Typography>
            <Typography align="center">
              <Button
                variant="outlined"
                size="large"
                className={classes.LinkBtn}
              >
                今すぐはじめる
              </Button>
            </Typography>
          </Grid>
        </Grid>
      </Hidden>
    </div>
  )
}
