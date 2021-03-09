import React from "react"
import Link from "next/link"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import Button from "@material-ui/core/Button"
import { makeStyles } from "@material-ui/styles"

const myLessonList = makeStyles({
  lessonItem: {
    margin: "30px 30px 30px 30px"
  },
  addBtn: {
    textAlign: "center"
  },
  lessonName: {
    width:"80%"
  },
  messageBtn: {
    backgroundColor: "#DDD",
    color: "black",
    marginLeft: "10px",
    width: "15%",
    height: "40px"
  }
})

export default function Lesson(props) {
  const classes = myLessonList()

  return (
    <>
      <ListItem divider={true} className={classes.lessonItem}>
        <ListItemText
          style={{ fontSize: "30px" }}
          primary={`${props.lessonName}　in ${props.lessonPlace}`}
          className={classes.lessonName}
        />
        <Link href={`/lesson_edit/${props.lessonId}`}>
          <Button
            className={classes.messageBtn}
            onClick={props.onClick}
          >
            レッスン編集
          </Button>
        </Link>
      </ListItem>
    </>
  )
}
