import React,{useState} from "react";
import firebase from "firebase";
import "firebase/storage";
import { connect } from "react-redux";
import Lib from "../static/address_lib";
import Link from "next/link";
import Sample from './sample';



function ProfileEdit (props){

  const style = {
    width: "50%",
    margin: "0 auto",
    marginTop: 150,
  };

  const [name,setName] = useState("");
  const[introduction,setIntroduction] = useState("");
  const [fileUrl,setFileUrl] = useState(null);

  const doChangeName =(e)=>{
    setName(e.target.value);
  }
  const doChangeIntroduction =(e)=>{
    setIntroduction(e.target.value);
  }

  // function processImage(event){
  //   const imageFile = event.target.files[0];
  //   const imageUrl = URL.createObjectURL(imageFile);
  //   setFileUrl(imageUrl)
  // }


  const doSubmit = async()=>{
    const db = firebase.firestore ();
    const email = Lib.encodeEmail(props.email)
    await db.collection("users").doc(email).set({
      profile:{ name:name , introduction:introduction
        //  , imageurl:fileUrl
        }
    }).then(function(){
        console.log(name,introduction);
      });
  }


return(
  <div>
    <h2>プロフィール編集</h2>
    <p>名前</p>
    <input type="text" onChange={doChangeName}></input>
    <p>プロフィール画像</p>
    <div className="App">
      <div style={style}>
        <Sample />
      </div>
    </div>
    {/* <input type="file" accept="image/*" onChange={processImage}></input> */}
    <p>紹介文</p>
    <input type="text" onChange={doChangeIntroduction}></input>
    <Link href="/mypage">
    <button onClick={doSubmit}>変更</button>
    </Link>
  </div>
);}

ProfileEdit =connect((state)=>state)(ProfileEdit);
export default ProfileEdit;
