import React from "react"
import IconCard from "./IconCard"
import Grid from "@material-ui/core/Grid"
import { makeStyles } from "@material-ui/core/styles"

const styles = makeStyles((theme) => ({
  container: {
    // backgroundColor: "#E0EBF5"
  }
}))

const IconCards = () => {
  const classes = styles()
  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      spacing={3}
      className={classes.container}
    >
      <Grid item>
        <IconCard
          // icon={}
          title={"ユーザー数"}
          number={"10,000"}
          unit={"人"}
        />
      </Grid>
      <Grid item>
        <IconCard
          // icon={}
          title={"メンター数"}
          number={"1,000"}
          unit={"人"}
        />
      </Grid>
      <Grid item>
        <IconCard
          // icon={}
          title={"総契約数"}
          number={"10,000"}
          unit={"件"}
        />
      </Grid>
    </Grid>
  )
}

export default IconCards
