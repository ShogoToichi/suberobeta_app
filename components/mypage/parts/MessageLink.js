import React from "react"
import Link from "next/link"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import Button from "@material-ui/core/Button"
import { makeStyles } from "@material-ui/styles"

export default function MessageLink(props) {
  const myLessonList = makeStyles({
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

  const classes = myLessonList()

  return (
    <>
      <ListItem divider={true} className={classes.lessonItem}>
        <ListItemText
          style={{ fontSize: "30px" }}
          primary={`${props.lessonName}　　${props.username}さんとのメッセージ`}
        />
        <Link href={`/message/${props.lessonId}/${props.buyerId}`}>
          <Button
            size="large"
            className={classes.messageBtn}
            onClick={props.onClick}
          >
            取引メッセージ
          </Button>
        </Link>
      </ListItem>
    </>
  )
}
