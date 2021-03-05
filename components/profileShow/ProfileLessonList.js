//基本的には<MyLessonList/>と同じなのでそちらを参照
//.whereでレッスン作成者とReduxのemailが一致するデータを参照

import React, { useState, useEffect } from "react"
import firebase from "firebase"
import "firebase/storage"
import ProfileLesson from "./parts/ProfileLesson"
import { connect } from "react-redux"
import Lib from "../../Lib/address_lib"
import ProfileLessonListUi from "./parts/ProfileLessonListUi"
import { useRouter } from "next/router"

let items = "no item"

function ProfileLessonList(props) {
  const [update, setUpdate] = useState(false)
  const db = firebase.firestore()
  const router = useRouter()
  const lessonItems = []
  const email = Lib.encodeEmail(props.email)

  const getFireData = async () => {
    if (props.login) {
      await db
        .collection("lessons")
        .where("createrId", "==", router.query.userid)
        .orderBy("createdAt", "desc")
        .get()
        .then(function (querySnapshot) {
          querySnapshot.forEach((doc) => {
            lessonItems.push(
              <ProfileLesson
                lessonId={doc.id}
                lessonName={doc.data().lessonName}
                lessonPlace={doc.data().lessonPlace}
              />
            )
          })
          items = lessonItems
        })
    } else {
      items = "投稿したレッスンはありません"
    }
    setUpdate(update ? false : true)
  }

  useEffect(() => {
    getFireData()
  }, [])

  return <ProfileLessonListUi items={items} />
}

ProfileLessonList = connect((state) => state)(ProfileLessonList)
export default ProfileLessonList
