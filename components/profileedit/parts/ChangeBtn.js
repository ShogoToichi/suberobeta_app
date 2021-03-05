import React, { useContext } from "react"
import Link from "next/link"
import GetImage from "../GetImage"
import { makeStyles } from "@material-ui/styles"
import Button from "@material-ui/core/Button"
import ButtonGroup from "@material-ui/core/ButtonGroup"
import { Color } from "../../../static/colors"

const profileEdit = makeStyles((props) => ({
  buttonGroup: {
    marginTop: "40px",
    textAlign: "center"
  },
  button: {
    width: "200px",
    backgroundColor: useContext(Color).colors.Green,
    color: "white",
    margin: "0px 20px"
  }
}))

export default function ChangeBtn(props) {
  const classes = profileEdit()
  return (
    <div className={classes.buttonGroup}>
      <ButtonGroup disableElevation variant="outlined">
        <Link href="/mypage">
          <Button
            className={classes.button}
            onClick={props.onClick}
            variant="contained"
          >
            変更
          </Button>
        </Link>
        <Link href="/mypage">
          <Button className={classes.button} variant="contained">
            キャンセル
          </Button>
        </Link>
      </ButtonGroup>
    </div>
  )
}
