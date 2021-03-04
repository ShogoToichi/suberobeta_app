//基本的には<LessonList/>と同じなのでそちらを参照
//.whereでレッスン作成者とReduxのemailが一致するデータを参照

import React, { useState } from "react"
import firebase from "firebase"
import "firebase/storage"
import MyLesson from "./parts/MyLesson"
import { connect } from "react-redux"
import Lib from "../../Lib/address_lib"
import MyLessonListUi from "./parts/MyLessonListUi"

function MyLessonList(props) {
  const [items, setItems] = useState("no item")

  const getFireData = async () => {
    const db = firebase.firestore()
    const lessonItems = []
    const email = Lib.encodeEmail(props.email)

    if (props.login) {
      await db
        .collection("lessons")
        .where("createrId", "==", email)
        .get()
        .then(function (querySnapshot) {
          querySnapshot.forEach((doc) => {
            lessonItems.push(
              <MyLesson
                lessonId={doc.id}
                lessonName={doc.data().lessonName}
                lessonPlace={doc.data().lessonPlace}
              />
            )
          })
          setItems(lessonItems)
        })
    } else {
      setItems("投稿したレッスンはありません")
    }
  }

  if (items == "no item") {
    getFireData()
  }

  return (
    <>
      <MyLessonListUi items={items} getFireData={getFireData} />
    </>
  )
}

MyLessonList = connect((state) => state)(MyLessonList)
export default MyLessonList
