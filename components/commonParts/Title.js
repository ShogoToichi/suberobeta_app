import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"

const title = makeStyles({
  titleArea: {
    // display: "inline-block",
    width: "90%"
  },
  title: {
    fontWeight: "bold",
    margin: "2rem 0 1rem 2rem"
  },
  subTitle: {
    marginLeft: "3rem",
    marginBottom: "1rem",
    borderBottom: "solid 0.3rem #DDD"
  }
})

export default function Title(props) {
  const classes = title()
  return (
    <Grid
      container
      direction="row"
      justify="flex-start"
      alignItems="flex-start"
      className={classes.titleArea}
    >
      <Grid item xs={10}>
        <Typography className={classes.title} variant="h4">
          {props.title}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography className={classes.subTitle} variant="h6">
          {props.subTitle}
        </Typography>
      </Grid>
    </Grid>
  )
}
