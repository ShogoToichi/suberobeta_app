import React, { useContext } from "react"
import Link from "next/link"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import { CardHeader } from "@material-ui/core"
import Title from "../../commonParts/Title"
import { Color } from "../../../static/colors"
import Img from "../../commonParts/Img"

const myProfile = makeStyles((theme) => ({
  card: {
    marginTop: "1rem"
  },
  img: {
    display: "inline-block",
    verticalAlign: "top"
  },
  name: {
    display: "inline-block",
    varticalAlign: "top",
    margin: "3rem 0rem 0rem 0.5rem"
  },
  cardHeader: {
    display: "inline-block",
    verticalAlign: "top",
    width: "80%"
  },
  btn: {
    backgroundColor: useContext(Color).colors.Green,
    color: "white",
    float: "right"
  },
  title: {
    fontWeight: "bold",
    margin: "0.5rem",
    borderBottom: "solid 1px #BBB",
    paddingBottom: "0.8rem"
  },
  description: {
    margin: "1rem",
    whiteSpace: "pre-wrap" // 改行反映用css
  }
}))

export default function MyProfileDetail(props) {
  const classes = myProfile()
  return (
    <div className={classes.myprof}>
      <Title title={"My Page"} />
      <div className={classes.myProfile}>
        <Card className={classes.card}>
          <Img className={classes.img} src={props.imageUrl} size="70" />
          <Typography variant="h5" className={classes.name}>
            {props.name}
          </Typography>
          <Link href="/profile_edit">
            <Button variant="outlined" size="large" className={classes.btn}>
              プロフィール変更
            </Button>
          </Link>

          <CardContent>
            <Typography variant="h5" className={classes.title}>
              自己紹介
            </Typography>
            <Typography variant="h6" className={classes.description}>
              {props.introduction}
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
