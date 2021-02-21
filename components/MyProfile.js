import React,{useState} from "react";
import firebase from "firebase";
import "firebase/storage";
import { connect } from "react-redux";
import Lib from "../static/address_lib";
import Link from "next/link";

  function MyProfile (props){
  const [name,setName] = useState("no data");
  const [introduction,setIntroduction] = useState("no data");
  const [imageurl,setImageurl] = useState(null);

  const getFireData= async()=>{
    const db = firebase.firestore ();
    const email = Lib.encodeEmail(props.email);
    await db.collection("users").doc(email).get()
    .then(function(doc){
      const profiledata = doc.data();
      setName(profiledata.profile.name);
      setIntroduction(profiledata.profile.introduction);
      setImageurl(profiledata.profile.imageurl);
    });
  }
  
  const conso =()=>{
    console.log(imageurl);
    getFireData();
  }
  
  return(
    <div>
      <h1>プロフィール</h1>
      <image src={imageurl}/>
      <h2>{name}</h2>
      <p>{introduction}</p>
      <button onClick={conso}>conso</button>
      <Link href="/profile_edit">
        <button>プロフィール編集</button>
      </Link>
    </div>
  )
}


MyProfile= connect ((state)=>state)(MyProfile);
export default MyProfile;