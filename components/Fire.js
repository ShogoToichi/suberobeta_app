import React , {useState} from "react";
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
  let data = [<Lesson lessonid="8"/>]
  const [items,setItems] = useState(0);  
  const lessonids = [1,2,3,4];
  
  const firetest =async()=>{
    const db=firebase.firestore();
    const lessondata = [];
    await db.collection("lessons").get().then(function(querySnapshot){
      querySnapshot.forEach(function(doc){
        lessondata.unshift(doc.data());
      });
      console.log(lessondata[0].lessonname);
    });
    const id = lessonids;
    id.push(5);
    setItems([1,2,3,4,5]);
    console.log(items);
  // const new_data = <Lesson lessonid="9" name="beginner lesson" place="saitama uni" time="one hour" text="let's enjoy snowboard with me!" price="2000yen"/>
}
// data.push(new_data);

  return(
    <div>
      <button onClick={firetest}>fire</button>
      <div><p>hello</p></div>
      {items.map((lessonid)=>{
        return <Lesson name={lessonid}/>;
      })}
    </div>
  );
}