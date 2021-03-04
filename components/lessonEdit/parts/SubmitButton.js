import Button from "@material-ui/core/Button"
import React, { useContext } from "react"
import Link from "next/link"
import { makeStyles } from "@material-ui/styles"
import { Color } from "../../../static/colors"

const inputForm = makeStyles((theme) => ({
  btnArea: {
    textAlign: "center"
  },
  addBtn: {
    backgroundColor: useContext(Color).colors.bgGreen,
    marginTop: "10px",
    margin: "0 auto",
    width: "200px"
  }
}))

export default function InputForm(props) {
  const classes = inputForm()
  return (
    <div className={classes.btnArea}>
      {/* <Link href="/mypage"> */}
      <Button
        className={classes.addBtn}
        variant="outlined"
        size="large"
        onClick={props.onClick}
      >
        編 集
      </Button>
      {/* </Link> */}
    </div>
  )
}
