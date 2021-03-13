import React, { useEffect, useState } from "react"
import firebase from "firebase"
import "firebase/storage"
import { connect } from "react-redux"
import Lib from "../../Lib/address_lib"
import Title from "../commonParts/Title"
import InputForm from "./parts/InputForm"
import getProfileImageUrl from "../commonParts/getProfileImageUrl"
import Grid from "@material-ui/core/Grid"
import { useRouter } from "next/router"

let imageUrl = ""

function LessonAdd(props) {
  //使用するステートの設定(Hook)
  const [lessonName, setLessonName] = useState("")
  const [lessonPlace, setLessonPlace] = useState("")
  const [lessonTime, setLessonTime] = useState("")
  const [lessonPrice, setLessonPrice] = useState("")
  const [lessonDescription, setLessonDescription] = useState("")
  const router = useRouter()

  //inputに入力された処理をeで受け取ってステートに入れる関数
  const doChangeLessonName = (e) => {
    setLessonName(e.target.value)
  }
  const doChangeLessonPlace = (e) => {
    setLessonPlace(e.target.textContent)
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

  const validate = () => {
    const alertText = []
    if (lessonName.length == 0) {
      alertText.push("レッスン名を入力してください")
    } else if (lessonName.length > 32) {
      alertText.push("レッスン名は32文字以内で入力してください")
    }
    if (lessonPlace === "") {
      alertText.push("場所を入力してください")
    }
    if (lessonPrice === "") {
      alertText.push("料金を入力してください")
    }
    if (lessonDescription === "") {
      alertText.push("レッスン内容を入力してください")
    }

    if (alertText.length === 0) {
      return true
    } else {
      alert(alertText.join("\n"))
      return false
    }
  }

  const lessonNameValidate = () => {
    if (lessonName.length > 32) {
      return false
    } else {
      return true
    }
  }

  //追加ボタンを押したらfirebaseにステートの情報を書き込む処理
  //addで追加しているから、ドキュメントidはユニークなidが自動で当てられる
  //Reduxからユーザーのemail(id)をencode( .→* )にして定数に代入
  const doSubmit = async () => {
    if (validate()) {
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
      await router.push("/mypage")
    }
  }

  useEffect(() => {
    if (!props.login) {
      return router.push("/")
    }
    getCreaterImage()
  }, [])

  return (
    <Grid container spacing={2} direction="row" justify="center">
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
          lessonNameValidation={lessonNameValidate()}
        />
      </Grid>
    </Grid>
  )
}

LessonAdd = connect((state) => state)(LessonAdd)
export default LessonAdd
