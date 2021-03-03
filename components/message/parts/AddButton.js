import React from "react"
import { makeStyles } from "../../lessoninfo/parts/node_modules/@material-ui/core/styles"
import Button from "../../lessoninfo/parts/node_modules/@material-ui/core/Button"

export default function AddButton(props) {
  const useStyles = makeStyles((theme) => ({
    btn: {
      width: "80px",
      marginLeft: "210px"
    }
  }))

  const classes = useStyles()

  return (
    <Button
      variant="outlined"
      className={classes.btn}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      送信
    </Button>
  )
}
