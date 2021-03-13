import React, { useContext } from "react"
import { makeStyles } from "@material-ui/styles"
import Box from "@material-ui/core/Box"
import Typography from "@material-ui/core/Typography"
import { Color } from "../../../static/colors"

const myLessonList = makeStyles((theme) => ({
  list: {
    marginTop: "2rem"
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
          <Typography variant="body1">　受付中のレッスン</Typography>
        </Box>
      </div>
      {props.items}
    </div>
  )
}
