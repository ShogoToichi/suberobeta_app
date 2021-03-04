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
    marginTop: "40px",
    width: "80%"
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
      <div className={classes.list}>
        <Box p={1} className={classes.box}>
          <Typography variant="h8">　投稿したレッスン</Typography>
        </Box>
      </div>
      {props.items}
      <div className={classes.addBtn}>
        <Link href="/lesson_add">
          <Button
            variant="contained"
            size="large"
            startIcon={<Icon>add_circle</Icon>}
            className={classes.btn}
          >
            レッスン追加
          </Button>
        </Link>
        <button onClick={props.getFireData}>検証</button>
      </div>
    </div>
  )
}
