import React from "react"
import Link from "next/link"
import Button from "@material-ui/core/Button"
import { makeStyles } from "@material-ui/styles"
import Grid from "@material-ui/core/Grid"
import { Typography } from "@material-ui/core"

const ProfileLesson = makeStyles({
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
    width: "130px"
  }
})

export default function Lesson(props) {
  const classes = ProfileLesson()

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
        <Typography variant="body1">
          {props.lessonName}　in {props.lessonPlace}
        </Typography>
      </Grid>
      <Grid item item xs={5} sm={3} lg={2}>
        <Link href={`/lesson_info/${props.lessonId}`}>
          <Button size="large" className={classes.messageBtn}>
            レッスン詳細へ
          </Button>
        </Link>
      </Grid>
    </Grid>
  )
}
