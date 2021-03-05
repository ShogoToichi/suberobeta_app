import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Paper from "@material-ui/core/Paper"
import Img from "../../commonParts/Img"
import Typography from "@material-ui/core/Typography"
import Link from "next/link"

const plofile = makeStyles({
  paper: {
    width: "80%",
    marginTop: "20px",
  },
  userName: {
    display: "inline-block",
    margin: "0px",
  },
  info: {
    marginLeft: "50px",
    marginTop: "40px"
  },
  span: {
    cursor: "pointer"
  }
})

export default function LessonDetail(props) {
  const classes = plofile();
  return (
    <Paper className={classes.paper} elevation={24} rounded>
      <Link href={`/profile_show/${props.userId}`}>
        <a>
          <Img className={classes.img} src={props.createrImageUrl} size="70" />
        </a>
      </Link>
      <Typography variant="h6" className={classes.userName}>
        講師名：
        <Link href={`/profile_show/${props.userId}`}>
          <span className={classes.span}>{props.createrName}</span>
        </Link>
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
  );
}
