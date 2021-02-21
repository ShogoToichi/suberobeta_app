import React from "react";
import Link from "next/link";


export default function Profile (props){


  return(
    <div>
      <h1>講師情報</h1>
      <h2>{props.username}</h2>
      <p>{props.introduction}</p>
    </div>
  )
}