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
    const lessonitems = []
    const email = Lib.encodeEmail(props.email)

    if (props.login) {
      await db
        .collection("lessons")
        .where("createrid", "==", email)
        .get()
        .then(function (querySnapshot) {
          querySnapshot.forEach(function (doc) {
            lessonitems.push(
              <MyLesson
              lessonid={doc.id}
              name={doc.data().lessonname}
              place={doc.data().lessonplace}
              />
              )
          })
          setItems(lessonitems)
        })
    } else {
      setItems("投稿したレッスンはありません")
    }
  }

  if (items == "no item") {
    getFireData()
  }

  return (
    <div>
      <MyLessonListUi items={items} getFireData={getFireData} />
    </div>
  )
}

MyLessonList = connect((state) => state)(MyLessonList)
export default MyLessonList
