import React, { useContext } from "react"
import "firebase/storage"
import { makeStyles } from "@material-ui/styles"
import Typography from "@material-ui/core/Typography"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import { Color } from "../../../static/colors"
import PlaceSelecter from "./placeSelecter"
import Grid from "@material-ui/core/Grid"

const inputForm = makeStyles((theme) => ({
  inputForm: {
    marginTop: "2rem"
  },
  addBtn: {
    backgroundColor: useContext(Color).colors.bgGreen,
    width: "15rem"
  }
}))

export default function InputForm(props) {
  const classes = inputForm()
  return (
    <Grid
      container
      direction="column"
      justify="flex-start"
      alignItems="stretch"
      spacing={2}
      className={classes.inputForm}
    >
      <Grid item xs={12}>
        <Typography className={classes.inputTitle} variant="h6">
          レッスンに関する情報を入力してください。
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="レッスン名"
          multiline
          fullWidth
          onChange={props.onChangeLessonName}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="日時"
          placeholder="〇月〇日午前〇時～〇月〇日午前〇時"
          fullWidth
          onChange={props.onChangeLessonTime}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="場所"
          placeholder="〇〇スキー場"
          fullWidth
          onChange={props.onChangeLessonPlace}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="料金"
          placeholder="￥〇〇〇〇"
          fullWidth
          type="number"
          onChange={props.onChangeLessonPrice}
        />
      </Grid>

      <Grid item xs={12}>
        <TextField
          label="レッスン内容"
          multiline
          rows={8}
          variant="outlined"
          fullWidth
          onChange={props.onChangeLessonDescription}
        />
      </Grid>

      <Grid item xs={12}>
        <Grid container justify="center">
          <Button
            className={classes.addBtn}
            variant="outlined"
            size="large"
            disabled={false}
            onClick={props.doSubmit}
          >
            追 加
          </Button>
        </Grid>
      </Grid>
    </Grid>
  )
}
