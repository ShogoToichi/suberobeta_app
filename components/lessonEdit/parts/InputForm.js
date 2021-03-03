import React, { useContext } from "react"
import "firebase/storage"
import Link from "next/link"
import { makeStyles } from "@material-ui/styles"
import Typography from "@material-ui/core/Typography"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import { Color } from "../../../static/colors"

const inputform = makeStyles((theme) => ({
  inputform: {
    marginTop: "50px",
    width: "80%",
    margin: "0 auto"
  },
  contents: {
    marginTop: "20px"
  },
  detailinfo: {
    marginTop: "20px",
    margin: "0 auto"
  },
  btnarea: {
    textAlign: "center"
  },
  addbtn: {
    backgroundColor: useContext(Color).colors.bgGreen,
    marginTop: "10px",
    margin: "0 auto",
    width: "200px"
  }
}))

export default function InputForm(props) {
  const classes = inputform()
  return (
    <div className={classes.inputform}>
      <div>
        <Typography className={classes.inputtitle} variant="h8">
          レッスンに関する情報を入力してください。
        </Typography>
        <TextField
          required
          defaultValue={props.lessonname}
          id="standard-textarea"
          label="レッスン名"
          fullWidth
          onChange={props.doChangeName}
          className={classes.contents}
        />
        <TextField
          required
          defaultValue={props.lessontime}
          id="standard-textarea"
          label="日時"
          fullWidth
          onChange={props.doChangeTime}
          className={classes.contents}
        />
        <TextField
          required
          defaultValue={props.lessonplace}
          id="standard-textarea"
          label="場所"
          fullWidth
          onChange={props.doChangePlace}
          className={classes.contents}
        />
        <TextField
          required
          defaultValue={props.lessonprice}
          id="standard-textarea"
          label="料金"
          fullWidth
          onChange={props.doChangePrice}
          className={classes.contents}
        />
        <div className={classes.detailinfo}>
          <TextField
            required
            defaultValue={props.lessoncomment}
            id="outlined-multiline-static"
            label="レッスン内容"
            multiline
            rows={8}
            variant="outlined"
            fullWidth
            onChange={props.doChangeComment}
            className={classes.contents}
          />
        </div>
      </div>
      <div className={classes.btnarea}>
        <Link href="/mypage">
          <Button
            className={classes.addbtn}
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
