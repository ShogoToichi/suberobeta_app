import React,{ useContext } from "react"
import { makeStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"
import Link from "next/link"
import { Color } from "../../../static/colors"

const plofile = makeStyles((props) => ({
  btnarea: {
    display: "inline-block",
    float: "right",
    marginRight: "100px",
    marginTop: "15px"
  },
  buybtn: {
    marginLeft: "0px",
    fontSize: "23px",
    marginBottom: "15px",
    backgroundColor: useContext(Color).colors.bgGreen,
  }
}));

export default function BuyBtn(props) {
  const classes = plofile()
  return (
    <div className={classes.btnarea}>
      <Link href={`/message/${props.lessonid}/${props.buyerid}`}>
        <Button
          className={classes.buybtn}
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
