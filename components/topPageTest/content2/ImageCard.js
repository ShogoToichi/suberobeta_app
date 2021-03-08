import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import CardHeader from "@material-ui/core/CardHeader"
import Img from "../../commonParts/Img"

const Styles = makeStyles((theme) => ({
  card: {
    width: "12rem"
    // width: "150%"
  },
  lessonImage: {
    backgroundColor: "rgba(0,0,0,0.1)",
    width: "12rem"
  },
  cardCreator: {
    width: "100%"
  },
  cardNumber: {
    fontSize: "1.5rem"
  },
  test1: {
    // backgroundColor: "yellow",
    margin: "0 0.5rem 0 0.7rem"
  },
  test2: {
    // backgroundColor: "blue"
  },
  test3: {
    // backgroundColor: "red"
  },
  test4: {
    width: "100%",
    textAlign: "Right",
    fontSize: "0.9rem"
  }
}))

const ImageCard = (props) => {
  const classes = Styles()
  return (
    <Card className={classes.card}>
      <Grid container direction="column" justify="center" alignItems="center">
        <Grid item className={classes.lessonImage}>
          <Img src={props.lessonImageUrl} size="100" />
        </Grid>
        <Grid item>
          <CardHeader
            title={props.lessonName}
            titleTypographyProps={{ align: "center" }}
          />
        </Grid>
        <Grid item className={classes.cardCreator}>
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="center"
            className={classes.test3}
          >
            <Grid item className={classes.test1}>
              <Img src={props.createrImageUrl} size="30" />
            </Grid>
            <Grid item className={classes.test2}>
              {props.createrName}
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.test4}>
          {props.lessonValue}
        </Grid>
      </Grid>
    </Card>
  )
}

export default ImageCard
