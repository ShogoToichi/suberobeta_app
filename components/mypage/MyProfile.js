//要追加 : 画像アップロード

import React,{useState} from "react";
import firebase from "firebase";
import "firebase/storage";
import { connect } from "react-redux";
import Lib from "../../Lib/address_lib";
import MyProFileDetail from "./parts/MyProFileDetail";

    function MyProfile (props){
        //ステートの設定
    const [name,setName] = useState("no data");
    const [introduction,setIntroduction] = useState("no data");
    const [imageurl,setImageurl] = useState(null);

    const getFireData= async()=>{
        const db = firebase.firestore ();
        //emailにReduxからユーザーのemailを取得
        const email = Lib.encodeEmail(props.email);
        //emailでfirebaseを参照
        await db.collection("users").doc(email).get()
        .then(function(doc){
        //取得したデータを定数に入れてから、ステートに入れる
        const profiledata = doc.data();
        setName(profiledata.profile.name);
        setIntroduction(profiledata.profile.introduction);
        setImageurl(profiledata.imageurl)
        });
    }
    
    if(name == "no data"){
        getFireData();
    }

    return(
            <div>
                <MyProFileDetail 
                    imageurl={imageurl} 
                    name={name} 
                    introduction={introduction}
                />
            </div>
        )
}

MyProfile= connect ((state)=>state)(MyProfile);
export default MyProfile;

