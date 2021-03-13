//要検討画像アップロード処理

import React, { useEffect, useState } from "react"
import firebase from "firebase"
import "firebase/storage"
import { connect } from "react-redux"
import Lib from "../../Lib/address_lib"
import Title from "../commonParts/Title"
import ProfileEditUi from "./parts/ProfileEditUi"
import ChangeBtn from "./parts/ChangeBtn"
import Grid from "@material-ui/core/Grid"

function ProfileEdit(props) {
  //使用するステートの設定,テキストフィールドの値のやつ
  const [name, setName] = useState("")
  const [introduction, setIntroduction] = useState("")

  //初期値を入れたインプットフォームコンポーネントを入れるステート
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

  //変更ボタンを押したらfirebaseにステートの情報を書き込む処理
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
  }

  //現在のデータの取得及びインプットフォームの作成
  const getCurrentData = async () => {
    await db
      .collection("users")
      .doc(email)
      .get()
      .then((doc) => {
        //テキストボックスの中身を書き換えないと、それぞれのステートが初期値から変更されない。それぞれのステートに現在のレッスン情報を入れる
        //この処理がないと、書き換えが行われなかった値がステートを定義した時の初期値の" "になってしまう
        setName(doc.data().profile.name)
        setIntroduction(doc.data().profile.introduction)

        //firebaseから取得した現在のプロフィール情報をInputFormコンポーネントのそれぞれのテキストボックスのdefaultValueに渡したものをステートに代入している
        setInputForm(
          <ProfileEditUi
            currentName={doc.data().profile.name}
            currentIntroduction={doc.data().profile.introduction}
            doChangeName={doChangeName}
            doChangeIntroduction={doChangeIntroduction}
          />
        )
      })
  }

  useEffect(() => {
    getCurrentData()
  }, [])

  return (
    <Grid container spacing={1} direction="row" justify="center">
      <Title title={"マイプロフィール編集"} />
      <Grid item xs={9} sm={8} lg={7}>
        {inputForm}
      </Grid>
      <Grid item xs={9} sm={8} lg={7}>
        <ChangeBtn onClick={doSubmit} />
      </Grid>
    </Grid>
  )
}

ProfileEdit = connect((state) => state)(ProfileEdit)
export default ProfileEdit
