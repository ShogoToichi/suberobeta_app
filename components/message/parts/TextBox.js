import { PinDropSharp } from "@material-ui/icons"
import React from "react"
import { makeStyles } from "../../lessoninfo/parts/node_modules/@material-ui/core/styles"
import TextField from "@material-ui/core/TextField"

export default function TextBox(props) {
  const useStyles = makeStyles((theme) => ({
    root: {
      margin: theme.spacing(1),
      width: "500px"
    }
  }))

  const classes = useStyles()

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField
        id="outlined-basic"
        variant="outlined"
        onChange={props.onChange}
        value={props.value}
        multiline={true}
        rows={3}
        fullWidth={true}
        disabled={props.disabled}
      />
    </form>
  )
}
