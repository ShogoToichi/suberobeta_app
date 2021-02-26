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
  const [creatername,setCreaterName] = useState("");
  const [buyername, setBuyerName] = useState("");
  
  //送信者によってスタイルを変更するテスト用のスタイル
  const style = {
    // border:"solid 1px #DDD", 
    backgroundColor :"#E0E0E0",
    borderRadius: "7px",
    height:"40px",
    verticalAlign:"middle",
    padding:"10px 20px 0px 20px",
    fontSize:"20px",
    display:"inline-block",
    marginBottom:"10px",
    marginLeft:"50px",
  }
  const messagedata=[];
  const messageitems=[];
  
  const router = useRouter();
  const email = Lib.encodeEmail(props.email);
  const db = firebase.firestore ();

  //lessondata及びmessageを取得
  const getMessageData= async()=>{
    //router.query.lessonidでページのurlの末尾を取得
    //先にレッスン名と作成者、購入者のidを取得
    await db.collection("lessons").doc(router.query.lessonid).get()
    //取得したデータをlessondataにしまってから、それをステートに突っ込む
    .then(function(doc){
      const lessondata = doc.data();
        setCreaterid(lessondata.createrid);
        setLessonname(lessondata.lessonname);
        setBuyerid(lessondata.buyerid);
      })
    await db.collection("users").doc(createrid).get()
      .then(function(doc){
        const createrdata = doc.data();
        setCreaterName(createrdata.profile.name);
      })
        //メッセージ情報取得処理
        //orderBy(time)で時間の古い順に並べる
    await db.collection("lessons").doc(router.query.lessonid).collection("message").orderBy("time")
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
                  <div>
                    <p style={{marginBottom:"3px"}}>{creatername}</p>
                    <div style={style}>{text}</div>
                    <br/>
                  </div>
                );}
              else {
                messageitems.push(
                  <div>

                    <div style={style}>{text}</div>
                    <br/>
                  </div>
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