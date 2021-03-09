import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Icon from "@mdi/react";
import {
  mdiCalendarClock,
  mdiMapMarkerRadiusOutline,
  mdiCurrencyUsd
} from "@mdi/js";

const plofile = makeStyles((theme) => ({
  lessonInfo: {
    display: "inline-block",
    width: "70%",
    padding: "0px 0px 40px 40px",
  },
  cardHeader: {
    display: "inline-block",
    verticalAlign: "top",
    fontWeight: "bold",
    marginLeft: "30px",
    marginTop: "30px",
    cursor: "pointer"
  },
  cardContent: {
    width: "100%",
  },
  info: {
    textAlign: "center",
    marginTop: "20px",
    margin: "0px 10px",
    display: "inline-block",
    width: "30%"
  },
  descriptionTop: {
    marginTop: "40px",
    fontWeight: "bold"
  },
  description: {
    marginTop:"30px",
    width: "90%"

  }
}));

export default function LessonDetail(props) {
  const classes = plofile();
  return (
    <Card className={classes.lessonInfo}>
      <CardContent className={classes.cardContent}>
        <Typography  className={classes.info}>
          <Icon path={mdiCalendarClock} size="30px" />
          &emsp;{props.lessonTime}
        </Typography>

        <Typography className={classes.info}>
          <Icon path={mdiMapMarkerRadiusOutline} size="30px" />
          &emsp;{props.lessonPlace}
        </Typography>

        <Typography className={classes.info}>
          <Icon path={mdiCurrencyUsd} size="30px" />
          &emsp;{props.lessonPrice} 円
        </Typography>

        <Typography
          variant="h6"
          display="block"
          className={classes.descriptionTop}
        >
          学べる内容
        </Typography>
        <Typography
          variant="body1"
          display="block"
          className={classes.description}
        >
          {props.lessonDescription}
        </Typography>
      </CardContent>
    </Card>
  );
}
