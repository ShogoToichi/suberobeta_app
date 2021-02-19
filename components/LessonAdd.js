import React,{useState} from "react";
import firebase from "firebase";
import "firebase/storage";
import { connect } from "react-redux";
import Lib from "../static/address_lib";
import Link from "next/link";
import { Router } from "next/router";


function LessonAdd (props){

  const [lessonname,setLessonname] = useState("");
  const [place,setPlace] = useState("");
  const [time,setTime] = useState("");
  const [price,setPrice] = useState("");
  const [lessoncomment,setLessoncomment] = useState("");

  const doChangeName =(e)=>{
    setLessonname(e.target.value);
  }
  const doChangePlace= (e)=>{
    setPlace(e.target.value);
  }
  const doChangeTime = (e)=>{
    setTime(e.target.value);
  }
  const doChangePrice = (e)=>{
    setPrice(e.target.value);
  }
  const doChangeComment = (e)=>{
    setLessoncomment(e.target.value);
  }

  const doSubmit = async()=>{
    const db = firebase.firestore ();
    const email = Lib.encodeEmail(props.email)
    await db.collection("lessons").add({
        createrid: email,
        lessonname:lessonname,
        lessonplace:place,
        lessonprice:price,
        lessontext:lessoncomment,
        lessontime:time
      }).then(function(doc){
        console.log("LessonID:",doc.id);
      });
      // const movemypage=()=>{Router.push("/mypage");}
      // movemypage();
  }


return(
  <div>
    <h2>レッスン追加</h2>
    <p>レッスン名</p>
    <input type="text" onChange={doChangeName}></input>
    <p>場所</p>
    <input type="text" onChange={doChangePlace}></input>
    <p>所要時間</p>
    <input type="text" onChange={doChangeTime}></input>
    <p>料金</p>
    <input type="text" onChange={doChangePrice}></input>
    <p>レッスン詳細</p>
    <input type="text" onChange={doChangeComment}></input>
    <Link href="/mypage">
    <button onClick={doSubmit}>追加</button>
    </Link>
  </div>
);}

LessonAdd =connect((state)=>state)(LessonAdd);
export default LessonAdd;