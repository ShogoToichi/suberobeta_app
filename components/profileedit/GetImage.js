//ProfileAddでimport
//inputに入れられたファイルをfirebase storageに突っ込む
//取得した画像のurlを取得してcloudfirestoreに入れて引っぱり出せるようにする

import firebase,{storage} from "../../store";
import "firebase/storage";
import React,{useState} from "react";
import {connect} from "react-redux";
import Lib from "../../static/address_lib";
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/styles';
import IconButton from '@material-ui/core/IconButton';


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



function GetImage(props) {
  const [image, setImage] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const handleImage = event => {
    const image = event.target.files[0];
    setImage(image);
  };
  const onSubmit = event => {
    event.preventDefault();
    if (image === "") {
      console.log("ファイルが選択されていません");
    }
    // アップロード処理
    const uploadTask = storage.ref(`/profileimages/${image.name}`).put(image);
    uploadTask.on(
      firebase.storage.TaskEvent.STATE_CHANGED,
      next,
      error,
      complete
    );
  };
  const next = snapshot => {
    // 進行中のsnapshotを得る
    // アップロードの進行度を表示
    const percent = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log(percent + "% done");
    console.log(snapshot);
  };
  const error = error => {
    // エラーハンドリング
    console.log(error);
  };
  const complete = () => {
    // 完了後の処理
    // 画像表示のため、アップロードした画像のURLを取得
    storage
      .ref("profileimages")
      .child(image.name)
      .getDownloadURL()
      .then(fireBaseUrl => {
        setImageUrl(fireBaseUrl);
        // 取得した画像の名前をfirebaseに保存
        const db = firebase.firestore ();
        const email = Lib.encodeEmail(props.email)
        db.collection("users").doc(email).set({
          "profile.imageurl":imageUrl,
        }
        ,{merge : true}).then(function(){
          console.log(email);
          console.log(imageUrl);
      });
      });
  };

function conso(){
  console.log(imageUrl);
}


    const classes = plofiledit();

  return (
    <div className="App">
      <button onClick={conso}>conso</button>
      <form onSubmit={onSubmit}>
        <input type="file" onChange={handleImage} />
        <button>Upload</button>
      </form>
      <img src={imageUrl} alt="uploaded" />
    </div>
  );
}

GetImage = connect((state)=>state)(GetImage);
export default GetImage;


            // <div className={classes.upload}>
            //         <Typography variant="h8">プロフィール画像のアップロード</Typography>

            //         <br></br>
                    
                    
            //         <input accept="image/*" className={classes.input} id="icon-button-file" type="file" />
            //         <label htmlFor="icon-button">
            //             <IconButton color="primary" aria-label="upload picture" component="span">
            //             <PhotoCamera />
            //             </IconButton>
            //         </label>
            // </div>