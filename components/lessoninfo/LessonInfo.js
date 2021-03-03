import React, { useState } from "react"
import firebase from "firebase"
import { useRouter } from "next/router"
import { connect } from "react-redux"
import Lib from "../../Lib/address_lib"
import BuyBtn from "./parts/BuyBtn"
import LessonDitail from "./parts/LessonDitail"
import Title from "../normal_parts/Title"
import EditBtn from "./parts/EditBtn"

function LessonInfo(props) {
  // 使用するステートの定義
  const [createrid, setCreaterid] = useState("")
  const [lessonid, setLessonid] = useState("")
  const [purchased, setPurchased] = useState("")
  const [lessonname, setLessonname] = useState("")
  const [place, setPlace] = useState("")
  const [time, setTime] = useState("")
  const [price, setPrice] = useState("")
  const [lessoncomment, setLessoncomment] = useState("")
  const [profileusername, setProfileusername] = useState("")
  const [imageurl, setImageurl] = useState("")

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
      .then(function (doc) {
        const lessondata = doc.data()
        setCreaterid(lessondata.createrid)
        setLessonid(lesson_id)
        setPurchased(lessondata.purchased)
        setLessonname(lessondata.lessonname)
        setPlace(lessondata.lessonplace)
        setTime(lessondata.lessontime)
        setPrice(lessondata.lessonprice)
        setLessoncomment(lessondata.lessontext)
        console.log(createrid)
        //ここからプロフィール取得処理
        //レッスン情報で取得したcreateridでfirebaseを参照
        db.collection("users")
          .doc(createrid)
          .get()
          //if文の処理はエラーがあった時のための処理
          //ネット記事のコピペなので、必要性がどれほどあるかは謎
          .then(function (doc) {
            if (doc.exists) {
              const userdata = doc.data()
              setProfileusername(userdata.profile.name)
              setImageurl(userdata.imageurl)
            } else {
              console.log("no data")
            }
          })
          .catch(function (error) {
            console.log("Error getting document:", error)
          })
      })
  }

  //firebaseのmessagesに必要な情報を書き込む
  const email = Lib.encodeEmail(props.email)
  const dobuy = async () => {
    await db.collection("messages").add({
      lessonid: router.query.lessonid,
      buyerid: email,
      createrid: createrid,
      creatername: profileusername,
      lessonname: lessonname,
      buytime: firebase.firestore.FieldValue.serverTimestamp(),
      trading: true //取引中かどうかの真偽値、まだどこでも利用してない
    })
  }

  if (lessonname == "") {
    getLessonData()
  }

  return (
    <div style={{ marginTop: "30px" }}>
      <Title title={lessonname} />
      {/* 作成者がレッスンページを開くと、レッスン編集ボタンが表示される
      リンクは今のところマイページにしてある */}
      {email == createrid ? (
        <EditBtn />
      ) : (
        <BuyBtn
          lessonid={router.query.lessonid}
          buyerid={email}
          onClick={dobuy}
        />
      )}
      <LessonDitail
        imageurl={imageurl}
        profileusername={profileusername}
        price={price}
        place={place}
        time={time}
        lessoncomment={lessoncomment}
      />
    </div>
  )
}

LessonInfo = connect((state) => state)(LessonInfo)
export default LessonInfo
