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
    marginTop: "50px",
    width: "80%",
    margin: "0 auto"
  },
  contents: {
    marginTop: "20px"
  },
  detailInfo: {
    marginTop: "20px",
    margin: "0 auto"
  },
  btnArea: {
    textAlign: "center"
  },
  addBtn: {
    backgroundColor: useContext(Color).colors.bgGreen,
    marginTop: "10px",
    margin: "0 auto",
    width: "200px"
  }
}))

export default function InputForm(props) {
  const classes = inputForm()
  return (
    <div className={classes.inputForm}>
      <div>
        <Typography className={classes.inputTitle} variant="h8">
          レッスンに関する情報を入力してください。
        </Typography>
        <TextField
          required
          defaultValue={props.lessonName}
          id="standard-textarea"
          label="レッスン名"
          fullWidth
          onChange={props.onChangeLessonName}
          className={classes.contents}
        />
        <TextField
          required
          defaultValue={props.lessonTime}
          id="standard-textarea"
          label="日時"
          fullWidth
          onChange={props.onChangeLessonTime}
          className={classes.contents}
        />
        <TextField
          required
          defaultValue={props.lessonPlace}
          id="standard-textarea"
          label="場所"
          fullWidth
          onChange={props.onChangeLessonPlace}
          className={classes.contents}
        />
        <TextField
          required
          defaultValue={props.lessonPrice}
          id="standard-textarea"
          label="料金"
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
            onChange={props.onChangeDescription}
            className={classes.contents}
          />
        </div>
      </div>
      <div className={classes.btnArea}>
        {/* <Link href="/mypage"> */}
          <Button
            className={classes.addBtn}
            variant="outlined"
            size="large"
            onClick={props.doSubmit}
          >
            編 集
          </Button>
        {/* </Link> */}
      </div>
    </div>
  )
}
