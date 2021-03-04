//ProfileAddでimport
//inputに入れられたファイルをfirebase storageに突っ込む
//取得した画像のurlを取得してcloudfirestoreに入れて引っぱり出せるようにする

import firebase, { storage } from "../../redux/store"
import "firebase/storage"
import React, { useState } from "react"
import { connect } from "react-redux"
import Lib from "../../Lib/address_lib"
import GetImageUi from "./parts/GetImageUi"

let image = ""
let imageUrl = ""

function GetImage(props) {
  // image, imageUrlはstateじゃなくても大丈夫だろうか．．？
  // const [image, setImage] = useState("")
  // const [imageUrl, setImageUrl] = useState("")
  const [update, setUpdata] = useState(false)

  const handleImage = (event) => {
    image = event.target.files[0]
    // const image = event.target.files[0]
    // setImage(image)
  }
  const onSubmit = (event) => {
    event.preventDefault()
    if (image === "") {
      console.log("ファイルが選択されていません")
    }
    // アップロード処理
    const uploadTask = storage.ref(`/profileImages/${image.name}`).put(image)
    uploadTask.on(
      firebase.storage.TaskEvent.STATE_CHANGED,
      next,
      error,
      complete
    )
  }
  const next = (snapshot) => {
    // 進行中のsnapshotを得る
    // アップロードの進行度を表示
    const percent = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
    console.log(percent + "% done")
    console.log(snapshot)
  }
  const error = (error) => {
    // エラーハンドリング
    console.log(error)
  }
  const complete = () => {
    // 完了後の処理
    // 画像表示のため、アップロードした画像のURLを取得
    storage
      .ref("profileImages")
      .child(image.name)
      .getDownloadURL()
      .then((firebaseUrl) => {
        // setImageUrl(firebaseUrl)
        imageUrl = firebaseUrl
        // 取得した画像の名前をfirebaseに保存
        const db = firebase.firestore()
        const email = Lib.encodeEmail(props.email)
        db.collection("users").doc(email).set(
          {
            imageUrl: firebaseUrl
          },
          { merge: true }
        )
        // .then(() => {
        //   console.log(firebaseUrl)
        //   console.log(imageUrl)
        // })
      })
    setUpdata(update ? false : true)
  }

  return (
    <div className="App">
      <GetImageUi
        onSubmit={onSubmit}
        handleImage={handleImage}
        imageUrl={imageUrl}
      />
    </div>
  )
}

GetImage = connect((state) => state)(GetImage)
export default GetImage
