import React, { useContext } from "react"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import { Color } from "../../../static/colors"
import Paper from "@material-ui/core/Paper"
import Grid from "@material-ui/core/Grid"
import Chip from "@material-ui/core/Chip"
import Icon from "@mdi/react"
import { mdiTagOutline } from "@mdi/js"
import skiResortList from "../../commonParts/skiResortList"
import Autocomplete from "@material-ui/lab/Autocomplete"
import TextField from "@material-ui/core/TextField"
import InputLabel from "@material-ui/core/InputLabel"
import MenuItem from "@material-ui/core/MenuItem"
import FormControl from "@material-ui/core/FormControl"
import Select from "@material-ui/core/Select"

const searchcarddetail = makeStyles((theme) => ({
  card: {
    backgroundColor: "#EEE",
    // position: "relative",
    height: "20rem"
  },
  container: {
    height: "100%"
  },
  formControl: {
    width: "100%"
  },
  textSearchContainer: {
    // position: "absolute",
    // top: "0px",
    // left: "15px",
    // zIndex: "2"
  },
  otherSearchContainer: {
    // position: "absolute",
    // top: "110px",
    // left: "15px",
    // zIndex: "1"
  },
  title: {
    fontWeight: "bold"
    // margin: "1.2rem 0.6px 0 0.6rem"
  },
  searchPaper: {
    // width: "150%",
    // margin: "10px 20px",
    // padding: "0px 10px"
  },
  searchbtn: {
    // width: "20%"
  },
  categorys: {
    // width: "80%",
    // margin: "10px 30px"
  },
  category: {
    // height: "20px",
    // padding: "2px",
    // margin: "0px 10px",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#0FF"
    }
  },
  tag: {
    // margin: "5px 10px",
    color: useContext(Color).colors.Green
  }
}))

export default function SearchCardDetail(props) {
  const classes = searchcarddetail()

  return (
    <Card className={classes.card}>
      <Grid
        container
        direction="column"
        justify="space-around"
        className={classes.container}
      >
        <Grid item>
          <Grid container direction="column">
            <Grid item>
              <Typography variant="body1" className={classes.title}>
                条件で絞り込む
              </Typography>
            </Grid>
            <Grid item>
              <Paper elevation={8} className={classes.searchPaper}>
                <Autocomplete
                  id="combo-box-demo"
                  fullWidth
                  onChange={props.onChange}
                  options={skiResortList}
                  // defaultValue={props.searchingSkiResortName}  // Todo: 初期値の設定
                  getOptionLabel={(option) => option.name}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label=""
                      placeholder="例)　〇〇スキー場"
                    />
                  )}
                />
              </Paper>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container direction="column">
            <Grid item>
              <Typography
                variant="body1"
                className={classes.title}
                className={classes.otherSearchContainer}
              >
                カテゴリから探す
              </Typography>
            </Grid>
            <Grid item>
              <FormControl className={classes.formControl}>
                <InputLabel></InputLabel>
                <Select
                // Todo: 検索未実装
                // value={"age"}
                // onChange={handleChange}
                >
                  <MenuItem>カービング</MenuItem>
                  <MenuItem>グランドトリック</MenuItem>
                  <MenuItem>パーク</MenuItem>
                  <MenuItem>バックカントリー</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Grid>

        <Grid item>
          <Typography variant="body1" className={classes.title}>
            タグ
          </Typography>
          <Chip
            icon={<Icon path={mdiTagOutline} size="20px" />}
            label={props.tagLabel1}
            clickable
            className={classes.tag}
          />
          <Chip
            icon={<Icon path={mdiTagOutline} size="20px" />}
            label={props.tagLabel2}
            clickable
            className={classes.tag}
          />
          <Chip
            icon={<Icon path={mdiTagOutline} size="20px" />}
            label={props.tagLabel3}
            clickable
            className={classes.tag}
          />
        </Grid>
      </Grid>
    </Card>
  )
}
