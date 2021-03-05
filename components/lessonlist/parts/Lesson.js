//値を渡してレッスンを表示する箱
//Linkタグのところはlesson_info/[lessonId]にページ移動する処理

import React, { useContext } from "react"
import { makeStyles } from "@material-ui/core/styles"
import Link from "next/link"
import Typography from "@material-ui/core/Typography"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import { CardHeader } from "@material-ui/core"
import Img from "../../commonParts/Img"
import { Color } from "../../../static/colors"

const lessonList = makeStyles((theme) => ({
  lesson: {
    width: "80%",
    margin: "5px",
    marginLeft: "70px"
  },
  cardHeader: {
    display: "inline-block",
    verticalAlign: "top",
    color: useContext(Color).colors.Green,
    fontWeight: "bold",
    marginLeft: "30px"
  },
  contents: {
    width: "100%",
    marginLeft: "50px"
  },
  info: {
    marginTop: "10px"
  }
}))

export default function Lesson(props) {
  const classes = lessonList()
  return (
    <Card className={classes.lesson}>
      <Link href={`/profile_show/${props.userId}`}>
        <Img src={props.createrImageUrl} size="70" />
      </Link>

      <Link
        as={`/lesson_info/${props.lessonId}`}
        href="/lesson_info/[lessonId]"
      >
        <CardHeader className={classes.cardHeader} title={props.lessonName} />
      </Link>
      <CardContent className={classes.contents}>
        <Typography
          style={{ marginBottom: "5px" }}
          variant="body2"
          className={classes.info}
        >
          日時:{props.lessonTime}
        </Typography>
        <Typography
          style={{ marginBottom: "5px" }}
          variant="body2"
          className={classes.info}
        >
          場所：{props.lessonPlace}
        </Typography>
        <Typography
          style={{ marginBottom: "5px" }}
          variant="body2"
          className={classes.info}
        >
          料金：{props.lessonPrice}
        </Typography>
      </CardContent>
    </Card>
  )
}
