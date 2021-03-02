import React from "react";
import Link from "next/link";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/styles";

export default function Lesson (props){

  const mylessonlist = makeStyles({
    lessonitem:{
        margin: '30px 30px 30px 30px',
    },
    addbtn: {
        textAlign: 'center',
    },
    messagebtn: {
        backgroundColor: "#DDD",
        color:"black",
    },
});

    const classes  = mylessonlist();

    return(
      <div>
        <ListItem divider={true} className={classes.lessonitem}>
                    <ListItemText  style={{fontSize:"30px"}} primary={`${props.name}　in ${props.place}`}/>
            <Link as={`/message/${props.lessonid}`}
              href="/message/[lessonid]">
                <Button size="large" className={classes.messagebtn} onClick={props.onClick}>取引メッセージ</Button>
            </Link>
        </ListItem>
      </div>
      );
    } 
