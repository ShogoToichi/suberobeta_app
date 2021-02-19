import React , {Component} from "react";
import firebase from "firebase";

export default function Fire(){
  const firetest =async()=>{
    const db=firebase.firestore();
    await db.collection("users").doc("toichi*gmail*com").get().then((doc)=>{
      console.log("Data:",doc.data());
    });
    console.log("fire");
  }
  return(
    <button onClick={firetest}>fire</button>
  );
}