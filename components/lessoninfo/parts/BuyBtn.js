
import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Link from "next/link";


const plofile = makeStyles({
    btnarea: {
        display: "inline-block",
        float: "right",
        marginRight: "100px",
        marginTop: "15px"
    },
    buybtn: {
        marginLeft:"0px",
        fontSize:"23px",
        marginBottom:"15px",
    },
});


export default function BuyBtn(props){
  const classes = plofile();
  return( 
                <div className={classes.btnarea}>
                  <Link href={`/message/${props.lessonid}/${props.buyerid}`}>
                    <Button className = {classes.buybtn} size="large" variant="outlined" onClick={props.onClick}>購入</Button>
                  </Link>
                </div>
  );
}