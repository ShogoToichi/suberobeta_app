import React, { useContext } from "react"
import { makeStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"
import { Color } from "../../../static/colors"
import { Typography } from "@material-ui/core"

const plofile = makeStyles((theme) => ({
  buyBtn: {
    fontWeight: "bold",
    backgroundColor: useContext(Color).colors.bgGreen
  }
}))

export default function BuyBtn(props) {
  const classes = plofile()
  return (
    <Button
      className={classes.buyBtn}
      variant="outlined"
      onClick={props.onClick}
    >
      <Typography variant="h6">購入</Typography>
    </Button>
  )
}
