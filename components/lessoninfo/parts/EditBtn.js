import React, {useContext} from "react"
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
  editBtn: {
    fontWeight: "bold",
    fontSize: "20px",
    marginBottom: "15px",
    backgroundColor: useContext(Color).colors.bgGreen
  }
}))

export default function EditBtn(props) {
  const classes = plofile()
  return (
    <div className={classes.btnArea}>
      <Link href={`/lesson_edit/${props.lessonId}`}>
        <Button className={classes.editBtn} variant="outlined">
          レッスン編集
        </Button>
      </Link>
    </div>
  )
}
