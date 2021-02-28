//※要追加 :  ・purchasedか何かで受付中のレッスンとそうでないレッスン購入ボタンの表示を変更
//            ・購入後purchasedの書き換え及びmessageへの移動

import React,{useState} from "react";
import firebase from "firebase";
import {useRouter}from "next/router";
import {connect}from "react-redux";
import Lib from "../../Lib/address_lib";
import BuyBtn from "./parts/BuyBtn";
import LessonDitail from "./parts/LessonDitail";
import Title from "../normal_parts/Title"

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
  const [imageurl,setImageurl]=useState("");

  const db = firebase.firestore ();
  const router = useRouter();

  //lessondata及びlessoncreaterのprofileを取得
  const getLessonData= async()=>{
    //router.query.lessonidでページのurlの末尾を取得
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
            setImageurl(userdata.imageurl)
          }else{
            console.log("no data");
          }
        }).catch(function(error){
          console.log("Error getting document:",error);
        });
    });
  }

    const dobuy = async()=>{
      const email = Lib.encodeEmail(props.email);
      await db.collection("lessons").doc(router.query.lessonid).set({
      buyerid:email
    },{merge: true})
    }

    if(lessonname ==""){
      getLessonData();
    }

      return(
        <div style={{marginTop:"30px"}}>
                <Title title={lessonname} />
                <BuyBtn lessonid={router.query.lessonid} onClick={dobuy}>
                  購入
                </BuyBtn>
                <LessonDitail 
                  imageurl={imageurl} 
                  profileusername={profileusername} 
                  price={price} 
                  place={place} 
                  time={time} 
                  lessoncomment={lessoncomment}
                />
        </div>
    );
    }


LessonInfo= connect((state)=>state)(LessonInfo);
export default LessonInfo;

