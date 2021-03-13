import React, { useContext } from "react"
import Grid from "@material-ui/core/Grid"
import { Color } from "../../../static/colors"
import { makeStyles } from "@material-ui/core/styles"
import IconCards from "./IconCards"
import { Typography } from "@material-ui/core"

const styles = makeStyles((theme) => ({
  mainTitle: {
    color: useContext(Color).colors.header,
    textWeight: "bold",
    marginBottom: "0.5rem",
    textAlign: "center",
    marginTop: "6rem",
    fontSize: "2.2rem",
    "& span": {
      color: "black",
      fontWeight: "bold"
    }
  },
  subTitle: {
    fontSize: "1.2rem",
    textAlign: "center"
  },
  container: {
    padding: "1rem"
  }
}))

const Content1 = () => {
  const classes = styles()
  return (
    <>
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item xs={12}>
          <Typography className={classes.mainTitle}>
            <span>subero</span>ご利用の流れ
          </Typography>
        </Grid>
        <Grid item xs={10}>
          <Typography className={classes.subTitle}>
            決済前に講師と事前のやりとりが可能です。
            まずは、気になるキーワードで検索してみましょう
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        className={classes.container}
      >
        <Grid item>
          <IconCards />
        </Grid>
      </Grid>
    </>
  )
}

export default Content1
