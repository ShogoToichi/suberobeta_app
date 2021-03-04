import React, { useState, useEffect } from "react"
import firebase from "firebase"
import { useRouter } from "next/router"
import { connect } from "react-redux"
import Lib from "../../Lib/address_lib"
import BuyBtn from "./parts/BuyBtn"
import LessonDitail from "./parts/LessonDitail"
import Title from "../commonParts/Title"
import EditBtn from "./parts/EditBtn"

let createrId = ""
let createrName = ""
let createrImageUrl = ""
let buyerName = ""
let lessonName = ""
let lessonPlace = ""
let lessonPrice = ""
let lessonDescription = ""
let lessonTime = ""
let lessonData = ""
let userData = ""

function LessonInfo(props) {
  const email = Lib.encodeEmail(props.email)

  //強制レンダリング用ステート
  const [update, setUpdata] = useState(false)

  const db = firebase.firestore()
  const router = useRouter()

  //lessondata及びlessoncreaterのprofileを取得
  const getLessonData = async () => {
    //router.query.lessonidでページのurlの末尾を取得
    await db
      .collection("lessons")
      .doc(router.query.lessonid)
      .get()
      //取得したデータをlessondataにしまってから、それを変数に突っ込む
      .then((doc) => {
        lessonData = doc.data()
        createrId = lessonData.createrId
        lessonName = lessonData.lessonName
        lessonPlace = lessonData.lessonPlace
        lessonTime = lessonData.lessonTime
        lessonPrice = lessonData.lessonPrice
        lessonDescription = lessonData.lessonDescription
      })

    //ここからプロフィール取得処理
    //レッスン情報で取得したcreateridでfirebaseを参照
    await db
      .collection("users")
      .doc(createrId)
      .get()
      .then((doc) => {
        userData = doc.data()
        createrName = userData.profile.name
        createrImageUrl = userData.imageUrl
      })

    //購入したときに購入者の名前もfirebaseに書き込みたいから取得する
    await db
      .collection("users")
      .doc(email)
      .get()
      .then((doc) => {
        buyerName = doc.data().profile.name
      })

    //関数の最後で強制的にレンダリング
    setUpdata(update ? false : true)
  }

  //firebaseのmessagesに必要な情報を書き込む
  const doBuy = async () => {
    await db.collection("messages").add({
      lessonId: router.query.lessonid,
      buyerId: email,
      buyerName: buyerName,
      createrId: createrId,
      createrName: createrName,
      lessonName: lessonName,
      buyTime: firebase.firestore.FieldValue.serverTimestamp(),
      trading: true //取引中かどうかの真偽値、メッセージ検索で使用中
    })
  }

  useEffect(() => {
    getLessonData()
  }, [])

  return (
    <div style={{ marginTop: "30px" }}>
      <Title title={lessonName} />
      {/* クリエーターIDとじぶんのIDが一致していたらレッスン編集ボタンを表示 */}
      {email == createrId ? (
        <EditBtn lessonId={router.query.lessonid} />
      ) : (
        <BuyBtn
          lessonId={router.query.lessonid}
          buyerId={email}
          onClick={doBuy}
        />
      )}
      <LessonDitail
        createrImageUrl={createrImageUrl}
        createrName={createrName}
        lessonPrice={lessonPrice}
        lessonPlace={lessonPlace}
        lessonTime={lessonTime}
        lessonDescription={lessonDescription}
      />
    </div>
  )
}

LessonInfo = connect((state) => state)(LessonInfo)
export default LessonInfo
