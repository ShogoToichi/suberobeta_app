import React, { useContext } from "react"
import Link from "next/link"
import Typography from "@material-ui/core/Typography"
import Img from "../../commonParts/Img"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import { Color } from "../../../static/colors"

const createrdetail = makeStyles((theme) => ({
  createrdetail: {
    width: "15%",
    display: "inline-block",
    verticalAlign: "top",
    marginRight: "20px",
    textAlign: "center"
  },
  img: {
    display: "block",
    cursor: "pointer"
  },
  name: {
    display: "block",
    margin: "20px 0px",
    color: useContext(Color).colors.Green,
    cursor: "pointer"
  }
}))

export default function CreaterDetail(props) {
  const classes = createrdetail()
  return (
    <div className={classes.createrdetail}>
      <Card className={classes.card}>
          <Link href={`/profile_show/${props.userId}`}>
        <div className={classes.img}>
            <Img src={props.imageUrl} size="100" />
        </div>
          </Link>

        <Link href={`/profile_show/${props.userId}`}>
          <Typography variant="h9" className={classes.name}>
            {props.name}
          </Typography>
        </Link>

        <CardContent></CardContent>
      </Card>
    </div>
  )
}
