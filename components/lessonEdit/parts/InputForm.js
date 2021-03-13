import React, { useContext } from "react"
import "firebase/storage"
import Link from "next/link"
import { makeStyles } from "@material-ui/styles"
import Typography from "@material-ui/core/Typography"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import { Color } from "../../../static/colors"

const inputForm = makeStyles((theme) => ({
  inputForm: {
    marginTop: "3rem"
  },
  contents: {
    marginTop: "1.2rem"
  },
  detailInfo: {
    marginTop: "1.2rem",
    margin: "0 auto"
  },
}))

export default function InputForm(props) {
  const classes = inputForm()
  return (
    <div className={classes.inputForm}>
      <div>
        <Typography className={classes.inputTitle} variant="body1">
          レッスンに関する情報を入力してください。
        </Typography>
        <TextField
          required
          defaultValue={props.lessonName}
          id="standard-textarea"
          label="レッスン名"
          multiline
          fullWidth
          onChange={props.onChangeLessonName}
          className={classes.contents}
        />
        <TextField
          required
          defaultValue={props.lessonTime}
          id="standard-textarea"
          label="日時"
          multiline
          fullWidth
          onChange={props.onChangeLessonTime}
          className={classes.contents}
        />
        <TextField
          required
          defaultValue={props.lessonPlace}
          id="standard-textarea"
          label="場所"
          multiline
          fullWidth
          onChange={props.onChangeLessonPlace}
          className={classes.contents}
        />
        <TextField
          required
          defaultValue={props.lessonPrice}
          id="standard-textarea"
          label="料金"
          multiline
          fullWidth
          onChange={props.onChangeLessonPrice}
          className={classes.contents}
        />
        <div className={classes.detailInfo}>
          <TextField
            required
            defaultValue={props.lessonDescription}
            id="outlined-multiline-static"
            label="レッスン内容"
            multiline
            rows={8}
            variant="outlined"
            fullWidth
            onChange={props.onChangeLessonDescription}
            className={classes.contents}
          />
        </div>
      </div>
    </div>
  )
}
