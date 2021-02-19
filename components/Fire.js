import React , {Component} from "react";
import firebase from "firebase";
import Lesson from "./Lesson";
//export default function Fire(){
//  const firetest =async()=>{
//    const db=firebase.firestore();
//    await db.collection("users").doc("toichi*gmail*com").get().then((doc)=>{
//      console.log("Data:",doc.data());
//    });
//    console.log("fire");
//  }
//  return(
//    <button onClick={firetest}>fire</button>
//  );
//}


export default function Fire(){
  let data = [<Lesson lessonid="8" name="beginner lesson" place="saitama uni" time="one hour" text="let's enjoy snowboard with me!" price="2000yen"/>
]

    
  const firetest =async()=>{
    const db=firebase.firestore();
    const lessondata = [];
    await db.collection("lessons").get().then(function(querySnapshot){
      querySnapshot.forEach(function(doc){
        lessondata.unshift(doc.data());
      });
      console.log(lessondata[0].lessonname);
    });
    data.push(<Lesson lessonid="9" name="beginner lesson" place="saitama uni" time="one hour" text="let's enjoy snowboard with me!" price="2000yen"/>
    );
    console.log(data);
  }
  return(
    <div>
      <button onClick={firetest}>fire</button>
      <div><p>hello</p></div>
      {data}
    </div>
  );
}