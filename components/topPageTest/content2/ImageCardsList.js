import React from "react"
import Grid from "@material-ui/core/Grid"
import { makeStyles } from "@material-ui/core/styles"
import ImageCards from "./ImageCards"
import { Typography } from "@material-ui/core"
import Link from "next/link"

const styles = makeStyles((theme) => ({
  subTitle: {
    fontWeight: "bold"
  },
  link: {
    fontWeight:"bold",
    textAlign: "right",
    color: "Green",
    textDecoration: "underline",
    cursor: "pointer"
  }
}))

const ImageCardsList = () => {
  const classes = styles()
  return (
    <Grid container direction="row" justify="center" alignItems="center">
      <Grid item xs={10} sm={8} lg={6}>
        <Typography variant="h6" className="subTitle">
          初心者向けレッスン
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <ImageCards />
      </Grid>
      <Grid item xs={10} sm={8} lg={6}>
        <Link href="/lesson_list">
          <Typography variant="h6" className={classes.link}>
            もっと見る
          </Typography>
        </Link>
      </Grid>
    </Grid>
  )
}

export default ImageCardsList
