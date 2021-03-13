import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"

export default function AddButton(props) {
  const useStyles = makeStyles((theme) => ({
    btn: {
      width: "30%",
      marginLeft: "35%"
    }
  }))

  const classes = useStyles()

  return (
    <div className={classes.btn}>
      <Button
        variant="outlined"
        onClick={props.onClick}
        // disabled={props.disabled}
      >
        送信
      </Button>
    </div>
  )
}
