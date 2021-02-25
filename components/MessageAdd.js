//メッセージ送信フォーム
//message/[lessonid]でインポート

import React , {useState} from "react";
import { connect } from "react-redux";
import firebase from "firebase";
import {useRouter}from "next/router";
import Lib from "../static/address_lib";

function MessageAdd(props){


  //使用するステートの設定(Hook)
  const [message,setMessage] = useState("");
  const [userfilter,setUserfilter] = useState("");

  //inputに入力された処理をeで受け取ってステートに入れる関数
  const doChangeMessage =(e)=>{
    setMessage(e.target.value);
  }

  const router = useRouter();

  //追加ボタンを押したらfirebaseにステートの情報を書き込む処理
  //addで追加しているから、ドキュメントidはユニークなidが自動で当てられる
  //Reduxからユーザーのemail(id)をencode( .→* )にして定数に代入
  const doSubmit = async()=>{
    const db = firebase.firestore ();
    const email = Lib.encodeEmail(props.email);
    let d = new Date().getTime();
    await db.collection("lessons").doc(router.query.lessonid).collection("message").add({
      userid: email,
      text: message,
      time: firebase.firestore.FieldValue.serverTimestamp(),
      }).then(function(){
        setMessage("");
      })
      //userfilterのTorFを、マテリアルUIの表示に関する属性に用いて、
      //作成者、購入者以外にフォームを表示しなくする予定
      if (email==createrid || email==buyerid){
        setUserfilter(true);
    }
    else{
       setUserfilter(false);   
    }
  }

return(
  <div>
    <input type="text" onChange={doChangeMessage} value={message}></input>
    <button onClick={doSubmit}>送信</button>
  </div>
);}

MessageAdd =connect((state)=>state)(MessageAdd);
export default MessageAdd;




