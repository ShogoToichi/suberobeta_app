//ProfileAddでimport
//inputに入れられたファイルをfirebase storageに突っ込む
//取得した画像のurlを取得してcloudfirestoreに入れて引っぱり出せるようにする

import firebase, { storage } from "../../redux/store"
import "firebase/storage"
import React, { useEffect, useState } from "react"
import { connect } from "react-redux"
import Lib from "../../Lib/address_lib"
import GetImageUi from "./parts/GetImageUi"
import { SystemUpdateAlt } from "@material-ui/icons"
import getProfileImageUrl from "../commonParts/getProfileImageUrl"

let currentImageUrl
let image = ""
let imageUrl = ""
let updatedImageName = ""
let previousImageName = ""

function GetImage(props) {
  const db = firebase.firestore()
  const email = Lib.encodeEmail(props.email)
  const [upload, setUpload] = useState(true)
  const [update, setUpdate] = useState(false)

  //画像取得する関数
  const handleImage = (event) => {
    image = event.target.files[0]
    // const image = event.target.files[0]
    // setImage(image)
  }

  //現在の画像を取得する関数
  const getCurrentImage = () => {
    db.collection("users")
      .doc(email)
      .get()
      .then(async (doc) => {
        currentImageUrl = await getProfileImageUrl(doc.data().imageName)
        console.log("getCurrentImage: ", doc.data().imageName)

        setUpload(false)
      })
  }

  // 画像が初期の画像かどうかを判断して初期画像以外の時以前の画像を削除する関数
  const remainInitImage = async () => {
    // 初期画像の名前
    const initImageName = "initImage.png"
    if (previousImageName !== initImageName) {
      await deleteImage(previousImageName)
    } else {
      // console.log("don't delete image")
    }
  }

  // 画像の削除をする関数
  const deleteImage = async (imageName) => {
    await firebase
      .storage()
      .ref()
      .child("profileImages")
      .child(imageName)
      .delete()
      .then(() => {
        console.log("File deleted successfully!")
      })
      .catch((error) => {
        console.log("an error occurred!")
      })
  }

  // 画像のファイル名の最初に年月日時分秒を付け加える
  const namingImage = (ImageName) => {
    const today = new Date()
    return (
      String(today.getFullYear()) +
      String(today.getMonth() + 1) + // 月だけは0～11を返す
      String(today.getDate()) +
      String(today.getHours()) +
      String(today.getMinutes()) +
      String(today.getSeconds()) +
      ImageName
    )
  }

  const onSubmit = (event) => {
    db.collection("users")
      .doc(email)
      .get()
      .then((doc) => {
        previousImageName = doc.data().imageName
      })
    console.log(previousImageName)

    event.preventDefault()
    if (image === "") {
      console.log("ファイルが選択されていません")
    } else if (image.size > 5 * 10 ** 6) {
      // ファイルサイズが5MB以上の時ははじく
      alert("ファイルサイズは5MB以下にしてください")
    } else {
      updatedImageName = namingImage(image.name)
      // アップロード処理
      const uploadTask = storage
        .ref(`/profileImages/${updatedImageName}`)
        .put(image)
      uploadTask.on(
        firebase.storage.TaskEvent.STATE_CHANGED,
        next,
        error,
        complete
      )
    }
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
  const complete = async () => {
    // 完了後の処理
    // 画像表示のため、アップロードした画像のURLを取得
    await db.collection("users").doc(email).set(
      {
        imageName: updatedImageName
      },
      { merge: true }
    )

    // アップロード後に以前の画像を削除する
    await remainInitImage(previousImageName)

    setUpload(true)
    setUpdate(update ? false : true)
  }

  useEffect(() => {
    getCurrentImage()
  }, [update])

  return (
    <GetImageUi
      onSubmit={onSubmit}
      handleImage={handleImage}
      upload={upload}
      currentImageUrl={currentImageUrl}
      imageUrl={imageUrl}
      className="App"
    />
  )
}

GetImage = connect((state) => state)(GetImage)
export default GetImage
