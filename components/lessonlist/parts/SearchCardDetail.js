import React, { useContext, useTheme } from "react"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import { Color } from "../../../static/colors"
import IconButton from "@material-ui/core/IconButton"
import SearchIcon from "@material-ui/icons/Search"
import InputBase from "@material-ui/core/InputBase"
import Paper from "@material-ui/core/Paper"

import Accordion from "@material-ui/core/Accordion"
import AccordionSummary from "@material-ui/core/AccordionSummary"
import AccordionDetails from "@material-ui/core/AccordionDetails"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import Chip from "@material-ui/core/Chip"
import Icon from "@mdi/react"
import { mdiTagOutline } from "@mdi/js"

const searchcarddetail = makeStyles((theme) => ({
  card: {
    width: "25%",
    display: "inline-block",
    verticalAlign: "top",
    backgroundColor: "#EEE"
  },
  title: {
    display: "block",
    fontWeight: "bold",
    margin: "20px 10px 0px 10px"
  },
  searchPaper: {
    width: "80%",
    margin: "10px 20px",
    padding: "0px 10px"
  },
  InputBase: {
    width: "80%"
  },
  searchbtn: {
    width: "20%"
  },
  categorys: {
    width: "80%",
    margin: "10px 30px"
  },
  category: {
    height: "20px",
    padding: "2px",
    margin: "0px 10px",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#0FF"
    }
  },
  tag: {
    margin: "5px 10px",
    color: useContext(Color).colors.Green
  }
}))

export default function SearchCardDetail(props) {
  const classes = searchcarddetail()

  return (
    <Card className={classes.card}>
      <Typography variant="h8" className={classes.title}>
        条件で絞り込む
      </Typography>
      <Paper elevation={8} className={classes.searchPaper}>
        <InputBase
          className={classes.InputBase}
          placeholder="例)　〇〇スキー場"
          inputProps={{ "aria-label": "search google maps" }}
        />
        <IconButton
          type="submit"
          aria-label="search"
          className={classes.searchbtn}
        >
          <SearchIcon />
        </IconButton>
      </Paper>

      <Typography variant="h8" className={classes.title}>
        カテゴリ
      </Typography>
      <div className={classes.categorys}>
        <Accordion variant="ouutlined">
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>カテゴリ一覧</Typography>
          </AccordionSummary>
          <AccordionDetails className={classes.category}>
            <Typography>カービング</Typography>
          </AccordionDetails>
          <AccordionDetails className={classes.category}>
            <Typography>グランドトリック</Typography>
          </AccordionDetails>
          <AccordionDetails className={classes.category}>
            <Typography>パーク</Typography>
          </AccordionDetails>
          <AccordionDetails className={classes.category}>
            <Typography>バックカントリー</Typography>
          </AccordionDetails>
        </Accordion>
      </div>

      <Typography variant="h8" className={classes.title}>
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
    </Card>
  )
}
