import React, { useContext } from "react"
import Link from "next/link"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import Title from "../../commonParts/Title"
import { Color } from "../../../static/colors"
import Img from "../../commonParts/Img"
import Grid from "@material-ui/core/Grid"

const myProfile = makeStyles((theme) => ({
  card: {
    marginTop: "1rem"
  },
  btn: {
    backgroundColor: useContext(Color).colors.Green,
    color: "white"
  },
  name: {
    margin: "0rem 1.5rem"
  },
  title: {
    fontWeight: "bold",
    margin: "0.3rem",
    borderBottom: "solid 1px #BBB",
    paddingBottom: "0.5rem"
  },
  description: {
    whiteSpace: "pre-wrap" // 改行反映用css
  }
}))

export default function MyProfileDetail(props) {
  const classes = myProfile()
  return (
    <>
      <Title title={`${props.name}さんのプロフィール`} />
      <Card>
        <Grid container spacing={1} derection="row" alignItems="center">
          <Grid item>
            <Img size={80} src={props.imageUrl} className={classes.img} />
          </Grid>
          <Grid item>
            <Typography variant="h5" className={classes.name}>
              {props.name}
            </Typography>
          </Grid>
          <Grid item xs={10}>
            <CardContent>
              <Typography variant="h5" className={classes.title}>
                自己紹介
              </Typography>
              <Typography variant="h6" className={classes.description}>
                {props.introduction}
              </Typography>
            </CardContent>
          </Grid>
        </Grid>
      </Card>
    </>
  )
}
