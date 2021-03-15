import React, { useContext } from "react"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import { Typography } from "@material-ui/core"
import { Color } from "../../../static/colors"
import Img from "../../commonParts/Img"

const Styles = makeStyles((theme) => ({
  card: {
    width: "30rem"
  },
  cardTitle: {
    fontWeight: "bold",
    marginTop: "1rem",
    "& span": {
      color: useContext(Color).colors.Green
    }
  }
}))


const IconCard = (props) => {
  const classes = Styles()
  return (
    <Card className={classes.card}>
      <Grid container direction="row">
        <Grid item xs={4} lg={3}>
          <Img src={props.src} size={80} className={classes.cardImg} />
        </Grid>
        <Grid item xs={8} lg={8}>
          <Grid container direction="colum" alignItems="flex-end">
            <Grid item>
              <Typography variant="body1" className={classes.cardTitle}>
                <span>{props.stepNumber}.</span> {props.title}
              </Typography>
            </Grid>
            <Grid item>
              <CardContent className={classes.cardContent}>
                <Typography variant="body2" className={classes.cardDescription}>
                  {props.description}
                </Typography>
              </CardContent>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Card>
  )
}

export default IconCard
