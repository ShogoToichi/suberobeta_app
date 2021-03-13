import React, { useContext } from "react"
import Link from "next/link"
import GetImage from "../GetImage"
import { makeStyles } from "@material-ui/styles"
import Button from "@material-ui/core/Button"
import ButtonGroup from "@material-ui/core/ButtonGroup"
import { Color } from "../../../static/colors"
import Grid from "@material-ui/core/Grid"

const profileEdit = makeStyles((props) => ({
  buttonGroup: {
    marginTop: "2rem",
    textAlign: "center"
  },
  button: {
    width: "12rem",
    backgroundColor: useContext(Color).colors.Green,
    color: "white"
  }
}))

export default function ChangeBtn(props) {
  const classes = profileEdit()
  return (
    <Grid
      container
      container
      spacing={3}
      justify="center"
      className={classes.buttonGroup}
    >
      <Grid item xs={10} sm={5} lg={3}>
        <Link href="/mypage">
          <Button
            className={classes.button}
            onClick={props.onClick}
            variant="contained"
          >
            変更
          </Button>
        </Link>
      </Grid>
      <Grid item item xs={10} sm={5} lg={3}>
        <Link href="/mypage">
          <Button className={classes.button} variant="contained">
            キャンセル
          </Button>
        </Link>
      </Grid>
    </Grid>
  )
}
