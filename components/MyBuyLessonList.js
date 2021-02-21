//基本的には<LessonList/>と同じなのでそちらを参照
//.whereでレッスン購入者とReduxのemailが一致するデータを参照

import React,{useState} from "react";
import firebase from "firebase";
import "firebase/storage";
import Lesson from "./Lesson";
import { connect } from "react-redux";
import Lib from "../static/address_lib";


function MyLessonList (props){
  const [items,setItems] = useState("no item");

  const getFireData= async()=>{
    const db = firebase.firestore ();
    const lessondata = [];
    const lessonid = [];
    const lessonitems=[];
    const email = Lib.encodeEmail(props.email);
    await db.collection("lessons").where("buyerid","==",email).get()
    .then(function(querySnapshot){
      querySnapshot.forEach(function(doc){
        lessondata.unshift(doc.data());
        lessonid.unshift(doc.id);
      });
      for (let i in lessondata){
        let id = lessonid[i];
        let name =lessondata[i].lessonname;
        let place = lessondata[i].lessonplace;
        let time = lessondata[i].lessontime;
        let text = lessondata[i].lessontext;
        let price = lessondata[i].lessonprice;
        lessonitems.push(
          <Lesson lessonid={id}
                  name={name}
                  place={place}
                  time={time}
                  text={text}
                  price={price}
          />
        );
        break;
      }
      setItems(lessonitems);
    });
  }

  if(items =="no item"){
    getFireData();
  }

  return(
    <div>
      <h2>購入したレッスン</h2>
      {items}
    </div>
  );
}

MyLessonList = connect((state)=>state)(MyLessonList);
export default MyLessonList;






