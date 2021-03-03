import "firebase/storage"
import React, { useContext } from "react"
import { makeStyles } from "@material-ui/styles"
import Button from "@material-ui/core/Button"
import { Color } from "../../../static/colors"

const getimage = makeStyles((theme) => ({
  uploadbtn: {
    backgroundColor: useContext(Color).colors.Green,
    color: "white"
  },
  img: {
    height: "70px",
    width: "70px",
    borderRadius: "35px",
    margin: "20px 0px 0px 20px"
  }
}))

export default function GetImage(props) {
  const classes = getimage()
  return (
    <div>
      <form>
        <input type="file" onChange={props.handleImage} />
        <Button
          onClick={props.onSubmit}
          variant="contained"
          className={classes.uploadbtn}
        >
          アップロード
        </Button>
      </form>
      <img src={props.imageUrl} alt="upload" className={classes.img} />
    </div>
  )
}
