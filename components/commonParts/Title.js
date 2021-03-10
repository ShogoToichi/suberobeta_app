import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"

const title = makeStyles({
  titleArea: {
    display: "inline-block",
    width: "80%"
  },
  title: {
    fontWeight: "bold",
    margin: "40px 0px 20px 20px",
  },
  subTitle: {
    marginLeft: "50px",
    marginBottom: "20px",
    borderBottom: "solid 4px #DDD"
  }
})

export default function Title(props) {
  const classes = title()
  return (
    <Grid container justify="center" className={classes.titleArea}>
      <Grid item xs={10}>
        <Typography className={classes.title} variant="h4">
          {props.title}
        </Typography>
        <Typography className={classes.subTitle} variant="h6">
          {props.subTitle}
        </Typography>
      </Grid>
    </Grid>
  )
}
