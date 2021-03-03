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
    const lessondata = []
    const lessonid = []
    const lessonitems = []
    const email = Lib.encodeEmail(props.email)

    if (props.login) {
      await db
        .collection("lessons")
        .where("createrid", "==", email)
        .get()
        .then(function (querySnapshot) {
          querySnapshot.forEach(function (doc) {
            lessondata.unshift(doc.data())
            lessonid.unshift(doc.id)
          })
          for (let i in lessonid) {
            let id = lessonid[i]
            let name = lessondata[i].lessonname
            let place = lessondata[i].lessonplace
            let time = lessondata[i].lessontime
            let text = lessondata[i].lessontext
            let price = lessondata[i].lessonprice
            lessonitems.push(
              <MyLesson
                lessonid={id}
                name={name}
                place={place}
                time={time}
                text={text}
                price={price}
              />
            )
          }
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
