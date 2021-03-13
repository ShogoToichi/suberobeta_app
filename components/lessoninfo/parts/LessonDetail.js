import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import Typography from "@material-ui/core/Typography"
import Icon from "@mdi/react"
import {
  mdiCalendarClock,
  mdiMapMarkerRadiusOutline,
  mdiCurrencyUsd
} from "@mdi/js"
import Grid from "@material-ui/core/Grid"
import BuyBtn from "./BuyBtn"
import EditBtn from "./EditBtn"

const plofile = makeStyles((theme) => ({
  cardContent: {
    width: "100%"
  },
  info: {
    marginTop: "2rem"
  },
  descriptionTop: {
    margin: "2rem 1rem",
    fontWeight: "bold"
  },
  description: {
    marginTop: "2rem",
    width: "90%"
  }
}))

export default function LessonDetail(props) {
  const classes = plofile()
  return (
    <Card className={classes.lessonInfo}>
      <CardContent className={classes.cardContent}>
        <Grid container spacing={1} deraction="row" justify="space-around">
          <Grid item xs={10} sm={10} lg={3}>
            <Typography className={classes.info}>
              <Icon path={mdiCalendarClock} size="2rem" />
              &emsp;{props.lessonTime}
            </Typography>
          </Grid>
          <Grid item xs={10} sm={10} lg={3}>
            <Typography className={classes.info}>
              <Icon path={mdiMapMarkerRadiusOutline} size="2rem" />
              &emsp;{props.lessonPlace}
            </Typography>
          </Grid>
          <Grid item xs={10} sm={10} lg={3}>
            <Typography className={classes.info}>
              <Icon path={mdiCurrencyUsd} size="2rem" />
              &emsp;{props.lessonPrice} 円
            </Typography>
          </Grid>
        </Grid>

        <Typography
          variant="h6"
          display="block"
          className={classes.descriptionTop}
        >
          学べる内容
        </Typography>

        <span style={{ position: "absolute", top: "6rem", right: "0.1rem" }}>
          {props.login ? (
            props.buyerId == props.createrId ? (
              <EditBtn lessonId={props.lessonId} />
            ) : (
              <BuyBtn onClick={props.onClick} />
            )
          ) : (
            <></>
          )}
        </span>

        <Typography
          variant="body1"
          display="block"
          className={classes.description}
        >
          {props.lessonDescription}
        </Typography>
      </CardContent>
    </Card>
  )
}
