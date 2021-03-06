import React from "react"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Card from "@material-ui/core/Card"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import CardHeader from "@material-ui/core/CardHeader"
import Button from "@material-ui/core/Button"
import { useRouter } from "next/router"

const topTitle = makeStyles((theme) => ({
  container: {
    whiteSpace: "pre-wrap"
  },
  card: {
    borderRadius: "10px",
    boxShadow: "3px 6px 10px 2px #999 ",
    animation: "$fadeIn 2s ease 0.3s 1 normal"
  },
  cardHeader: {
    width: "100%",
    display: "block",
    "& title": {
      fontWeight: "bold"
    }
  },
  LinkBtn: {
    backgroundColor: "#396",
    color: "white",
    width: "15rem",
    boxShadow: "1px 1px 2px 1px #DDD"
  },
  card_img: {
    height: "100px"
  },

  "@keyframes fadeIn": {
    from: {
      opacity: 0
    },
    to: {
      opacity: 1
    }
  }
}))

export default function DescriotionData(props) {
  const classes = topTitle()
  const router = useRouter()

  return (
    <Card className={classes.card}>
      <Grid
        container
        direction="column"
        justify="space-between"
        alignItems="center"
        className={classes.test1}
      >
        <Grid item>
          <CardHeader
            title={props.title}
            titleTypographyProps={{ align: "center" }}
            subheaderTypographyProps={{ align: "center" }}
            className={classes.cardHeader}
          />
        </Grid>
        <Grid item className={classes.img_item}>
          <img src={props.src} className={classes.card_img} />
        </Grid>
        <Grid item>
          <CardContent className={classes.cardContent}>
            <Typography variant="body1" color="textSecondary">
              {props.content1}
              <br />
              {props.content2}
            </Typography>
          </CardContent>
        </Grid>
        <Grid item>
          <CardActions>
            <Button
              variant="contained"
              size="medium"
              className={classes.LinkBtn}
              onClick={() => router.push(props.herf)}
            >
              {props.btnName}
            </Button>
          </CardActions>
        </Grid>
      </Grid>
    </Card>
  )
}
