import React, { useContext } from "react"
import Typography from "@material-ui/core/Typography"
import { makeStyles, withStyles } from "@material-ui/core/styles"
import Container from "@material-ui/core/Container"
import Grid from "@material-ui/core/Grid"
import Card from "@material-ui/core/Card"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import CardHeader from "@material-ui/core/CardHeader"
import Button from "@material-ui/core/Button"
import { Color } from "../../../static/colors"
import { useRouter } from "next/router"

// Warning: Failed prop type: Invalid prop `variant` of value `h8`
// supplied to `ForwardRef(Typography)`,
// expected one of ["h1","h2","h3","h4","h5","h6","subtitle1",
// "subtitle2","body1","body2","caption","button","overline","srOnly","inherit"].

const topTitle = makeStyles((theme) => ({
  container: {
    // backgroundColor: useContext(Color).colors.bgGreen,
    whiteSpace: "pre-wrap"
  },
  card: {
    width: "100%",
    "@media (max-width: 800px)": {}
  },
  cardHeader: {
    fontWeight: "bold"
    // fontSize: "2rem",
    // color: "red"
  },
  cardContent: {
    // textAlign: "center",
    // height: "30rem"
  },
  LinkBtn: {
    // backgroundColor: useContext(Color).colors.bgGreen,
    backgroundColor: useContext(Color).colors.header,
    width: "15rem"
    // marginBottom: "1rem"
  },
  test1: {
    height: "16rem"
    // backgroundColor: "red"
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
              // fullWidth
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
