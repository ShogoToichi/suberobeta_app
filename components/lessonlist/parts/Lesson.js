//値を渡してレッスンを表示する箱
//Linkタグのところはlessoninfo/[lessonid]にページ移動する処理

import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Link from "next/link"
import Typography from "@material-ui/core/Typography"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import { CardHeader } from "@material-ui/core"
import Img from "../../normal_parts/Img";

const lessonlist = makeStyles({
  rayout: {
    float: "center"
  },

  top: {
    width: "100%",
    margin: "8px"
  },

  lessonlist: {
    width: "600px",
    margin: "5px",
    marginLeft: "70px"
  },

  btn: {
    float: "right",
    color: "black",
    backgroundColor: "#5B9"
  },
  cardheader: {
    cursor: "pointer"
  }
})

export default function Lesson(props) {
  const classes = lessonlist()
  return (
    <div className={classes.lessonlist}>
      <Card>
        <Img className={classes.img} src={props.imageurl} size="90" />
        <Link
          as={`/lesson_info/${props.lessonid}`}
          href="/lesson_info/[lessonid]"
        >
          <CardHeader
            className={classes.cardheader}
            title={props.name}
          />
        </Link>
        <CardContent>
          <Typography style={{ marginBottom: "5px" }} variant="body2">
            日時:{props.time}
          </Typography>
          <Typography style={{ marginBottom: "5px" }} variant="body2">
            場所：{props.place}
          </Typography>
          <Typography style={{ marginBottom: "5px" }} variant="body2">
            料金：{props.price}
          </Typography>
          <Typography style={{ marginBottom: "5px" }} variant="body2">
            レッスン内容：{props.text}
          </Typography>
        </CardContent>
      </Card>
    </div>
  )
}
