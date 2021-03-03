import React, { useState } from "react"
import firebase from "firebase"
import "firebase/storage"
import { connect } from "react-redux"
import Lib from "../../Lib/address_lib"
import Title from "../normal_parts/Title"
import InputForm from "./parts/InputForm"

function LessonAdd(props) {
  //使用するステートの設定(Hook)
  const [lessonname, setLessonname] = useState("")
  const [place, setPlace] = useState("")
  const [time, setTime] = useState("")
  const [price, setPrice] = useState("")
  const [lessoncomment, setLessoncomment] = useState("")

  //inputに入力された処理をeで受け取ってステートに入れる関数
  const doChangeName = (e) => {
    setLessonname(e.target.value)
  }
  const doChangePlace = (e) => {
    setPlace(e.target.value)
  }
  const doChangeTime = (e) => {
    setTime(e.target.value)
  }
  const doChangePrice = (e) => {
    setPrice(e.target.value)
  }
  const doChangeComment = (e) => {
    setLessoncomment(e.target.value)
  }

  //追加ボタンを押したらfirebaseにステートの情報を書き込む処理
  //addで追加しているから、ドキュメントidはユニークなidが自動で当てられる
  //Reduxからユーザーのemail(id)をencode( .→* )にして定数に代入
  const doSubmit = async () => {
    const db = firebase.firestore()
    const email = Lib.encodeEmail(props.email)
    await db
      .collection("lessons")
      .add({
        createrid: email,
        lessonname: lessonname,
        lessonplace: place,
        lessonprice: price,
        lessontext: lessoncomment,
        lessontime: time
      })
      .then(function (doc) {
        console.log("LessonID:", doc.id)
      })
  }

  return (
    <div>
      <Title
        title={"新規レッスンの追加"}
        subtitle={
          "自分の能力を生かして、ウィンタースポーツの輪を広げましょう。"
        }
      />
      <InputForm
        doChangeName={doChangeName}
        doChangeTime={doChangeTime}
        doChangePlace={doChangePlace}
        doChangePrice={doChangePrice}
        doChangeComment={doChangeComment}
        doSubmit={doSubmit}
      />
    </div>
  )
}

LessonAdd = connect((state) => state)(LessonAdd)
export default LessonAdd
