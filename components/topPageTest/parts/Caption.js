import React, { useContext } from "react"
import { makeStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import { Color } from "../../../static/colors"
import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button"
import Hidden from "@material-ui/core/Hidden"

const topTitle = makeStyles((theme) => ({
  bgImg: {
    backgroundImage: "url(../../../../static/toppage.jpg)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "43rem",
    [theme.breakpoints.down("md")]: {
      backgroundsize: "100%",
      height: "23rem"
    }
  },
  cap: {
    color: useContext(Color).colors.bgGreen,

    "& span": {
      fontSize: "1.2em",
      background: "linear-gradient(transparent 60%, #CBFFD3 90%)"
    },
    [theme.breakpoints.down("md")]: {
      color: useContext(Color).colors.caption,
      fontWeight: "bold"
    }
  },
  mainCap: {
    color: useContext(Color).colors.caption,
    fontWeight: "bold",
    fontSize: "10rem",
    [theme.breakpoints.down("md")]: {
      color: useContext(Color).colors.caption,
      fontSize: "6rem"
    }
  },
  titleContents: {
    marginTop: "4rem",
    marginRight: "12rem",
    [theme.breakpoints.down("lg")]: {
      marginRight: "2rem"
    },
    [theme.breakpoints.down("md")]: {
      marginLeft: "1rem",
      marginTop: "13rem"
    }
  },
  LinkBtn: {
    color: useContext(Color).colors.caption,
    width: "18rem",
    height: "4rem",
    fontSize: "1.4rem",
    fontWeight: "bold",
    [theme.breakpoints.down("md")]: {
      width: "16rem",
      height: "3rem",
      fontsize: "1.2rem"
    }
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
            <Typography variant="h4" align="right" className={classes.cap}>
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
            <Typography variant="h6" align="left" className={classes.cap}>
              好きな<span>時間</span>に好きな<span>場所</span>で
              <br />
              スキー・スノーボードレッスン
            </Typography>

            <Typography variant="h1" align="left" className={classes.mainCap}>
              subero
            </Typography>
          </Grid>
        </Grid>
      </Hidden>
    </div>
  )
}
