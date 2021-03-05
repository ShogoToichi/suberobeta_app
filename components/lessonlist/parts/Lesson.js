//値を渡してレッスンを表示する箱
//Linkタグのところはlesson_info/[lessonId]にページ移動する処理

import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Link from "next/link";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { CardHeader } from "@material-ui/core";
import Img from "../../commonParts/Img";
import { Color } from "../../../static/colors";

const lessonList = makeStyles((theme) => ({
  top: {
    width: "100%",
    margin: "8px",
  },
  img: {
    display: "inline-block",
    verticalAlign: "top",
  },
  lessonList: {
    width: "80%",
    margin: "5px",
    marginLeft: "70px",
  },

  contents: {
    display: "inline-block",
    verticalAlign: "top",
    width: "60%"
  },

  cardHeader: {
    cursor: "pointer",
    color: useContext(Color).colors.Green,
    marginLeft: "30px",
  },
}));

export default function Lesson(props) {
  const classes = lessonList();
  return (
    <div className={classes.lessonList}>
      <Card>
        <Img className={classes.img} src={props.createrImageUrl} size="70" />
        <div className={classes.contents}>
        <Link
          as={`/lesson_info/${props.lessonId}`}
          href="/lesson_info/[lessonId]"
        >
          <CardHeader className={classes.cardHeader} title={props.lessonName} />
        </Link>
        <CardContent>
          <Typography style={{ marginBottom: "5px" }} variant="body2">
            日時:{props.lessonTime}
          </Typography>
          <Typography style={{ marginBottom: "5px" }} variant="body2">
            場所：{props.lessonPlace}
          </Typography>
          <Typography style={{ marginBottom: "5px" }} variant="body2">
            料金：{props.lessonPrice}
          </Typography>
          <Typography style={{ marginBottom: "5px" }} variant="body2">
            レッスン内容：{props.lessonDescription}
          </Typography>
        </CardContent>
        </div>
      </Card>
    </div>
  );
}
