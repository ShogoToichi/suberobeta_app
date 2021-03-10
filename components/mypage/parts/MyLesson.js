import React from "react"
import Link from "next/link"
import Button from "@material-ui/core/Button"
import { makeStyles } from "@material-ui/styles"
import Grid from "@material-ui/core/Grid"
import { Typography } from "@material-ui/core"

const myLessonList = makeStyles({
  lessons: {
    margin: "30px 0px",
    borderBottom: "solid 1px #BBB"
  },
  addBtn: {
    textAlign: "center"
  },
  messageBtn: {
    backgroundColor: "#DDD",
    color: "black",
    width: "120px"
  }
})

export default function Lesson(props) {
  const classes = myLessonList()

  return (
    <Grid
      container
      derection="row"
      justify="flex-end"
      wrap="wrap"
      spacing={3}
      className={classes.lessons}
    >
      <Grid item xs={12} sm={12} lg={9}>
        <Typography variant="body1" className={classes.lessonName}>
          {props.lessonName}　in {props.lessonPlace}
        </Typography>
      </Grid>
      <Grid item xs={5} sm={3} lg={2}>
        <Link href={`/lesson_edit/${props.lessonId}`}>
          <Button className={classes.messageBtn} onClick={props.onClick}>
            レッスン編集
          </Button>
        </Link>
      </Grid>
    </Grid>
  )
}
