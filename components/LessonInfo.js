import React,{useState} from "react";
import firebase from "firebase";
import {useRouter}from "next/router";
import Profile from "./Profile";

function LessonInfo (props){
  
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


  const getLessonData= async()=>{
    const db = firebase.firestore ();
    const router = useRouter();
    await db.collection("lessons").doc(router.query.lessonid).get()
    .then(function(doc){
      const lessondata = doc.data();
      const lessonid = doc.id;
        setCreaterid(lessondata.createrid);
        setLessonid(lessonid);
        setPurchased(lessondata.purchased);
        setLessonname(lessondata.lessonname);
        setPlace(lessondata.lessonplace);
        setTime(lessondata.lessontime);
        setPrice(lessondata.lessonprice);
        setLessoncomment(lessondata.lessontext);
        console.log(createrid);
    });
  }
  
  const getProfileData=async()=>{
    await db.collection("users").doc(createrid).get()
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

    if(lessonid ==""){
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
        <Profile title="ユーザー情報" username={profileusername} introduction={profileintroduction}/>
      </div>
    );
    
}

export default LessonInfo;

