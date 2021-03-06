import React, { useContext } from "react"
import { makeStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"
import { useRouter } from "next/router"
import { Color } from "../../../static/colors"
import Typography from "@material-ui/core/Typography"

const plofile = makeStyles((theme) => ({
  btnArea: {
    display: "inline-block",
    float: "right",
    marginRight: "6rem",
    marginTop: "1rem"
  },
  editBtn: {
    fontWeight: "bold",
    fontSize: "1.2rem",
    marginBottom: "1rem",
    backgroundColor: useContext(Color).colors.bgGreen
  }
}))

export default function EditBtn(props) {
  const classes = plofile()
  const router = useRouter()
  return (
    <Button
      className={classes.editBtn}
      variant="outlined"
      onClick={() => router.push(`/lesson_edit/${props.lessonId}`)}
    >
      <Typography variant="h6">レッスン編集</Typography>
    </Button>
  )
}
