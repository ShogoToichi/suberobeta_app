//値を渡してレッスンを表示する箱
//Linkタグのところはlesson_info/[lessonId]にページ移動する処理

import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Link from "next/link"
import Typography from "@material-ui/core/Typography"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import { CardHeader } from "@material-ui/core"
import Avatar from "@material-ui/core/Avatar"
import Img from "../../commonParts/Img"

const lessonList = makeStyles({
  rayout: {
    float: "center"
  },

  top: {
    width: "100%",
    margin: "8px"
  },

  lessonList: {
    width: "600px",
    margin: "5px",
    marginLeft: "70px"
  },

  btn: {
    float: "right",
    color: "black",
    backgroundColor: "#5B9"
  },
  cardHeader: {
    cursor: "pointer"
  }
})

export default function Lesson(props) {
  const classes = lessonList()
  return (
    <div className={classes.lessonList}>
      <Card>
        <Link
          as={`/lesson_info/${props.lessonId}`}
          href="/lesson_info/[lessonId]"
        >
          <CardHeader
            avatar={
              <Avatar
                aria-label="recipe"
                className={classes.avatar}
                src={props.createrImageUrl}
              ></Avatar>
            }
            className={classes.cardHeader}
            title={props.lessonName}
          />
        </Link>
        <CardContent>
          <Typography style={{ marginBottom: "5px" }} variant="body2">
            日時:{props.lessonTime}
          </Typography>
          <Typography style={{ marginBottom: "5px" }} variant="body2">
            場所：{props.lessonPlace}
          </Typography>
          <Typography style={{ marginBottom: "5px" }} variant="body2">
            料金：{props.lessonPrice}
          </Typography>
          <Typography style={{ marginBottom: "5px" }} variant="body2">
            レッスン内容：{props.lessonDescription}
          </Typography>
        </CardContent>
      </Card>
    </div>
  )
}
