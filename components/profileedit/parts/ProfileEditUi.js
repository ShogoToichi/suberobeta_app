import React from "react"
import GetImage from "../GetImage"
import { makeStyles } from "@material-ui/styles"
import Typography from "@material-ui/core/Typography"
import TextField from "@material-ui/core/TextField"
import Grid from "@material-ui/core/Grid"

const profileEdit = makeStyles((props) => ({
  name: {
    marginTop: "2rem",
    marginLeft: "1rem"
  },
  TextField: {
    margin: "1rem"
  },
  uploadText: {
    marginTop: "2rem",
    marginLeft: "1rem"
  },
  upload: {
    marginLeft: "6rem"
  },
  plofile: {
    marginTop: "2rem",
    width: "80%"
  }
}))

export default function ProfileEdit(props) {
  const classes = profileEdit()
  return (
    <Grid container spacing={2} justify="space-around">
      <Grid item xs={12} sm={10} lg={3} className={classes.name}>
        <Typography variant="h6">ユーザ名</Typography>
        <TextField
          label="ユーザ名"
          maxWidth
          onChange={props.doChangeName}
          defaultValue={props.currentName}
          className={classes.TextField}
        />
      </Grid>
      <Grid item item xs={12} sm={10} lg={8}>
        <Grid item className={classes.uploadText}>
          <Typography variant="h6">プロフィール画像のアップロード</Typography>
        </Grid>

        <Grid item className={classes.upload}>
          <GetImage />
        </Grid>
      </Grid>

      <Grid item className={classes.plofile}>
        <TextField
          id="standard-textarea"
          label="自己紹介文"
          placeholder=""
          rows={8}
          multiline
          variant="outlined"
          fullWidth
          onChange={props.doChangeIntroduction}
          defaultValue={props.currentIntroduction}
        />
      </Grid>
    </Grid>
  )
}
