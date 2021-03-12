//基本的には<LessonList/>と同じなのでそちらを参照
//.whereでレッスン作成者とReduxのemailが一致するデータを参照

import React, { useState, useEffect } from "react"
import firebase from "firebase"
import "firebase/storage"
import MyLesson from "./parts/MyLesson"
import { connect } from "react-redux"
import Lib from "../../Lib/address_lib"
import MyLessonListUi from "./parts/MyLessonListUi"

let items = "no item"

function MyLessonList(props) {
  // const [items, setItems] = useState("no item")
  const [update, setUpdate] = useState(false)

  const getFireData = async () => {
    const db = firebase.firestore()
    const lessonItems = []
    const email = Lib.encodeEmail(props.email)

    if (props.login) {
      await db
        .collection("lessons")
        .where("createrId", "==", email)
        .orderBy("createdAt", "desc")
        .get()
        .then(function (querySnapshot) {
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
          // setItems(lessonItems)
          items = lessonItems
        })
    } else {
      // setItems("投稿したレッスンはありません")
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
