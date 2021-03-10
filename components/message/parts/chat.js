import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Img from "../../commonParts/Img"
import Grid from "@material-ui/core/Grid"
import { Typography } from "@material-ui/core"

const chat = makeStyles((theme) => ({
  chat: {
    margin: "10px 0px"
  },
  content: {
    // border:"solid 1px #DDD",
    backgroundColor: "#E0E0E0",
    borderRadius: "7px",
    height: "30px",
    verticalAlign: "middle",
    padding: "10px 20px 0px 20px",
    display: "inline-block",
    marginBottom: "10px",
    marginLeft: "20px"
  }
}))

export default function Chat(props) {
  const classes = chat()

  return (
    <Grid
      container
      deraction="row"
      justify="flexstart"
      alignItems="flex-start"
      className={classes.chat}
    >
      <Grid className={classes.img}>
        <Img src={props.imageUrl} size="60" />
      </Grid>
      <Grid item xs container direction="column" spacing={2}>
        <Grid item>
          <Typography variant="body1" className={classes.userName}>
            {props.userName}
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1" className={classes.content}>
            {props.text}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  )
}
