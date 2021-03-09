import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Card from "@material-ui/core/Card"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import CardHeader from "@material-ui/core/CardHeader"

const Styles = makeStyles((theme) => ({
  card: {
    width: "20rem"
  },
  cardContent: {
    // backgroundColor: "red"
  },
  cardNumber: {
    fontSize: "2rem"
  }
}))

// TODO: iconの設定なり

const IconCard = (props) => {
  const classes = Styles()
  return (
    <Card className={classes.card}>
      <CardHeader
        title={props.title}
        titleTypographyProps={{ align: "center" }}
      />
      <CardContent className={classes.cardContent}>
        <Grid container direction="row" justify="center" alignItems="flex-end">
          <Grid item className={classes.cardNumber}>
            {props.number}
          </Grid>
          <Grid item>{props.unit}</Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default IconCard
