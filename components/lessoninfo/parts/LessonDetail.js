import React, { useContext } from "react"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import { CardHeader } from "@material-ui/core"
import Img from "../../commonParts/Img"
import Typography from "@material-ui/core/Typography"
import Link from "next/link"
import { Color } from "../../../static/colors"

const plofile = makeStyles((theme) => ({
  lessonDetail: {
    width: "80%"
  },
  cardHeader: {
    display: "inline-block",
    verticalAlign: "top",
    color: useContext(Color).colors.Green,
    fontWeight: "bold",
    marginLeft: "30px",
    marginTop: "30px",
    cursor: "pointer"
  },
  cardContent: {
    width: "100%",
    marginLeft: "50px"
  },
  info: {
    marginTop: "20px"
  }
}))

export default function LessonDetail(props) {
  const classes = plofile()
  return (
    <Card className={classes.lessonDetail}>
      <Link href={`/profile_show/${props.userId}`}>
        <Img src={props.createrImageUrl} size="90" />
      </Link>
      <Link href={`/profile_show/${props.userId}`}>
        <CardHeader className={classes.cardHeader} title={props.createrName} />
      </Link>
      <CardContent className={classes.cardContent}>
        <Typography variant="h7" display="block" className={classes.info}>
          料金:{props.lessonPrice}
        </Typography>
        <Typography variant="h7" display="block" className={classes.info}>
          場所：{props.lessonPlace}
        </Typography>
        <Typography variant="h7" display="block" className={classes.info}>
          日時：{props.lessonTime}
        </Typography>
        <Typography variant="h7" display="block" className={classes.info}>
          レッスン内容：{props.lessonDescription}
        </Typography>
        <Typography
          variant="h7"
          display="block"
          className={classes.info}
        ></Typography>
      </CardContent>
    </Card>
  )
}
