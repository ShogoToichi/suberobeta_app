//メッセージ送信フォーム
//message/[lessonid]でインポート

import React , {useState} from "react";
import { connect } from "react-redux";
import firebase from "firebase";
import {useRouter}from "next/router";
import Lib from "../../Lib/address_lib";
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
  root: {
      margin: theme.spacing(1),
      width: '500px',
  },
  btn:{
    width:"80px",
    marginLeft:"210px",
  }
}));

function MessageAdd(props){


  //使用するステートの設定(Hook)
  const [message,setMessage] = useState("");
  const [userfilter,setUserfilter] = useState("");

  //inputに入力された処理をeで受け取ってステートに入れる関数
  const doChangeMessage =(e)=>{
    setMessage(e.target.value);
  }

  const router = useRouter();

  //追加ボタンを押したらfirebaseにステートの情報を書き込む処理
  //addで追加しているから、ドキュメントidはユニークなidが自動で当てられる
  //Reduxからユーザーのemail(id)をencode( .→* )にして定数に代入
  const doSubmit = async()=>{
    const db = firebase.firestore ();
    const email = Lib.encodeEmail(props.email);
    let d = new Date().getTime();
    await db.collection("lessons").doc(router.query.lessonid).collection("message").add({
      userid: email,
      text: message,
      time: firebase.firestore.FieldValue.serverTimestamp(),
      }).then(function(){
        setMessage("");
      })
      //userfilterのTorFを、マテリアルUIの表示に関する属性に用いて、
      //作成者、購入者以外にフォームを表示しなくする予定
      if (email==createrid || email==buyerid){
        setUserfilter(false);
    }
    else{
       setUserfilter(true);   
    }
  }

const classes = useStyles();

return(
  <div>
<form className={classes.root} noValidate autoComplete="off">
  <TextField id="outlined-basic"  variant="outlined" onChange={doChangeMessage} value={message} multiline={true} rows={3} fullWidth={true} disabled={userfilter}/>
</form>
<Button variant="outlined" className={classes.btn} onClick={doSubmit} disabled={userfilter}>送信</Button>
  </div>
);}

MessageAdd =connect((state)=>state)(MessageAdd);
export default MessageAdd;




