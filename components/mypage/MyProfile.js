//要追加 : 画像アップロード

import React,{useState} from "react";
import firebase from "firebase";
import "firebase/storage";
import { connect } from "react-redux";
import Lib from "../../Lib/address_lib";
import Link from "next/link";

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { CardHeader } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import { PinDropSharp } from '@material-ui/icons';
import MyProFileDetail from "./parts/MyProFileDetail";


const myprofile = makeStyles({
    card: {
        marginTop: '20px',
    },
    button: {
        backgroundColor: '#E7E7E7',
        color: 'balck',
    },
    title:{
        paddingBottom:"16px",
        borderBottom:"solid 4px #DDD",
    }
});



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

  const classes = myprofile();
  return(
        <div>
            <MyProFileDetail 
                imageurl={imageurl} 
                name={name} 
                introduction={introduction}
            />
            {/* <Typography style={{fontWeight: 'bold',margin: '15px'}} variant="h3" className={classes.title}>My page</Typography>
            <div className={classes.card}>
                <Card>
                    <CardHeader
                            avatar={
                            <Avatar aria-label="recipe" src={imageurl} className={classes.avatar}>
                            </Avatar>
                            }
                    action={
                        <Link href="/profile_edit">
                            <Button variant="outlined" size="large" className={classes.button}>プロフィール変更</Button>
                        </Link>
                    }
                    title={name}
                    />
    
                    <CardContent>
                        <Typography style={{fontWeight: 'bold', margin: '5px',  borderBottom: "solid 1px #BBB" ,paddingBottom: "7px"}} variant="h5">自己紹介</Typography>
                        <Typography style={{marginTop: '10px' }} variant="h5">
                            {introduction}
                        </Typography>
                    </CardContent>
                </Card>
            </div> */}
        </div>
    )
}


MyProfile= connect ((state)=>state)(MyProfile);
export default MyProfile;

