//要検討画像アップロード処理

import React, { useState } from "react"
import firebase from "firebase"
import "firebase/storage"
import { connect } from "react-redux"
import Lib from "../../Lib/address_lib"
import Title from "../normal_parts/Title"
import ProfileEditUi from "./parts/ProfileEditUi"

function ProfileEdit(props) {
  const style = {
    width: "50%",
    margin: "0 auto",
    marginTop: "150px"
  }
  //使用するステートの設定(Hook)
  const [name, setName] = useState("")
  const [introduction, setIntroduction] = useState("")

  //inputに入力された処理をeで受け取ってステートに入れる関数
  const doChangeName = (e) => {
    setName(e.target.value)
  }
  const doChangeIntroduction = (e) => {
    setIntroduction(e.target.value)
  }

  //追加ボタンを押したらfirebaseにステートの情報を書き込む処理
  //Reduxからユーザーのemail(id)をencode( .→* )にして定数に代入
  const doSubmit = async () => {
    const db = firebase.firestore()
    const email = Lib.encodeEmail(props.email)
    await db
      .collection("users")
      .doc(email)
      .set(
        {
          profile: { name: name, introduction: introduction }
        },
        { merge: true }
      )
      .then(function () {
        //いろいろ確認に利用、いらない処理
        console.log(name, introduction)
      })
  }

  return (
    <div>
      <Title title={"マイプロフィール編集"} />
      <ProfileEditUi
        doChangeName={doChangeName}
        name={name}
        doChangeIntroduction={doChangeIntroduction}
        doSubmit={doSubmit}
      />
    </div>
  )
}

ProfileEdit = connect((state) => state)(ProfileEdit)
export default ProfileEdit
