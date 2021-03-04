import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"

const title = makeStyles({
  titleArea: {
    display: "inline-block",
    width: "90%"
  },
  title: {
    fontWeight: "bold",
    margin: "40px"
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
    <div className={classes.titleArea}>
      <Typography className={classes.title} variant="h4">
        {props.title}
      </Typography>
      <Typography className={classes.subTitle} variant="h6">
        {props.subTitle}
      </Typography>
    </div>
  )
}
