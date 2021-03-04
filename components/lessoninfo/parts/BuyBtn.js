import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"
import Link from "next/link"

const plofile = makeStyles({
  btnArea: {
    display: "inline-block",
    float: "right",
    marginRight: "100px",
    marginTop: "15px"
  },
  buyBtn: {
    marginLeft: "0px",
    fontSize: "23px",
    marginBottom: "15px"
  }
})

export default function BuyBtn(props) {
  const classes = plofile()
  return (
    <div className={classes.btnArea}>
      <Link href={`/message/${props.lessonId}/${props.buyerId}`}>
        <Button
          className={classes.buyBtn}
          size="large"
          variant="outlined"
          onClick={props.onClick}
        >
          購入
        </Button>
      </Link>
    </div>
  )
}
