
import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Link from "next/link";


const plofile = makeStyles({
    buybtn: {
        display:"inlineBlock",
        marginLeft:"30px",
        fontSize:"23px",
        marginBottom:"15px",
    },
});


export default function BuyBtn(props){
  const classes = plofile();
  return(
                  <Link as={`/message/${props.lessonid}`}
                  href="/message/[lessonid]">
                    <Button className = {classes.buybtn} size="large" variant="outlined" onClick={props.onClick}>購入</Button>
                  </Link>
  );
}