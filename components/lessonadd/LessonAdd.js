import React, { useEffect, useState } from "react"
import firebase from "firebase"
import "firebase/storage"
import { connect } from "react-redux"
import Lib from "../../Lib/address_lib"
import Title from "../commonParts/Title"
import InputForm from "./parts/InputForm"
import getProfileImageUrl from "../commonParts/getProfileImageUrl"
import Grid from "@material-ui/core/Grid"

let imageUrl = ""

function LessonAdd(props) {
  //使用するステートの設定(Hook)
  const [lessonName, setLessonName] = useState("")
  const [lessonPlace, setLessonPlace] = useState("")
  const [lessonTime, setLessonTime] = useState("")
  const [lessonPrice, setLessonPrice] = useState("")
  const [lessonDescription, setLessonDescription] = useState("")

  //inputに入力された処理をeで受け取ってステートに入れる関数
  const doChangeLessonName = (e) => {
    setLessonName(e.target.value)
  }
  // const doChangeLessonPlace = (e) => {
  //   setLessonPlace(e.target.value)
  // }
  const doChangeLessonTime = (e) => {
    setLessonTime(e.target.value)
  }
  const doChangeLessonPrice = (e) => {
    setLessonPrice(e.target.value)
  }
  const doChangeLessonDescription = (e) => {
    setLessonDescription(e.target.value)
  }

  const db = firebase.firestore()
  const email = Lib.encodeEmail(props.email)

  const getCreaterImage = async () => {
    await db
      .collection("users")
      .doc(email)
      .get()
      .then(async (doc) => {
        imageUrl = await getProfileImageUrl(doc.data().imageName)
      })
  }

  //追加ボタンを押したらfirebaseにステートの情報を書き込む処理
  //addで追加しているから、ドキュメントidはユニークなidが自動で当てられる
  //Reduxからユーザーのemail(id)をencode( .→* )にして定数に代入
  const doSubmit = async () => {
    await db.collection("lessons").add({
      createrId: email,
      createrImageUrl: imageUrl,
      lessonName: lessonName,
      lessonPlace: lessonPlace,
      lessonPrice: lessonPrice,
      lessonDescription: lessonDescription,
      lessonTime: lessonTime,
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    })
  }

  useEffect(() => {
    getCreaterImage()
  }, [])

  return (
    <Grid container spacing={2} deraction="row" justify="center">
      <Title
        title={"新規レッスンの追加"}
        subtitle={
          "自分の能力を生かして、ウィンタースポーツの輪を広げましょう。"
        }
      />
      <Grid item xs={10} sm={8} lg={7}>
        <InputForm
          onChangeLessonName={doChangeLessonName}
          onChangeLessonTime={doChangeLessonTime}
          onChangeLessonPlace={doChangeLessonPlace}
          onChangeLessonPrice={doChangeLessonPrice}
          onChangeLessonDescription={doChangeLessonDescription}
          doSubmit={doSubmit}
        />
      </Grid>
    </Grid>
  )
}

LessonAdd = connect((state) => state)(LessonAdd)
export default LessonAdd
