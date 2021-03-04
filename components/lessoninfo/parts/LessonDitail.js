import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Paper from "@material-ui/core/Paper"
import Img from "../../commonParts/Img"
import Typography from "@material-ui/core/Typography"

const plofile = makeStyles({
  paper: {
    position: "absolute",
    width: "80%",
    marginTop: "20px"
  },
  userName: {
    display: "inline-block",
    margin: "0px"
  },
  info: {
    marginLeft: "50px",
    marginTop: "40px"
  }
})

export default function LessonDitail(props) {
  const classes = plofile()
  return (
    <Paper className={classes.paper} elevation={24} rounded>
      <Img className={classes.img} src={props.createrImageUrl} size="70" />
      <Typography variant="h6" className={classes.userName}>
        講師名： {props.createrName}
      </Typography>
      <Typography variant="h7" display="block" className={classes.info}>
        料金：{props.lessonPrice}
      </Typography>
      <Typography variant="h7" display="block" className={classes.info}>
        場所：{props.lessonPlace}
      </Typography>

      <Typography variant="h7" display="block" className={classes.info}>
        日時：{props.lessonTime}
      </Typography>
      <Typography variant="h7" display="block" className={classes.info}>
        レッスン内容：{props.lessonDescription}
      </Typography>
      <Typography
        variant="h7"
        display="block"
        className={classes.info}
      ></Typography>
    </Paper>
  )
}
