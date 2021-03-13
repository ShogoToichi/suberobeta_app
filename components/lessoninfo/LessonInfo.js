import React, { useState, useEffect } from "react"
import firebase from "firebase"
import { useRouter } from "next/router"
import { connect } from "react-redux"
import LessonDetail from "./parts/LessonDetail"
import Title from "../commonParts/Title"
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
let lessonId

function LessonInfo(props) {
  //強制レンダリング用ステート
  const [update, setUpdata] = useState(false)
  const router = useRouter()
  const db = firebase.firestore()
  const email = props.email

  //lessondata及びlessoncreaterのprofileを取得
  const getLessonData = async () => {
    //router.query.lessonidでページのurlの末尾を取得
    lessonId = router.query.lessonid
    await db
      .collection("lessons")
      .doc(lessonId)
      .get()
      //取得したデータをlessondataにしまってから、それを変数に突っ込む
      .then((doc) => {
        lessonData = doc.data()
        createrId = lessonData.createrId
        lessonName = lessonData.lessonName
        lessonPlace = lessonData.lessonPlace
        lessonTime = lessonData.lessonTime.split("T").join(" ")
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

    //関数の最後で強制的にレンダリング
    setUpdata(update ? false : true)
  }

  //firebaseのmessagesに必要な情報を書き込む
  const doBuy = async () => {
    //購入したときに購入者の名前もfirebaseに書き込みたいから取得する
    await db
      .collection("users")
      .doc(email)
      .get()
      .then((doc) => {
        buyerName = doc.data().profile.name
      })

    await db.collection("messages").add({
      lessonId: lessonId,
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
    router.push(`/message/${lessonId}/${email}`)
  }

  useEffect(() => {
    getLessonData()
  }, [])

  return (
    <Grid container spacing={1} direction="row" justify="center">
      {/* クリエーターIDとじぶんのIDが一致していたらレッスン編集ボタンを表示 */}

      <Title title={lessonName} />

      <Grid item xs={10} sm={10} md={2} lg={2}>
        <CreatorInfo />
      </Grid>
      <Grid item xs={10} sm={10} md={7} lg={7}>
        <LessonDetail
          createrImageUrl={createrImageUrl}
          createrName={createrName}
          lessonPrice={lessonPrice}
          lessonPlace={lessonPlace}
          lessonTime={lessonTime}
          lessonDescription={lessonDescription}
          userId={createrId}
          lessonId={lessonId}
          buyerId={email}
          createrId={createrId}
          isLogin={props.login}
          onClick={doBuy}
        />
      </Grid>
    </Grid>
  )
}

LessonInfo = connect((state) => state)(LessonInfo)
export default LessonInfo
