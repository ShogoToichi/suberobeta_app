import {Color} from "../static/colors";
import React,{useContext}from "react";

export default function Test(){
  const color = useContext(Color); 

  const conso=()=>{console.log(color);}

  const colorred = "blue";

  conso();

  const test={
    backgroundColor:useContext(Color).colors.headerColor,
    width:"120px",
    height:"30px",
    color:"#444",
  }

  return(
      <div style={test}>
        こんにちは世界
      </div>
  );
}
