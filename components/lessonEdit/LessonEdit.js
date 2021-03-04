import React, { useState } from "react"
import firebase from "firebase"
import "firebase/storage"
import { connect } from "react-redux"
import Lib from "../../Lib/address_lib"
import Title from "../commonParts/Title"
import InputForm from "./parts/InputForm"
import { useRouter } from "next/router"

function LessonEdit(props) {
  //使用するステートの設定(Hook)
  const [lessonname, setLessonname] = useState("")
  const [place, setPlace] = useState("")
  const [time, setTime] = useState("")
  const [price, setPrice] = useState("")
  const [lessoncomment, setLessoncomment] = useState("")

  //初期値取得用ステート
  const [initlessonname, setInitLessonname] = useState("取得中")
  const [initlessonplace, setInitLessonPlace] = useState("取得中")
  const [initlessontime, setInitLessonTime] = useState("")
  const [initlessonprice, setInitLessonPrice] = useState("")
  const [initlessoncomment, setInitLessoncomment] = useState("")
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
  const doSubmit = async () => {
    const db = firebase.firestore()
    const email = Lib.encodeEmail(props.email)
    await db
      .collection("lessons")
      .set(
        {
          lessonname: lessonname,
          lessonplace: place,
          lessonprice: price,
          lessontext: lessoncomment,
          lessontime: time
        },
        { merge: true }
      )
      .then(function (doc) {
        console.log("LessonID:", doc.id)
      })
  }

  //現在のデータの取得
  const router = useRouter()
  const getCurrentData = async () => {
    const db = firebase.firestore()

    await db
      .collection("lessons")
      .doc(router.query.lessonid)
      .get()
      .then(function (doc) {
        const lessondata = doc.data()
        setInitLessonname(lessondata.lessonname)
        setInitLessonPlace(lessondata.lessonplace)
        setInitLessonPrice(lessondata.lessonprice)
        setInitLessoncomment(lessondata.lessontext)
        setInitLessonTime(lessondata.lessontime)
        console.log(lessondata.lessonname)
        console.log(initlessonname)
      })
  }
  return (
    <div>
      <button onClick={getCurrentData}>読み込み</button>
      <Title
        title={"新規レッスンの追加"}
        subtitle={
          "自分の能力を生かして、ウィンタースポーツの輪を広げましょう。"
        }
      />
      <InputForm
        lessonname={initlessonname}
        lessonprice={initlessonprice}
        lessontime={initlessontime}
        lessonplace={initlessonplace}
        lessoncomment={initlessoncomment}
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

LessonEdit = connect((state) => state)(LessonEdit)
export default LessonEdit
