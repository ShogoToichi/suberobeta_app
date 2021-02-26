import React from "react";
import Link from "next/link";

export default function Lesson (props){

  const mylessonlist = makeStyles({
    list:{
        margin: '20px',
    },
    addbtn: {
        textAlign: 'center',
    },
    messagebtn: {
        backgroundColor: "#5FA",
        color:"white",
    },
});

    const classes  = mylessonlist();

    return(
      <div>
        <Link as={`/lesson_info/${props.lessonid}`}
          href="/lesson_info/[lessonid]">
            <a>{props.name}</a>
          </Link>
        <p>place: {props.place}</p>
        <p>price: {props.price}</p>
        <p>time: {props.time}</p>
        <p>comment: {props.text}</p>

        <Link as={`/message/${props.lessonid}`}
          href="/message/[lessonid]">
            <button>取引メッセージ</button>
        </Link>
      </div>
      );
    } 


            <ListItem divider={true} className={classes.lessonitem}>
                <ListItemText  primary="「レッスン名」　「生徒名」　「日時」　" />
        <Link as={`/message/${props.lessonid}`}
          href="/message/[lessonid]">
                <Button size="large" className={classes.messagebtn} onClick={props.onClick}>取引メッセージ</Button>
            </ListItem>
          