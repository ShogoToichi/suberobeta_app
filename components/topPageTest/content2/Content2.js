import React, { useContext} from "react"
import Grid from "@material-ui/core/Grid"
import { makeStyles } from "@material-ui/core/styles"
import ImageCardsList from "./ImageCardsList"
import { Typography } from "@material-ui/core"
import Container from "@material-ui/core/Container"
import { Color } from "../../../static/colors"

const styles = makeStyles((theme) => ({
  container: {
    backgroundColor: "#E0EBF5",
    padding: "50px 0 50px 0"
  },
  mainTitle: {
    color: useContext(Color).colors.header,
    textWeight: "bold",
    marginBottom: "0.5rem",
    textAlign: "center",
    marginTop: "6rem",
    fontSize: "2.2rem"
  },
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
        <Grid item xs={12} >
          <Typography className={classes.mainTitle}>人気のレッスン</Typography>
        </Grid>
        <Grid item>
          <ImageCardsList />
        </Grid>
      </Grid>
    </Container>
  )
}

export default Content2
