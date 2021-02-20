import React from "react";
import Link from "next/link";


export default function Profile (props){


  return(
    <div>
      <h1>{props.title}</h1>
      <h2>{props.username}</h2>
      <p>{props.introduction}</p>
      <Link href="/profile_edit">
        <button>プロフィール編集</button>
      </Link>
      <p>↑materialUI属性値で表示・非表示を切り替え予定</p>
    </div>
  )
}