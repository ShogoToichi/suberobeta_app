import React, { useState, useEffect } from "react"
import firebase from "firebase"
import { useRouter } from "next/router"
import { connect } from "react-redux"
import Lib from "../../Lib/address_lib"
import BuyBtn from "./parts/BuyBtn"
import LessonDetail from "./parts/LessonDetail"
import creatorInfo from "./CreaterInfo"
import Title from "../commonParts/Title"
import EditBtn from "./parts/EditBtn"
import CreatorInfo from "./CreaterInfo"
import getProfileImageUrl from "../commonParts/getProfileImageUrl"
import Grid from "@material-ui/core/Grid"

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
      .then(async (doc) => {
        userData = doc.data()
        createrName = userData.profile.name
        createrImageUrl = await getProfileImageUrl(userData.imageName)
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
      createrReadMessage: true,
      buyerReadMessage: true,
      trading: true //取引中かどうかの真偽値、メッセージ検索で使用中
    })
  }

  useEffect(() => {
    getLessonData()
  }, [])

  return (
    <Grid container spacing={1} deraction="row" justify="center">
      {/* クリエーターIDとじぶんのIDが一致していたらレッスン編集ボタンを表示 */}

      <Title title={lessonName} />

      <Grid item xs={8} sm={4} lg={2}>
        <CreatorInfo />
      </Grid>
      <Grid item xs={10} sm={10} lg={7} style={{position:"relative"}}>
        <LessonDetail
          createrImageUrl={createrImageUrl}
          createrName={createrName}
          lessonPrice={lessonPrice}
          lessonPlace={lessonPlace}
          lessonTime={lessonTime}
          lessonDescription={lessonDescription}
          userId={createrId}
          lessonId={router.query.lessonid}
          buyerId={email}
          createrId={createrId}
          onClick={doBuy}
        />
      </Grid>
    </Grid>
  )
}

LessonInfo = connect((state) => state)(LessonInfo)
export default LessonInfo
