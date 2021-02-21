import React,{useState} from "react";
import firebase from "firebase";
import "firebase/storage";
import { connect } from "react-redux";
import Lib from "../static/address_lib";
import Link from "next/link";


function LessonAdd (props){

  //使用するステートの設定(Hook)
  const [lessonname,setLessonname] = useState("");
  const [place,setPlace] = useState("");
  const [time,setTime] = useState("");
  const [price,setPrice] = useState("");
  const [lessoncomment,setLessoncomment] = useState("");

  //inputに入力された処理をeで受け取ってステートに入れる関数
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

  //追加ボタンを押したらfirebaseにステートの情報を書き込む処理
  //addで追加しているから、ドキュメントidはユニークなidが自動で当てられる
  //Reduxからユーザーのemail(id)をencode( .→* )にして定数に代入
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
    {/* 要確認 : ページ移動処理がfirebase書き込む処理より先に実行されるのが大丈夫なのか */}
    {/* next.jsのRouterメソッドを使って、dosubmit内でページ移動したかったがエラーが出たのでとりあえずLinkを使ってある */}
    <Link href="/mypage">
    <button onClick={doSubmit}>追加</button>
    </Link>
  </div>
);}

LessonAdd =connect((state)=>state)(LessonAdd);
export default LessonAdd;