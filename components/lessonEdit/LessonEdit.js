import React, { useEffect, useState, useCallback } from "react"
import firebase from "firebase"
import "firebase/storage"
import { connect } from "react-redux"
import Lib from "../../Lib/address_lib"
import Title from "../commonParts/Title"
import InputForm from "./parts/InputForm"
import { useRouter } from "next/router"
import SubmitButton from "./parts/SubmitButton"
import { SystemUpdateAlt } from "@material-ui/icons"

function LessonEdit(props) {
  //使用するステートの設定(Hook)

  const [lessonName, setLessonName] = useState("")
  const [lessonPlace, setLessonPlace] = useState("")
  const [lessonTime, setLessonTime] = useState("")
  const [lessonPrice, setLessonPrice] = useState("")
  const [lessonDescription, setLessonDescription] = useState("")
  const [updata, setUpdata] = useState("")

  //初期値を入れたインプットフォームを入れるステート
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
    setUpdata(updata ? false : true)
    await db
      .collection("lessons")
      .doc(router.query.lessonid)
      .set(
        {
          lessonName: lessonName,
          lessonPlace: lessonPlace,
          lessonPrice: lessonPrice,
          lessonDescription: lessonDescription,
          lessonTime: lessonTime
        },
        { merge: true }
      )
      .then(function () {
        console.log(lessonName)
      })
  }

  //現在のデータの取得及びインプットフォームの作成
  const router = useRouter()
  const getCurrentData = async () => {
    const db = firebase.firestore()

    await db
      .collection("lessons")
      .doc(router.query.lessonid)
      .get()
      .then((doc) => {
        setInputForm(
          <InputForm
            lessonName={doc.data().lessonName}
            lessonPrice={doc.data().lessonPrice}
            lessonTime={doc.data().lessonTime}
            lessonPlace={doc.data().lessonPlace}
            lessonDescription={doc.data().lessonDescription}
            // lessonNameValue={lessonName}
            // lessonPriceValue={lessonPrice}
            // lessonTimeValue={lessonTime}
            // lessonPlaceValue={lessonPlace}
            // lessonDescriptionValue={lessonDescription}
            onChangeLessonName={doChangeLessonName}
            onChangeLessonTime={doChangeLessonTime}
            onChangeLessonPlace={doChangeLessonPlace}
            onChangeLessonPrice={doChangeLessonPrice}
            onChangeLessonDescription={doChangeLessonDescription}
          />
        )
      })
  }

  useEffect(() => {
    getCurrentData()
    doChangeLessonName
    doChangeLessonPlace
    doChangeLessonTime
    doChangeLessonPrice
    doChangeLessonDescription
    return () => {}
  }, [])

  const lessonnameconso = () => {
    console.log(lessonName)
  }

  return (
    <div>
      <button onClick={lessonnameconso}>conso</button>
      <button onClick={doSubmit}>submit</button>
      <Title
        title={"レッスンの編集"}
        subtitle={
          "自分の能力を生かして、ウィンタースポーツの輪を広げましょう。"
        }
      />
      {inputForm}
      <SubmitButton onClick={doSubmit}>submit</SubmitButton>
    </div>
  )
}

LessonEdit = connect((state) => state)(LessonEdit)
export default LessonEdit
