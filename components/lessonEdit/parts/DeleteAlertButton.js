import React, { useContext } from "react"
import Button from "@material-ui/core/Button"
import Dialog from "@material-ui/core/Dialog"
import DialogActions from "@material-ui/core/DialogActions"
import DialogContent from "@material-ui/core/DialogContent"
import DialogContentText from "@material-ui/core/DialogContentText"
import DialogTitle from "@material-ui/core/DialogTitle"
import { makeStyles } from "@material-ui/styles"
import Link from "next/link"
import { Color } from "../../../static/colors"

const inputForm = makeStyles((theme) => ({
  btnArea: {
    float: "right"
  },
  deleteBtn: {
    backgroundColor: useContext(Color).colors.grayBtn,
    marginRight: "120px",
    margin: "0 auto",
    width: "80px"
  }
}))

export default function AlertDialog(props) {
  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
    props.onClick
  }
  const classes = inputForm()
  return (
    <div className={classes.btnArea}>
      <Button
        variant="outlined"
        color="black"
        onClick={handleClickOpen}
        className={classes.deleteBtn}
      >
        削 除
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"本当に削除しますか?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            1度削除すると復元することはできません。<br></br>
            レッスン情報を完全に削除してよろしいですか？
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            キャンセル
          </Button>
          <Link href="/mypage">
            <Button onClick={props.onClick} color="primary" autoFocus>
              削除する
            </Button>
          </Link>
        </DialogActions>
      </Dialog>
    </div>
  )
}
