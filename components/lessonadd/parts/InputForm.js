import React, { useContext } from "react"
import "firebase/storage"
import Link from "next/link"
import { makeStyles } from "@material-ui/styles"
import Typography from "@material-ui/core/Typography"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import { Color } from "../../../static/colors"
import PlaceSelecter from "./placeSelecter"

const inputForm = makeStyles((theme) => ({
  inputForm: {
    marginTop: "50px",
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
      <Typography className={classes.inputTitle} variant="h8">
        レッスンに関する情報を入力してください。
      </Typography>
      <TextField
        label="レッスン名"
        multiline
        fullWidth
        onChange={props.onChangeLessonName}
        className={classes.contents}
      />
      <TextField
        label="日時"
        placeholder="〇月〇日午前〇時～〇月〇日午前〇時"
        multiline
        fullWidth
        onChange={props.onChangeLessonTime}
        className={classes.contents}
      />
      <TextField
        label="場所"
        placeholder="〇〇スキー場"
        multiline
        fullWidth
        onChange={props.onChangeLessonPlace}
        className={classes.contents}
      />
      <TextField
        label="料金"
        placeholder="￥〇〇〇〇"
        multiline
        fullWidth
        onChange={props.onChangeLessonPrice}
        className={classes.contents}
      />

      <div className={classes.detailInfo}>
        <TextField
          label="レッスン内容"
          multiline
          rows={8}
          variant="outlined"
          fullWidth
          onChange={props.onChangeLessonDescription}
          className={classes.contents}
        />
      </div>
      <div className={classes.btnArea}>
        <Link href="/mypage">
          <Button
            className={classes.addBtn}
            variant="outlined"
            size="large"
            onClick={props.doSubmit}
          >
            追 加
          </Button>
        </Link>
      </div>
    </div>
  )
}
