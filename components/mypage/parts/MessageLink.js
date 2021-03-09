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
    messageName: {
      fontSize: "30px"
    },
    addBtn: {
      textAlign: "center"
    },
    messageBtn: {
      backgroundColor: "#DDD",
      color: "black",
      marginLeft: "10px",
      width: "15%",
      height: "40px"
    },
    unReadText: {
      color: "red"
    }
  })

  const classes = myLessonList()

  return (
    <ListItem divider={true} className={classes.lessonItem}>
      <ListItemText
        primary={`${props.lessonName}　　${props.username}さんとのメッセージ`}
        className={classes.messageName}
      />
      {props.readMessage ? (
        <span></span>
      ) : (
        <span className={classes.unReadText}> 未読のメッセージがあります</span>
      )}
      <Link href={`/message/${props.lessonId}/${props.buyerId}`}>
        <Button className={classes.messageBtn} onClick={props.onClick}>
          取引メッセージ
        </Button>
      </Link>
    </ListItem>
  )
}
