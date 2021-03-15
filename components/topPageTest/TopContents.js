//トップページのコンテンツ
import React from "react"
import Caption from "./parts/Caption"
import Description from "./parts/Descriotion"
import classNames from "classnames" // nodejs library that concatenates classes
import { makeStyles } from "@material-ui/core/styles"
import Content1 from "./content1/Content1"
import Content2 from "./content2/Content2"
import Card from "@material-ui/core/Card"
import Grid from "@material-ui/core/Grid"
// import Body from ""

const style = makeStyles((theme) => ({
  contents: {
    backgroundColor: "rgba(230, 256, 230, 0.75)",
    width: "100%",
    margin: "0 auto"
  },
}))

const TopPage = () => {
  const classes = style()
  return (
    <div>
      <Grid container direction="column" justify="flex-start">
        <Grid item className={classes.body}>
          <Caption />
        </Grid>
        <Grid item>
          <Card className={classes.contents}>
            <Description />
            <Content1 />
            <Content2 />
          </Card>
        </Grid>
      </Grid>
    </div>
  )
}

export default TopPage
