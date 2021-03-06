import React, { useContext } from "react"
import { makeStyles } from "@material-ui/styles"
import Link from "next/link"
import Box from "@material-ui/core/Box"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import Icon from "@material-ui/core/Icon"
import { Color } from "../../../static/colors"

const myLessonList = makeStyles((theme) => ({
  list: {
    marginTop: "40px"
  },
  box: {
    color: "white",
    fontWeight: "bold",
    backgroundColor: useContext(Color).colors.Green
  },
  addBtn: {
    textAlign: "center"
  },
  btn: {
    backgroundColor: useContext(Color).colors.Green,
    color: "white"
  }
}))

export default function MyLessonListUi(props) {
  const classes = myLessonList()
  return (
    <div className={classes.list}>
      <div>
        <Box p={1} className={classes.box}>
          <Typography variant="subtitle1">　メッセージ一覧</Typography>
        </Box>
      </div>
      {props.items}
    </div>
  )
}
