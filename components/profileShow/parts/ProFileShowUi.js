import React, { useContext } from "react"
import Link from "next/link"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import { CardHeader } from "@material-ui/core"
import Avatar from "@material-ui/core/Avatar"
import Title from "../../commonParts/Title"
import { Color } from "../../../static/colors"

const myProfile = makeStyles((theme) => ({
  myProfile: {
    width: "80%"
  },
  card: {
    marginTop: "20px"
  },
  btn: {
    backgroundColor: useContext(Color).colors.Green,
    color: "white"
  },
  title: {
    fontWeight: "bold",
    margin: "5px",
    borderBottom: "solid 1px #BBB",
    paddingBottom: "7px"
  },
  description: {
    margin: "30px"
  }
}))

export default function MyProfileDetail(props) {
  const classes = myProfile()
  return (
    <>
      <Title title={`${props.name}さんのプロフィール`} />
      <div className={classes.myProfile}>
        <Card>
          <CardHeader
            avatar={
              <Avatar
                sizes="string"
                src={props.imageUrl}
                className={classes.avatar}
              ></Avatar>
            }
            title={props.name}
          />

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
    </>
  )
}