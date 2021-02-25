//基本的には<LessonList/>と同じなのでそちらを参照
//.whereでレッスン作成者とReduxのemailが一致するデータを参照

import React,{useState} from "react";
import firebase from "firebase";
import "firebase/storage";
import MyLesson from "./MyLesson";
import { connect } from "react-redux";
import Lib from "../static/address_lib";
import Link from "next/link";


function MyLessonList (props){
  const [items,setItems] = useState("no item");

  const getFireData= async()=>{
    const db = firebase.firestore ();
    const lessondata = [];
    const lessonid = [];
    const lessonitems=[];
    const email = Lib.encodeEmail(props.email);
    await db.collection("lessons").where("createrid","==",email).get()
    .then(function(querySnapshot){
      querySnapshot.forEach(function(doc){
          lessondata.unshift(doc.data());
          lessonid.unshift(doc.id);
      });
      for (let i in lessonid){
        let id = lessonid[i];
        let name =lessondata[i].lessonname;
        let place = lessondata[i].lessonplace;
        let time = lessondata[i].lessontime;
        let text = lessondata[i].lessontext;
        let price = lessondata[i].lessonprice;
        lessonitems.push(
          <MyLesson lessonid={id}
                  name={name}
                  place={place}
                  time={time}
                  text={text}
                  price={price}
          />
        );
      }
      setItems(lessonitems);
    });
  }

  if(items =="no item"){
    getFireData();
  }

  return(
    <div>
      <h2>投稿したレッスン</h2>
      {items}
      <Link href="/lesson_add">
        <button>レッスン追加</button>
      </Link>
        <button onClick={getFireData}>検証</button>
    </div>
  );
}

MyLessonList = connect((state)=>state)(MyLessonList);
export default MyLessonList;






