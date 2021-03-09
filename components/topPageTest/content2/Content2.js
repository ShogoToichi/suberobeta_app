import React from "react"
import Grid from "@material-ui/core/Grid"
import { makeStyles } from "@material-ui/core/styles"
import ImageCardsList from "./ImageCardsList"
import { Typography } from "@material-ui/core"
import Container from "@material-ui/core/Container"

const styles = makeStyles((theme) => ({
  container: {
    backgroundColor: "#E0EBF5",
    padding: "50px 0 50px 0"
  },
  text1: {
    fontSize: "1.5rem",
    textAlign: "left",
    // backgroundColor: "red",
    width: "100%",
    fontWeight: "bold"
  }
  // test1: {
  // backgroundColor: "green",
  // width: "100%"
  // }
}))

const Content2 = () => {
  const classes = styles()
  return (
    <Container maxWidth="lg">
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        spacing={2}
      >
        <Grid item xs={12} className={classes.text1}>
          人気のレッスン
        </Grid>
        <Grid item>
          <ImageCardsList />
        </Grid>
      </Grid>
    </Container>
  )
}

export default Content2
