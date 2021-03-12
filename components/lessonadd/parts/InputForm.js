import React, { useContext } from "react"
import "firebase/storage"
import { makeStyles } from "@material-ui/styles"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import Autocomplete from "@material-ui/lab/Autocomplete"
import { Color } from "../../../static/colors"
import PlaceSelecter from "./placeSelecter"
import InputLabel from "@material-ui/core/InputLabel"
import FormControl from "@material-ui/core/FormControl"
import Input from "@material-ui/core/Input"
import InputAdornment from "@material-ui/core/InputAdornment"

// Todo: 情報の入れ方
const testPlace = [
  { place: "かたしな高原スキー場" },
  { place: "一本杉スキー場" },
  { place: "オグナほたかスキー場" },
  { place: "谷川岳天神平スキー場" },
  { place: "苗場スキー場" },
  { place: "奥利根スノーパーク" }
]

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

  const lessonNameErrorMessage = () => {
    if (props.lessonNameValidation) {
      return ""
    } else {
      return "32文字以内で入力してください"
    }
  }

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
          レッスンに関する情報を入力してください
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="レッスン名"
          fullWidth
          onChange={props.onChangeLessonName}
          error={!props.lessonNameValidation}
          helperText={lessonNameErrorMessage()}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          id="datetime-local"
          label="日時"
          type="datetime-local"
          defaultValue="2021-03-14T10:30" // todo: 初期値を今日に設定
          className={classes.textField}
          InputLabelProps={{
            shrink: true
          }}
          onChange={props.onChangeLessonTime}
        />
      </Grid>
      <Grid item xs={12}>
        <Autocomplete
          id="combo-box-demo"
          options={testPlace}
          getOptionLabel={(option) => option.place}
          onChange={props.onChangeLessonPlace}
          renderInput={(params) => (
            <TextField
              {...params}
              label="場所"
              placeholder="〇〇スキー場"
              fullWidth
            />
          )}
        />
      </Grid>
      <Grid item xs={12}>
        <FormControl fullWidth>
          <InputLabel htmlFor="standard-adornment-amount">料金</InputLabel>
          <Input
            id="standard-adornment-amount"
            type="number"
            onChange={props.onChangeLessonPrice}
            startAdornment={<InputAdornment position="start">¥</InputAdornment>}
          />
        </FormControl>
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
