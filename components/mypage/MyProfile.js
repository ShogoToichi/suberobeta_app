//要追加 : 画像アップロード

import React, { useState } from "react"
import firebase from "firebase"
import "firebase/storage"
import { connect } from "react-redux"
import Lib from "../../Lib/address_lib"
import MyProfileUi from "./parts/MyProfileUi"

function MyProfile(props) {
  // ステートの設定
  const [name, setName] = useState("no data")
  const [introduction, setIntroduction] = useState("no data")
  const [imageUrl, setImageUrl] = useState(null)

  const getFireData = async () => {
    const db = firebase.firestore()
    // emailにReduxからユーザーのemailを取得
    const email = Lib.encodeEmail(props.email)
    // emailでfirebaseを参照
    await db
      .collection("users")
      .doc(email)
      .get()
      .then((doc) => {
        // 取得したデータを定数に入れてから、ステートに入れる
        const profileData = doc.data()
        setName(profileData.profile.name)
        setIntroduction(profileData.profile.introduction)
        setImageUrl(profileData.imageUrl)
      })
  }

  if (name == "no data") {
    getFireData()
  }

  return (
    <>
      <MyProfileUi
        imageUrl={imageUrl}
        name={name}
        introduction={introduction}
      />
    </>
  )
}

MyProfile = connect((state) => state)(MyProfile)
export default MyProfile
