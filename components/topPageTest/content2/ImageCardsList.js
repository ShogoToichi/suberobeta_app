import React from "react"
import Grid from "@material-ui/core/Grid"
import { makeStyles } from "@material-ui/core/styles"
import ImageCards from "./ImageCards"
import { Typography } from "@material-ui/core"
import Link from "next/link"

const styles = makeStyles((theme) => ({
  container: {
    // backgroundColor: "#E0EBF5"
    // padding: "50px 0 50px 0"
  },
  text1: {
    fontSize: "1.1rem"
  },
  test1: {
    // backgroundColor: "red",
    width: "100%"
  }
}))

const ImageCardsList = () => {
  const classes = styles()
  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      className={classes.container}
    >
      <Grid item sx={12} className={classes.test1}>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="flex-end"
        >
          <Grid item className={classes.text1}>
            初心者向けレッスン
          </Grid>
          <Grid item>
            <Link href="/lesson_list">>もっと見る</Link>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <ImageCards />
      </Grid>
    </Grid>
  )
}

export default ImageCardsList
