import React, { useContext } from "react";
import Link from "next/link";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { CardHeader } from "@material-ui/core";
import Title from "../../commonParts/Title";
import { Color } from "../../../static/colors";
import Img from "../../commonParts/Img";

const myProfile = makeStyles((theme) => ({
  myprof: {
    width: "80%",
  },
  card: {
    marginTop: "20px",
  },
  btn: {
    backgroundColor: useContext(Color).colors.Green,
    color: "white",
  },
  title: {
    fontWeight: "bold",
    margin: "5px",
    borderBottom: "solid 1px #BBB",
    paddingBottom: "7px",
  },
  description: {
    margin: "30px",
  },
}));

export default function MyProfileDetail(props) {
  const classes = myProfile()
  return (
    <>
      <Title title={"My Page"} />
      <div className={classes.myProfile}>
        <Card>
          <Img className={classes.img} src={props.imageurl} size="70" />
          <CardHeader
            action={
              <Link href="/profile_edit">
                <Button variant="outlined" size="large" className={classes.btn}>
                  プロフィール変更
                </Button>
              </Link>
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
