//ちょっとごり押し気味なコード
//知識がついたり、余裕ができたら修正しよう

import React, { useEffect, useState } from "react"
import firebase from "firebase"
import "firebase/storage"
import { connect } from "react-redux"
import Lib from "../../Lib/address_lib"
import Title from "../commonParts/Title"
import InputForm from "./parts/InputForm"
import { useRouter } from "next/router"
import SubmitButton from "./parts/SubmitButton"
import DeleteAlertButton from "./parts/DeleteAlertButton"
import Grid from "@material-ui/core/Grid"

function LessonEdit(props) {
  //使用するステートの設定、テキストフィールドの値を見るためのやつ
  const [lessonName, setLessonName] = useState("")
  const [lessonPlace, setLessonPlace] = useState("")
  const [lessonTime, setLessonTime] = useState("")
  const [lessonPrice, setLessonPrice] = useState("")
  const [lessonDescription, setLessonDescription] = useState("")

  //初期値を入れたインプットフォームコンポーネントを入れるステート
  const [inputForm, setInputForm] = useState("")

  //inputに入力された処理をeで受け取ってステートに入れる関数
  const doChangeLessonName = (e) => {
    setLessonName(e.target.value)
  }
  const doChangeLessonPlace = (e) => {
    setLessonPlace(e.target.value)
  }
  const doChangeLessonTime = (e) => {
    setLessonTime(e.target.value)
  }
  const doChangeLessonPrice = (e) => {
    setLessonPrice(e.target.value)
  }
  const doChangeLessonDescription = (e) => {
    setLessonDescription(e.target.value)
  }

  //追加ボタンを押したらfirebaseにステートの情報を書き込む処理
  const doSubmit = async () => {
    const db = firebase.firestore()
    const email = Lib.encodeEmail(props.email)
    await db.collection("lessons").doc(router.query.lessonid).set(
      {
        lessonName: lessonName,
        lessonPlace: lessonPlace,
        lessonPrice: lessonPrice,
        lessonDescription: lessonDescription,
        lessonTime: lessonTime
      },
      { merge: true }
    )
  }

  //現在のデータの取得及びインプットフォームの作成
  const router = useRouter()
  const db = firebase.firestore()
  const getCurrentData = async () => {
    await db
      .collection("lessons")
      .doc(router.query.lessonid)
      .get()
      .then((doc) => {
        //テキストボックスの中身を書き換えないと、それぞれのステートが初期値から変更されない。それぞれのステートに現在のレッスン情報を入れる
        //この処理がないと、書き換えが行われなかった値がステートを定義した時の初期値の" "になってしまう
        setLessonName(doc.data().lessonName)
        setLessonTime(doc.data().lessonTime)
        setLessonPlace(doc.data().lessonPlace)
        setLessonPrice(doc.data().lessonPrice)
        setLessonDescription(doc.data().lessonDescription)
        //firebaseから取得した現在のレッスン情報をInputFormコンポーネントのそれぞれのテキストボックスのdefaultValueに渡したものをステートに代入している
        setInputForm(
          <InputForm
            lessonName={doc.data().lessonName}
            lessonPrice={doc.data().lessonPrice}
            lessonTime={doc.data().lessonTime}
            lessonPlace={doc.data().lessonPlace}
            lessonDescription={doc.data().lessonDescription}
            //onChange属性の設定
            onChangeLessonName={doChangeLessonName}
            onChangeLessonTime={doChangeLessonTime}
            onChangeLessonPlace={doChangeLessonPlace}
            onChangeLessonPrice={doChangeLessonPrice}
            onChangeLessonDescription={doChangeLessonDescription}
          />
        )
      })
  }

  //レッスン削除処理
  const deleteLesson = () => {
    db.collection("lessons").doc(router.query.lessonid).delete()
  }

  useEffect(() => {
    if (!props.login) {
      return router.push("/")
    }
    getCurrentData()
  }, [])

  return (
    <Grid container spacing={2} deraction="row" justify="center">
      <Title
        title={"レッスンの編集"}
        subtitle={
          "自分の能力を生かして、ウィンタースポーツの輪を広げましょう。"
        }
      />
      <Grid item xs={12} sm={8} lg={8}>
        <DeleteAlertButton onClick={deleteLesson} />
      </Grid>
      <Grid item xs={10} sm={9} lg={7}>
        {inputForm}
      </Grid>
      <Grid item xs={4} sm={5} lg={6}>
        <SubmitButton onClick={doSubmit}>submit</SubmitButton>
      </Grid>
    </Grid>
  )
}

LessonEdit = connect((state) => state)(LessonEdit)
export default LessonEdit
