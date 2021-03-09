//値を渡してレッスンを表示する箱
//Linkタグのところはlesson_info/[lessonId]にページ移動する処理

import React, { useContext } from "react"
import { makeStyles } from "@material-ui/core/styles"
import Link from "next/link"
import Typography from "@material-ui/core/Typography"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import { CardHeader } from "@material-ui/core"
import Img from "../../commonParts/Img"
import { Color } from "../../../static/colors"
import Icon from "@mdi/react"
import {
  mdiCalendarClock,
  mdiMapMarkerRadiusOutline,
  mdiCurrencyUsd,
  mdiTagOutline
} from "@mdi/js"
import Chip from "@material-ui/core/Chip"

const lessonList = makeStyles((theme) => ({
  lesson: {
    display: "inline-block",
    width: "100%",
    margin: "10px 0px 10px 20px",
    // float: "right"
  },
  cardHeader: {
    display: "inline-block",
    verticalAlign: "top",
    color: useContext(Color).colors.Green,
    fontWeight: "bold",
    cursor: "pointer",
    margin: "20px 0px 0px 20px",
    width: "60%"
  },
  evaluation: {
    display: "inline-box",
    flexDirection: "row-reverse",
    justifyContent: "left",
    margin: "40px 0px 0px 0px",
    "& input": {
      display: "none"
    },
    "& label": {
      position: "relative",
      color: "#ffcc00"
    }
  },
  tags: {
    marginLeft: "70px"
  },
  tag: {
    margin: "0px 5px",
    color: useContext(Color).colors.Green
  },
  contents: {
    marginLeft: "50px",
    width: "100%"
  },
  info: {
    margin: "5px 10px 5px 10px",
    display: "inline-block",
    width: "30%"
  }
}))

export default function Lesson(props) {
  const classes = lessonList()
  return (
    <Card className={classes.lesson}>
      <Link href={`/profile_show/${props.userId}`}>
        <Img src={props.createrImageUrl} size="70" />
      </Link>

      <Typography variant="h8" className={classes.createrName}>{props.createrName}</Typography>

      <Link
        as={`/lesson_info/${props.lessonId}`}
        href="/lesson_info/[lessonId]"
      >
        <CardHeader className={classes.cardHeader} title={props.lessonName} />
      </Link>

      <div className={classes.evaluation}>
        <Typography variant="body2" className={classes.assessment}>
          評価
          <input id="star1" type="radio" name="star" value="5" />
          <label for="star1">★</label>
          <input id="star2" type="radio" name="star" value="4" />
          <label for="star2">★</label>
          <input id="star3" type="radio" name="star" value="3" />
          <label for="star3">★</label>
          <input id="star4" type="radio" name="star" value="2" />
          <label for="star4">★</label>
          <input id="star5" type="radio" name="star" value="1" />
          <label for="star5">★</label>
        </Typography>
      </div>
      <br />

      <div className={classes.tags}>
        <Chip
          icon={<Icon path={mdiTagOutline} size="20px" />}
          label={props.tagLabel2}
          clickable
          className={classes.tag}
        />
        <Chip
          icon={<Icon path={mdiTagOutline} size="20px" />}
          label={props.tagLabel3}
          clickable
          className={classes.tag}
        />
      </div>

      <CardContent className={classes.contents}>
        <Typography variant="body2" className={classes.info}>
          <Icon path={mdiCalendarClock} size="20px" />
          &emsp;{props.lessonTime}
        </Typography>
        <Typography align="left" variant="body2" className={classes.info}>
          <Icon path={mdiMapMarkerRadiusOutline} size="20px" />
          &emsp;{props.lessonPlace}
        </Typography>
        <Typography variant="body2" className={classes.info}>
          <Icon path={mdiCurrencyUsd} size="20px" />
          &emsp;{props.lessonPrice}円
        </Typography>
      </CardContent>
    </Card>
  )
}
