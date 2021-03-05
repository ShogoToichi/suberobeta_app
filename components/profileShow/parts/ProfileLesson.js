import React from "react"
import Link from "next/link"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import Button from "@material-ui/core/Button"
import { makeStyles } from "@material-ui/styles"

const ProfileLesson = makeStyles({
  lessonItem: {
    margin: "30px 30px 30px 30px"
  },
  addBtn: {
    textAlign: "center"
  },
  messageBtn: {
    backgroundColor: "#DDD",
    color: "black"
  }
})

export default function Lesson(props) {
  const classes = ProfileLesson()

  return (
    <>
      <ListItem divider={true} className={classes.lessonItem}>
        <ListItemText
          style={{ fontSize: "30px" }}
          primary={`${props.lessonName}　in ${props.lessonPlace}`}
        />
        <Link href={`/lesson_info/${props.lessonId}`}>
          <Button size="large" className={classes.messageBtn}>
            レッスン詳細へ
          </Button>
        </Link>
      </ListItem>
    </>
  )
}
