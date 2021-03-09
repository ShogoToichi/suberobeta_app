import React, { useState, useEffect } from "react"
import firebase from "firebase"
import { useRouter } from "next/router"
import { connect } from "react-redux"
import Lib from "../../Lib/address_lib"
import CreaterDetail from "./parts/CreaterDetail"
import getProfileImageUrl from "../commonParts/getProfileImageUrl"

let createrId = ""
let createrName = ""
let createrIntroduction= ""
let createrImageUrl = ""
let lessonData = ""
let userData = ""

function CreaterInfo(props) {
  const email = Lib.encodeEmail(props.email)

  //強制レンダリング用ステート
  const [update, setUpdata] = useState(false)

  const db = firebase.firestore()
  const router = useRouter()

  //lessonData及びlessoncreaterのprofileを取得
  const getCreaterData = async () => {
    //router.query.lessonidでページのurlの末尾を取得
    await db
      .collection("lessons")
      .doc(router.query.lessonid)
      .get()
      //取得したデータをlessonDataにしまってから、それを変数に突っ込む
      .then((doc) => {
        lessonData = doc.data()
        createrId = lessonData.createrId
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
        createrIntroduction = userData.profile.introduction
        createrImageUrl = await getProfileImageUrl(userData.imageName)
      })

    //関数の最後で強制的にレンダリング
    setUpdata(update ? false : true)
  }

  useEffect(() => {
    getCreaterData()
  }, [])

  return <CreaterDetail imageUrl={createrImageUrl} name={createrName} userId={createrId} introduction={createrIntroduction}/>
}

CreaterInfo = connect((state) => state)(CreaterInfo)
export default CreaterInfo
