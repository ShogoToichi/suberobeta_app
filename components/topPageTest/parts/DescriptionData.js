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
    // height: "300px",
    "@media (max-width: 800px)": {
      marginBottom: "5px"
    }
  },
  cardHeader: {
    fontWeight: "bold"
    // fontSize: "2rem",
    // color: "red"
  },
  cardContent: {
    // textAlign: "center",
    height: "80px",
    "@media (max-width: 1200px)": {
      height: "120px"
    },
    "@media (max-width: 500px)": {
      height: "80px"
    }
  },
  LinkBtn: {
    backgroundColor: useContext(Color).colors.bgGreen,
    width: "200px"
  }
}))

export default function DescriotionData(props) {
  const classes = topTitle()
  const router = useRouter()

  return (
    <Container maxWidth="md" component="main" className={classes.container}>
      <Card className={classes.card}>
        <Grid
          container
          direction="column"
          justifiy="space-around"
          alignItems="center"
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
                className={classes.LinkBtn}
                onClick={() => router.push(props.herf)}
              >
                {props.btnName}
              </Button>
            </CardActions>
          </Grid>
        </Grid>
      </Card>
    </Container>
  )
}
