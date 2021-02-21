//※要追加 :  ・purchasedか何かで受付中のレッスンとそうでないレッスン購入ボタンの表示を変更
//            ・購入後purchasedの書き換え及びmessageへの移動

import React,{useState} from "react";
import firebase from "firebase";
import {useRouter}from "next/router";
import Profile from "./Profile";

function LessonInfo (props){
  
  // 使用するステートの定義
  const [createrid,setCreaterid]= useState("");
  const [lessonid,setLessonid]= useState("");
  const [purchased,setPurchased]= useState("");
  const [lessonname,setLessonname] = useState("");
  const [place,setPlace] = useState("");
  const [time,setTime] = useState("");
  const [price,setPrice] = useState("");
  const [lessoncomment,setLessoncomment] = useState("");
  const [profileusername,setProfileusername] = useState("");
  const [profileintroduction,setProfileintroduction]=useState("");

  //lessondata及びlessoncreaterのprofileを取得
  const getLessonData= async()=>{
    const db = firebase.firestore ();
    //router.query.lessonidでページのurlの末尾を取得
    const router = useRouter();
    await db.collection("lessons").doc(router.query.lessonid).get()
    //データ取得後の処理
    //取得したデータをlessondataにしまってから、それをステートに突っ込む
    //lessonidは取得しなくていいかも
    .then(function(doc){
      const lessondata = doc.data();
      const lesson_id = doc.id;
        setCreaterid(lessondata.createrid);
        setLessonid(lesson_id);
        setPurchased(lessondata.purchased);
        setLessonname(lessondata.lessonname);
        setPlace(lessondata.lessonplace);
        setTime(lessondata.lessontime);
        setPrice(lessondata.lessonprice);
        setLessoncomment(lessondata.lessontext);
        console.log(createrid);
        //ここからプロフィール取得処理
        //レッスン情報で取得したcreateridでfirebaseを参照
        db.collection("users").doc(createrid).get()
        //if文の処理はエラーがあった時のための処理
        //ネット記事のコピペなので、必要性がどれほどあるかは謎
        .then(function(doc){
          if (doc.exists){
            const userdata = doc.data();
            console.log(createrid,userdata);
            setProfileusername(userdata.profile.name);
            setProfileintroduction(userdata.profile.introduction)
          }else{
            console.log("no data");
          }
        }).catch(function(error){
          console.log("Error getting document:",error);
        });
    });
  }

    if(lessonname ==""){
      getLessonData();
    }

    return(
      <div>
        <h1>レッスン情報</h1>
        <h2>{lessonname}</h2>
        <p>料金 : {price}</p>
        <p>場所 : {place}</p>
        <p>時間 : {time}</p>
        <p>詳細 : {lessoncomment}</p>
        <div className="lessonprofile">
        <Profile  username={profileusername} introduction={profileintroduction}/>
        </div>
      </div>
    );
    
    }

export default LessonInfo;

