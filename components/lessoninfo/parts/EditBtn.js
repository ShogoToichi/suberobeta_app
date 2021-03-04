import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"
import Link from "next/link"

const plofile = makeStyles({
  btnarea: {
    display: "inline-block",
    float: "right",
    marginRight: "100px",
    marginTop: "15px"
  },
  editbtn: {
    marginLeft: "0px",
    fontSize: "23px",
    marginBottom: "15px"
  }
})

export default function EditBtn(props) {
  const classes = plofile()
  return (
    <div className={classes.btnarea}>
      <Link href={"/mypage"}>
        <Button
          className={classes.editbtn}
          size="large"
          variant="outlined"
          onClick={props.onClick}
        >
          レッスン編集
        </Button>
      </Link>
    </div>
  )
}
