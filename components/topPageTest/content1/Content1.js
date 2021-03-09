import React from "react"
import IconCard from "./IconCard"
import Grid from "@material-ui/core/Grid"
import { makeStyles } from "@material-ui/core/styles"
import IconCards from "./IconCards"
import { Typography } from "@material-ui/core"

const styles = makeStyles((theme) => ({
  container: {
    // backgroundColor: "#E0EBF5",
    padding: "50px 0 50px 0"
  }
}))

const Content1 = () => {
  const classes = styles()
  return (
    <>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        className={classes.container}
      >
        <Grid item>
          <Typography variant="title">
            プログラミング、デザイン、起業についての相談など、さまざまなジャンルのメンターがそろっています。
          </Typography>
        </Grid>
        <Grid item>
          <IconCards />
        </Grid>
        <Grid item>
          <Typography variant="caption">
            ※ユーザー数，メンター数，契約総数はSubero調べ
          </Typography>
        </Grid>
      </Grid>
    </>
  )
}

export default Content1
