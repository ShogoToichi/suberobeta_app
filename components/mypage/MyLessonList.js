//基本的には<LessonList/>と同じなのでそちらを参照
//.whereでレッスン作成者とReduxのemailが一致するデータを参照

import React, { useState, useEffect } from "react"
import firebase from "firebase"
import "firebase/storage"
import MyLesson from "./parts/MyLesson"
import { connect } from "react-redux"
import MyLessonListUi from "./parts/MyLessonListUi"

let items = "no item"

function MyLessonList(props) {
  const [update, setUpdate] = useState(false)

  const getFireData = async () => {
    const db = firebase.firestore()
    const lessonItems = []
    const email = props.email

    if (props.login) {
      await db
        .collection("lessons")
        .where("createrId", "==", email)
        .orderBy("createdAt", "desc")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            lessonItems.push(
              <MyLesson
                lessonId={doc.id}
                lessonName={doc.data().lessonName}
                lessonPlace={doc.data().lessonPlace}
                key={doc.id.toString()}
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

  return <MyLessonListUi items={items} />
}

MyLessonList = connect((state) => state)(MyLessonList)
export default MyLessonList
