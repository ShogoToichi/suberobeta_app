import React,{useState} from "react";
import firebase from "firebase";
import {useRouter}from "next/router";
import Lib from "../static/address_lib"
import { connect } from "react-redux";
import "firebase/storage";

function Message (props){
  const [createrid,setCreaterid]= useState("");
  const [messages,setMessages] = useState("");
  const [buyerid,setBuyerid]= useState("");
  const [lessonname,setLessonname] = useState("");
  
  const style2 = {
    backgroundColor :"blue",
  }
  const style1 = {
    backgroundColor :"red",
  }
  const messagedata=[];
  const messageitems=[];

  const router = useRouter();
  //lessondata及びlessoncreaterのprofileを取得
  const getMessageData= async()=>{
    const email = Lib.encodeEmail(props.email);
    const db = firebase.firestore ();
    //router.query.lessonidでページのurlの末尾を取得
    await db.collection("lessons").doc(router.query.lessonid).get()
    //データ取得後の処理
    //取得したデータをlessondataにしまってから、それをステートに突っ込む
    .then(function(doc){
      const lessondata = doc.data();
        setCreaterid(lessondata.createrid);
        setLessonname(lessondata.lessonname);
        setBuyerid(lessondata.buyerid);

        db.collection("lessons").doc(router.query.lessonid).collection("message").orderBy("time")
        .get()
          .then(function(querySnapshot){
            querySnapshot.forEach(function(doc){
              messagedata.push(doc.data());
            });
          for(let i in messagedata){
            let text = messagedata[i].text;
            let userid = messagedata[i].userid;
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
          setMessages(messageitems);
          })
  })}
  const userfilter =()=>{
    if (email==createrid || email==buyerid){
      return messages;
    }
    else{
      return <p>メッセージはご利用いただけません</p>
    }
  }
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