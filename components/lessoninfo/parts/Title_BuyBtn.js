
import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Title from "../../commonParts/Title"
import BuyBtn from "./BuyBtn"

const titlebtn = makeStyles((theme) => ({

}));

export default function Title_BuyBtn(props){
  const classes = titlebtn();
  return(
    <div>
      < Title title={props.title} />
      <BuyBtn />

    </div>
  )
}