import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Card from "@material-ui/core/Card"
import Img from "../../commonParts/Img"
import Link from "next/link"
import { Typography } from "@material-ui/core"
import Icon from "@mdi/react"
import {
  mdiCalendarClock,
  mdiMapMarkerRadiusOutline,
  mdiCurrencyUsd
} from "@mdi/js"

const Styles = makeStyles((theme) => ({
  card: {
    width: "17rem",
    height: "19.5rem",
    padding: "0.5rem",
    margin: "0.5rem",
    tableLayout: "fixed",
    cursor: "pointer"
  },
  lessonName: {
    textAlign: "center",
    fontWeight: "bold"
  },
  img: {
    textAlign: "center",
    marginBottom: "0.5rem"
  },

  info: {
    width: "100%",
    textAlign: "left",
    fontWeight: "bold",
    marginLeft: "0.8rem"
  }
}))

const ImageCard = (props) => {
  const classes = Styles()
  return (
    <Card className={classes.card} key={props.key}>
      <Link href={`/profile_show/${props.createrId}`}>
        <Grid
          container
          direction="column"
          spacing={1}
          justify="center"
          alignItems="stretch"
        >
          <Grid item xs={11}>
            <Typography varinat="body1" className={classes.lessonName}>
              {props.lessonName}
            </Typography>
          </Grid>
          <Grid item className={classes.img}>
            <Img src={props.createrImageUrl} size="100" />
          </Grid>
          <Grid item xs={10}>
            <Typography variant="body2" className={classes.info}>
              <Icon path={mdiCalendarClock} size="1.5rem" />
              &emsp;{props.lessonTime}
            </Typography>
          </Grid>
          <Grid item xs={10}>
            <Typography align="left" variant="body2" className={classes.info}>
              <Icon path={mdiMapMarkerRadiusOutline} size="1.2rem" />
              &emsp;{props.lessonPlace}
            </Typography>
          </Grid>
          <Grid item xs={10}>
            <Typography variant="body2" className={classes.info}>
              <Icon path={mdiCurrencyUsd} size="1.5rem" />
              &emsp;{props.lessonPrice}円
            </Typography>
          </Grid>
        </Grid>
      </Link>
    </Card>
  )
}

export default ImageCard
