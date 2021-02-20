import React, {Component} from "react";
import Router from "next/router";
import Link from "next/link";

export default function Lesson (props){



    return(
      <div>
        <Link as={`/lesson_info/${props.lessonid}`}
          href="/lesson_info/[lessonid]">
            <a>{props.name}</a>
          </Link>
        <p>place: {props.place}</p>
        <p>price: {props.price}</p>
        <p>time: {props.time}</p>
        <p>comment: {props.text}</p>
        {/* <button 
        // onClick={this.goInfo(this.props.lessonid)}
        >詳細へ</button> */}
      </div>
      );
    } 

