//値を渡してレッスンを表示する箱
//Linkタグのところはlessoninfo/[lessonid]にページ移動する処理

import React, {Component} from "react";
import Link from "next/link";
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { CardHeader } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';

const lessonlist = makeStyles({
  rayout: {
    float: 'center',
  },

  top: {
    width: '100%',
    margin: '8px',
    
  },

  lessonlist: {
    width: '600px',
    margin: '5px',
    marginLeft:"70px",
  },

  btn:{
    float: 'right',
    color: 'black',
    backgroundColor: '#5B9' 
  },
  cardheader:{
  cursor : "pointer",
  }
});

export default function Lesson (props){
    const classes = lessonlist();
    return(
  <div className={classes.lessonlist}>
              <Card>
                  <Link as={`/lesson_info/${props.lessonid}`}
                    href="/lesson_info/[lessonid]">
                      <CardHeader
                          avatar={
                          <Avatar aria-label="recipe" className={classes.avatar} src={props.imageurl}>
                          </Avatar>
                          }
                          className={classes.cardheader}
                          title={props.name}
                    />
                    </Link>
                  <CardContent>
                    <Typography style={{marginBottom:"5px"}} variant="body2">日時:{props.time}</Typography>
                    <Typography style={{marginBottom:"5px"}} variant="body2">場所：{props.place}</Typography>
                    <Typography style={{marginBottom:"5px"}} variant="body2">料金：{props.price}</Typography>
                    <Typography style={{marginBottom:"5px"}} variant="body2">レッスン内容：{props.text}</Typography>
                  </CardContent>
              </Card>
            </div>
      );
    } 


