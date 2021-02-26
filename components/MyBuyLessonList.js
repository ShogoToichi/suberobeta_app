//基本的には<LessonList/>と同じなのでそちらを参照
//.whereでレッスン購入者とReduxのemailが一致するデータを参照

import React,{useState} from "react";
import firebase from "firebase";
import "firebase/storage";
import MyLesson from "./MyLesson";
import { connect } from "react-redux";
import Lib from "../static/address_lib";
import Link from "next/link";
import { makeStyles } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';


const mylessonlist = makeStyles({
    list:{
        margin: '20px',
    },
    addbtn: {
        textAlign: 'center',
    },
    btn: {
        backgroundColor: "#4A8",
        color:"white",
    },
    }
);


function MyBuyLessonList (props){
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

const classes  = mylessonlist();

  return(
        <div className={classes.list}>
            <div className={classes.list}>
            <Box color="white" bgcolor="#4A8" fontWeight="bold" p={1}>
            <Typography variant="h8">購入したレッスン</Typography>
            </Box>
            </div>
              {items}
        </div>
  );
}

MyBuyLessonList = connect((state)=>state)(MyBuyLessonList);
export default MyBuyLessonList




