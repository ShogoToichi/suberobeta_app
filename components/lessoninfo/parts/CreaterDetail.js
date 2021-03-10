import React, { useContext } from "react"
import Link from "next/link"
import Typography from "@material-ui/core/Typography"
import Img from "../../commonParts/Img"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import { Color } from "../../../static/colors"

const createrdetail = makeStyles((theme) => ({
  createrdetail: {
    // width: "20%",
    // display: "inline-block",
    // verticalAlign: "top",
    // marginRight: "20px",
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
  },
  evaluation: {
    display: "inline-box",
    verticalAlign: "top",
    flexDirection: "row-reverse",
    "& input": {
      display: "none"
    },
    "& label": {
      position: "relative",
      color: "#ffcc00"
    },
    margin: "0px 0px 20px 20px"
  },
  introduction: {
    margin: "10px"
  },
  introductTitle: {
    display: "block",
    textAlign: "center"
  },
  introductDescription: {
    display: "block",
    textAlign: "center",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap"
  }
}))

export default function CreaterDetail(props) {
  const classes = createrdetail()
  return (
    <Card className={classes.createrdetail}>
      <div className={classes.head}>
        <Link href={`/profile_show/${props.userId}`}>
          <div className={classes.img}>
            <Img src={props.imageUrl} size="100" />
          </div>
        </Link>

        <Link href={`/profile_show/${props.userId}`}>
          <Typography variant="body1" className={classes.name}>
            {props.name}
          </Typography>
        </Link>
      </div>

      <div className={classes.evaluation}>
        <Typography variant="body1" className={classes.assessment}>
          評価 :
          <input id="star1" type="radio" name="star" value="5" />
          <label for="star1">★</label>
          <input id="star2" type="radio" name="star" value="4" />
          <label for="star2">★</label>
          <input id="star3" type="radio" name="star" value="3" />
          <label for="star3">★</label>
          <input id="star4" type="radio" name="star" value="2" />
          <label for="star4">★</label>
          <input id="star5" type="radio" name="star" value="1" />
          <label for="star5">★</label>
        </Typography>
      </div>

      <div className={classes.introduction}>
        <Typography variant="body1" className={classes.introductTitle}>
          自己紹介
        </Typography>
        <Typography variant="body2" className={classes.introductDescription}>
          {props.introduction}
        </Typography>
      </div>
    </Card>
  )
}
