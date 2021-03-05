//要検討画像アップロード処理

import React, { useEffect, useState } from "react"
import firebase from "firebase"
import "firebase/storage"
import { connect } from "react-redux"
import Lib from "../../Lib/address_lib"
import Title from "../commonParts/Title"
import ProfileEditUi from "./parts/ProfileEditUi"
import ChangeBtn from "./parts/ChangeBtn"

function ProfileEdit(props) {
  //使用するステートの設定(Hook)
  const [name, setName] = useState("")
  const [introduction, setIntroduction] = useState("")

  const [inputForm, setInputForm] = useState("")

  const db = firebase.firestore()
  const email = Lib.encodeEmail(props.email)

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
    await db
      .collection("users")
      .doc(email)
      .set(
        {
          profile: { name: name, introduction: introduction }
        },
        { merge: true }
      )
      .then(() => {
        //いろいろ確認に利用、いらない処理
        console.log(name, introduction)
      })
  }

  const getCurrentData = async () => {
    await db
      .collection("users")
      .doc(email)
      .get()
      .then(function (doc) {
        setName(doc.data().profile.name)
        setIntroduction(doc.data().profile.introduction)

        setInputForm(
          <ProfileEditUi
            currentName={doc.data().profile.name}
            currentIntroduction={doc.data().profile.introduction}
            doChangeName={doChangeName}
            doChangeIntroduction={doChangeIntroduction}
            doSubmit={doSubmit}
          />
        )
      })
  }

  useEffect(() => {
    getCurrentData()
  }, [])

  return (
    <>
      <Title title={"マイプロフィール編集"} />
      {inputForm}
      <ChangeBtn onClick={doSubmit} />
    </>
  )
}

ProfileEdit = connect((state) => state)(ProfileEdit)
export default ProfileEdit
