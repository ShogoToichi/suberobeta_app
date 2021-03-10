import React from "react"
import Link from "next/link"
import Button from "@material-ui/core/Button"
import { makeStyles } from "@material-ui/styles"
import Grid from "@material-ui/core/Grid"
import { Typography } from "@material-ui/core"
import { typography } from "@material-ui/system"

export default function MessageLink(props) {
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
      width: "150px"
    },
    unReadText: {
      marginLeft: "20px",
      color: "red"
    }
  })

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
      <Grid item xs={12} sm={12} lg={6}>
        <Typography variant="body2" className={classes.messageName}>
          {props.lessonName}　　{props.username}さんとのメッセージ
        </Typography>
      </Grid>
      <Grid item xs={7} sm={4} lg={3}>
        <Typography variant="body2" className={classes.messageName}>
          {props.readMessage ? (
            <span></span>
          ) : (
            <span className={classes.unReadText}>
              {" "}
              未読のメッセージがあります
            </span>
          )}
        </Typography>
      </Grid>
      <Grid item xs={6} sm={3} lg={2}>
        <Link href={`/message/${props.lessonId}/${props.buyerId}`}>
          <Button className={classes.messageBtn} onClick={props.onClick}>
            取引メッセージ
          </Button>
        </Link>
      </Grid>
    </Grid>
  )
}
