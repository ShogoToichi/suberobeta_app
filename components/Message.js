import React,{useState} from "react";
import firebase from "firebase";
import {useRouter}from "next/router";
import Lib from "../static/address_lib"
import { connect } from "react-redux";
import "firebase/storage";

function Message (props){
  //ステート定義
  const [createrid,setCreaterid]= useState("");
  const [messages,setMessages] = useState("");
  const [buyerid,setBuyerid]= useState("");
  const [lessonname,setLessonname] = useState("");
  
  //送信者によってスタイルを変更するテスト用のスタイル
  const style2 = {
    backgroundColor :"blue",
  }
  const style1 = {
    backgroundColor :"red",
  }
  const messagedata=[];
  const messageitems=[];

  const router = useRouter();
  //lessondata及びmessageを取得
  const getMessageData= async()=>{
    const email = Lib.encodeEmail(props.email);
    const db = firebase.firestore ();
    //router.query.lessonidでページのurlの末尾を取得
    //先にレッスン名と作成者、購入者のidを取得
    await db.collection("lessons").doc(router.query.lessonid).get()
    //取得したデータをlessondataにしまってから、それをステートに突っ込む
    .then(function(doc){
      const lessondata = doc.data();
        setCreaterid(lessondata.createrid);
        setLessonname(lessondata.lessonname);
        setBuyerid(lessondata.buyerid);

        //メッセージ情報取得処理
        //orderBy(time)で時間の古い順に並べる
        db.collection("lessons").doc(router.query.lessonid).collection("message").orderBy("time")
        .get()
        //取得したデータをmessagedata配列に入れる。
        //配列の繰り返し処理でメッセージのjsxを作り、
        //messageitemsに入れて、最後にstateに入れる
          .then(function(querySnapshot){
              querySnapshot.forEach(function(doc){
                messagedata.push(doc.data());
              });
            for(let i in messagedata){
              let text = messagedata[i].text;
              let userid = messagedata[i].userid;
              //送信者とReduxメアドの比較でスタイル分岐
              if(userid == email){
                messageitems.push(
                    <p style={style1}>{text}</p>
                );}
              else {
                messageitems.push(
                    <p style={style2}>{text}</p>
                );
              }
            }
            //作成者、購入者以外メッセージが見れないようにする
            if (email==createrid || email==buyerid){
                setMessages(messageitems);
              }
              else{
                const errorMessage=<p>ご利用いただけません</p>
                setMessages(errorMessage);
              }
          })
  })}
  
return(
  <div>
    <button onClick={getMessageData}>読み込み</button>
    <h2>{lessonname}</h2>
    {messages}
  </div>
)
}


Message = connect((state)=>state)(Message);
export default Message;