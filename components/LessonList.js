import React,{useState} from "react";
import firebase from "firebase";
// import "firebase/storage";
import Lesson from "./Lesson";


function LessonList (){
  const [items,setItems] = useState("no item");

  const getFireData= async()=>{
    const db = firebase.firestore ();
    const lessondata = [];
    const lessonid = [];
    const lessonitems = [];
    await db.collection("lessons").get().then(function(querySnapshot){
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
      }
      setItems(lessonitems);
    });
  }

  if(items =="no item"){
    getFireData();
  }

  return(
    <div>
      <h2>レッスン一覧</h2>
      {items}
    </div>
  );
}

export default LessonList;




