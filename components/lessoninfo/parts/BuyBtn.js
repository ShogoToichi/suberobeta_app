import React, { useContext } from "react"
import { makeStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"
import Link from "next/link"
import { Color } from "../../../static/colors"

const plofile = makeStyles((theme) => ({
  btnArea: {
    display: "inline-block",
    float: "right",
    marginRight: "100px",
    marginTop: "15px"
  },
  buyBtn: {
    marginLeft: "0px",
    fontSize: "23px",
    marginBottom: "15px",
    backgroundColor: useContext(Color).colors.bgGreen
  }
}))

export default function BuyBtn(props) {
  const classes = plofile()
  return (
    <div className={classes.btnArea}>
      <Link href={`/message/${props.lessonId}/${props.buyerId}`}>
        <Button
          className={classes.buyBtn}
          variant="outlined"
          onClick={props.onClick}
        >
          購入
        </Button>
      </Link>
    </div>
  )
}
