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
let lessonName = ""
let lessonPlace = ""
let lessonPrice = ""
let lessonDescription = ""
let lessonTime = ""
let lessonData = ""
let userData = ""

function LessonInfo(props) {
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
      //データ取得後の処理
      //取得したデータをlessondataにしまってから、それをステートに突っ込む
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
      //if文の処理はエラーがあった時のための処理
      //ネット記事のコピペなので、必要性がどれほどあるかは謎
      .then((doc) => {
        if (doc.exists) {
          userData = doc.data()
          createrName = userData.profile.name
          createrImageUrl = userData.imageUrl
        } else {
          console.log("no data")
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error)
      })
    //関数の最後で強制的にレンダリング
    setUpdata(update ? false : true)
  }

  //firebaseのmessagesに必要な情報を書き込む
  const email = Lib.encodeEmail(props.email)
  const doBuy = async () => {
    await db.collection("messages").add({
      lessonId: router.query.lessonid,
      buyerId: email,
      createrId: createrId,
      createrName: createrName,
      lessonName: lessonName,
      buyTime: firebase.firestore.FieldValue.serverTimestamp(),
      trading: true //取引中かどうかの真偽値、まだどこでも利用してない
    })
  }

  useEffect(() => {
    getLessonData()
    return () => {}
  }, [])

  return (
    <div style={{ marginTop: "30px" }}>
      <button onClick={getLessonData}>getfiredaata</button>
      <button onClick={doBuy}>dobuy</button>
      {/* <button onClick={getLessonData}>yomikomi</button> */}
      <Title title={lessonName} />
      {/* 作成者がレッスンページを開くと、レッスン編集ボタンが表示される
      リンクは今のところマイページにしてある */}
      {email == createrId ? (
        <EditBtn />
      ) : (
        <BuyBtn
          lessonId={router.query.lessonId}
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
