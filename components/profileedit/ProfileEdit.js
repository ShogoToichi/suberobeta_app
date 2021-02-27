//要検討画像アップロード処理

import React,{useState} from "react";
import firebase from "firebase";
import "firebase/storage";
import { connect } from "react-redux";
import Lib from "../../Lib/address_lib";
import Link from "next/link";
import GetImage from "./GetImage";
import { makeStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Avatar from '@material-ui/core/Avatar';



const plofiledit = makeStyles({
    title: {
        margin: '10px',
        fontWeight: 'bold',
    },
    name: {
        marginTop: '20px'
    },
    upload: {
        marginTop: '40px'
    },
    plofile: {
        marginTop: '40px',
    },
    buttongroup:{
        marginTop: '40px',
        textAlign: 'center',
    },
    button:{
        width: '200px',
        backgroundColor: '#DDD',
        color: 'black',
        margin:"0px 20px",
    },

});





function ProfileEdit (props){

  const style = {
    width: "50%",
    margin: "0 auto",
    marginTop: "150px",
  };
//使用するステートの設定(Hook)
  const [name,setName] = useState("");
  const[introduction,setIntroduction] = useState("");

  //inputに入力された処理をeで受け取ってステートに入れる関数
  const doChangeName =(e)=>{
    setName(e.target.value);
  }
  const doChangeIntroduction =(e)=>{
    setIntroduction(e.target.value);
  }

  //追加ボタンを押したらfirebaseにステートの情報を書き込む処理
  //Reduxからユーザーのemail(id)をencode( .→* )にして定数に代入
  const doSubmit = async()=>{
    const db = firebase.firestore ();
    const email = Lib.encodeEmail(props.email)
    await db.collection("users").doc(email).set({
      profile:{ name:name , introduction:introduction
        }
    },{merge: true}).then(function(){
      //いろいろ確認に利用、いらない処理
        console.log(name,introduction);
      });
  }


  const classes = plofiledit();
  



  return(
    <div>
            <div className={classes.title}>
                <Typography variant="h5">マイプロフィール編集</Typography> 
            </div>

            <div className={classes.name}>
                    <Typography variant="h8">ユーザ名</Typography>
                    <TextField
                            id="standard-textarea"
                            label="ユーザ名"
                            placeholder=""
                            multiline
                            maxWidth
                            onChange={doChangeName}
                    />
            </div>
            
            
            <div className={classes.upload}>
                    <Typography variant="h8">プロフィール画像のアップロード</Typography>

                    <br></br>
                    <GetImage name={name}/>
            </div>



            <div className={classes.plofile}>
                    <TextField
                    id="standard-textarea"
                    label="自己紹介文"
                    placeholder=""
                    rows={8}
                    multiline
                    variant="outlined"
                    fullWidth
                    onChange={doChangeIntroduction}
                    />
            </div>

            <div className={classes.buttongroup}>
                    <ButtonGroup disableElevation variant="outlined">
                        <Link href="/mypage">
                    <Button className={classes.button} onClick={doSubmit}>変更</Button>
                        </Link>
                        <Link href="/mypage">
                    <Button className={classes.button}>キャンセル</Button>
                        </Link>
                    </ButtonGroup>
            </div>
        </div>
 
);}

ProfileEdit =connect((state)=>state)(ProfileEdit);
export default ProfileEdit;



