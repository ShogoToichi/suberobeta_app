import React,{useState} from "react";
import firebase from "firebase";
import "firebase/storage";
import { connect } from "react-redux";
import Lib from "../../static/address_lib";
import Link from "next/link";
import { makeStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'


function LessonAdd (props){


  const lessonadd = makeStyles({
top :{
    textAlign:"center",
},
title:{
    fontWeight: 'bold',
    margin:"0 auto",
    marginTop:"20px",
},
inputform: {
    marginTop: '50px',
    width: '500px',
    margin:"0 auto",
},
inputtitle: {
    margin:"0 auto",
},
textarea: {
    marginTop: '20px',
    margin:"0 auto",
},
detailinfo: {
    marginTop: '20px',
    margin:"0 auto",
}
});


  //使用するステートの設定(Hook)
  const [lessonname,setLessonname] = useState("");
  const [place,setPlace] = useState("");
  const [time,setTime] = useState("");
  const [price,setPrice] = useState("");
  const [lessoncomment,setLessoncomment] = useState("");

  //inputに入力された処理をeで受け取ってステートに入れる関数
  const doChangeName =(e)=>{
    setLessonname(e.target.value);
  }
  const doChangePlace= (e)=>{
    setPlace(e.target.value);
  }
  const doChangeTime = (e)=>{
    setTime(e.target.value);
  }
  const doChangePrice = (e)=>{
    setPrice(e.target.value);
  }
  const doChangeComment = (e)=>{
    setLessoncomment(e.target.value);
  }

  //追加ボタンを押したらfirebaseにステートの情報を書き込む処理
  //addで追加しているから、ドキュメントidはユニークなidが自動で当てられる
  //Reduxからユーザーのemail(id)をencode( .→* )にして定数に代入
  const doSubmit = async()=>{
    const db = firebase.firestore ();
    const email = Lib.encodeEmail(props.email)
    await db.collection("lessons").add({
        createrid: email,
        lessonname:lessonname,
        lessonplace:place,
        lessonprice:price,
        lessontext:lessoncomment,
        lessontime:time
      }).then(function(doc){
        console.log("LessonID:",doc.id);
      });
  }

      const classes = lessonadd();

    return(
        <div className={classes.top}>
            <div className={classes.title}>
            <Typography variant="h5">新規レッスンの追加</Typography>
            </div>
            <Typography variant="h8">自分の能力を生かして、ウィンタースポーツの輪を広げましょう。</Typography>

            <div className = {classes.inputform}>
                <Typography className={classes.inputtitle} variant="h8">レッスンに関する情報を入力してください。</Typography>
                <br></br>
                <form className={classes.textarea} noValidate autoComplete="off"></form>
                        <TextField
                    id="standard-textarea"
                    label="レッスン名"
                    placeholder=""
                    multiline
                    fullWidth
                    onChange={doChangeName}
                    />

                <form className={classes.textarea} noValidate autoComplete="off"></form>
                        <TextField
                    id="standard-textarea"
                    label="日時"
                    placeholder="〇月〇日午前〇時～〇月〇日午前〇時"
                    multiline
                    fullWidth
                    onChange={doChangeTime}
                    />

                <form className={classes.textarea} noValidate autoComplete="off"></form>
                        <TextField
                    id="standard-textarea"
                    label="場所"
                    placeholder="〇〇スキー場"
                    multiline
                    fullWidth
                    onChange={doChangePlace}
                    />

                <form className={classes.textarea} noValidate autoComplete="off"></form>
                        <TextField
                    id="standard-textarea"
                    label="料金"
                    placeholder="￥〇〇〇〇円"
                    multiline
                    fullWidth
                    onChange={doChangePrice}
                    />
                <div className={classes.detailinfo}>
                <form className={classes.textarea} noValidate autoComplete="off"></form>
                        <TextField
                    id="outlined-multiline-static"
                    label="レッスン内容"
                    placeholder=""
                    multiline
                    rows={8}
                    variant="outlined"
                    fullWidth
                    onChange={doChangeComment}
                    />
                </div>
            </div>
            <Link href="/mypage">
            <Button style={{marginTop:"10px"}} variant="outlined" size="large"color="ingerit" onClick={doSubmit}>追 加</Button>
            </Link>
        </div>
    )
}

LessonAdd =connect((state)=>state)(LessonAdd);
export default LessonAdd;




  //       <div className={classes.top}>
  //           <div className={classes.title}>
  //           <Typography variant="h5">新規レッスンの追加</Typography>
  //           </div>
  //           <Typography variant="h8">自分の能力を生かして、ウィンタースポーツの輪を広げましょう。</Typography>

  //           <div className = {classes.inputform}>
  //               <Typography className={classes.inputtitle} variant="h8">レッスンに関する情報を入力してください。</Typography>
  //               <br></br>
  //               <form className={classes.textarea} noValidate autoComplete="off"></form>
  //                       <TextField
  //                   id="standard-textarea"
  //                   label="レッスン名"
  //                   placeholder=""
  //                   multiline
  //                   fullWidth
  //                   />

  //               <form className={classes.textarea} noValidate autoComplete="off"></form>
  //                       <TextField
  //                   id="standard-textarea"
  //                   label="日時"
  //                   placeholder="〇月〇日午前〇時～〇月〇日午前〇時"
  //                   multiline
  //                   fullWidth
  //                   />

  //               <form className={classes.textarea} noValidate autoComplete="off"></form>
  //                       <TextField
  //                   id="standard-textarea"
  //                   label="場所"
  //                   placeholder="〇〇スキー場"
  //                   multiline
  //                   fullWidth
  //                   />

  //               <form className={classes.textarea} noValidate autoComplete="off"></form>
  //                       <TextField
  //                   id="standard-textarea"
  //                   label="料金"
  //                   placeholder="￥〇〇〇〇円"
  //                   multiline
  //                   fullWidth
  //                   />
  //               <div className={classes.detailinfo}>
  //               <form className={classes.textarea} noValidate autoComplete="off"></form>
  //                       <TextField
  //                   id="outlined-multiline-static"
  //                   label="レッスン内容"
  //                   placeholder=""
  //                   multiline
  //                   rows={8}
  //                   variant="outlined"
  //                   fullWidth
  //                   />
  //               </div>
  //           </div>
  //           <Link href="/mypage">
  //           <Button style={{marginTop:"10px"}} variant="outlined" size="large"color="ingerit" >追 加</Button>
  //           </Link>
  //       </div>
  // <div>
  //   <h2>レッスン追加</h2>
  //   <p>レッスン名</p>
  //   <input type="text" onChange={doChangeName}></input>
  //   <p>場所</p>
  //   <input type="text" onChange={doChangePlace}></input>
  //   <p>所要時間</p>
  //   <input type="text" onChange={doChangeTime}></input>
  //   <p>料金</p>
  //   <input type="text" onChange={doChangePrice}></input>
  //   <p>レッスン詳細</p>
  //   <input type="text" onChange={doChangeComment}></input>
  //   {/* 要確認 : ページ移動処理がfirebase書き込む処理より先に実行されるのが大丈夫なのか */}
  //   {/* next.jsのRouterメソッドを使って、dosubmit内でページ移動したかったがエラーが出たのでとりあえずLinkを使ってある */}
  //   <Link href="/mypage">
  //   <button onClick={doSubmit}>追加</button>
  //   </Link>
  // </div>