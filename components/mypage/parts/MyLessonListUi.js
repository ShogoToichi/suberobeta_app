import React, { useContext } from "react"
import { makeStyles } from "@material-ui/styles"
import Grid from "@material-ui/core/Grid"
import Box from "@material-ui/core/Box"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import Icon from "@material-ui/core/Icon"
import { Color } from "../../../static/colors"
import { useRouter } from "next/router"

const myLessonList = makeStyles((theme) => ({
  list: {
    marginTop: "40px"
  },
  box: {
    color: "white",
    fontWeight: "bold",
    backgroundColor: useContext(Color).colors.Green
  },
  btn: {
    backgroundColor: useContext(Color).colors.Green,
    color: "white"
  }
}))

export default function MyLessonListUi(props) {
  const classes = myLessonList()
  const router = useRouter()
  return (
    <div className={classes.list}>
      <Box p={1} className={classes.box}>
        <Typography variant="subtitle1">　投稿したレッスン</Typography>
      </Box>

      {props.items}

      <Grid container justify="center">
        <Button
          variant="contained"
          size="large"
          startIcon={<Icon>add_circle</Icon>}
          onClick={() => router.push("/lesson_add")}
          className={classes.btn}
        >
          レッスン追加
        </Button>
      </Grid>
    </div>
  )
}
