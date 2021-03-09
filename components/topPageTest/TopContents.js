//トップページのコンテンツ
import React from "react"
import Caption from "./parts/Caption"
import Description from "./parts/Descriotion"
import classNames from "classnames" // nodejs library that concatenates classes
import { makeStyles } from "@material-ui/core/styles"
import Content1 from "./content1/Content1"
import Content2 from "./content2/Content2"
import Card from "@material-ui/core/Card"

const style = makeStyles((theme) => ({
  contents: {
    backgroundColor: "rgba(255, 255, 255, 0.75)",
    width: "98%",
    margin: "0 auto"
  },
  body: {
    backgroundColor: "#4C87C9",
    backgroundImage: "url(../../../static/Snowboarding.jpg)"
  }
}))

const TopPage = () => {
  const classes = style()
  return (
    <div className={classes.body}>
      <Caption />
      <Card className={classes.contents}>
        <Description />
        <Content1 />
        <Content2 />
      </Card>
    </div>
  )
}

export default TopPage
