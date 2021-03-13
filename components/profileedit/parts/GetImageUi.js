import "firebase/storage"
import React, { useContext } from "react"
import { makeStyles } from "@material-ui/styles"
import Button from "@material-ui/core/Button"
import { Color } from "../../../static/colors"
import Img from "../../commonParts/Img"

const getImage = makeStyles((theme) => ({
  uploadBtn: {
    backgroundColor: useContext(Color).colors.Green,
    color: "white"
  },
  img: {
    margin: "1rem 0rem 0rem 1rem"
  }
}))

export default function GetImage(props) {
  const classes = getImage()
  return (
    <>
      <form>
        <input type="file" onChange={props.handleImage} />
        <Button
          onClick={props.onSubmit}
          variant="contained"
          className={classes.uploadBtn}
        >
          アップロード
        </Button>
      </form>
      {props.upload ? (
        <Img src={props.imageUrl} size="180" />
      ) : (
        <Img src={props.currentImageUrl} size="180" />
      )}
    </>
  )
}
