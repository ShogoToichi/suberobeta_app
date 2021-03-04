//基本的には<LessonList/>と同じなのでそちらを参照
//.whereでレッスン購入者とReduxのemailが一致するデータを参照

import React, { useState } from "react"
import firebase from "firebase"
import "firebase/storage"
import MyLesson from "./parts/MyLesson"
import { connect } from "react-redux"
import Lib from "../../Lib/address_lib"
import { makeStyles } from "@material-ui/styles"
import Box from "@material-ui/core/Box"
import Typography from "@material-ui/core/Typography"
import MyBuyLessonListUi from "./parts/MyBuyLessonListUi"

let items = "no item"

function MyBuyLessonList(props) {
  // const [items, setItems] = useState("no item")
  const [update, setUpdate] = useState(false)

  const getFireData = async () => {
    const db = firebase.firestore()
    const lessonData = []
    const lessonId = []
    const lessonItems = []
    const email = Lib.encodeEmail(props.email)

    if (props.login) {
      await db
        .collection("lessons")
        .where("buyerId", "==", email)
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            lessonData.unshift(doc.data())
            lessonId.unshift(doc.id)
          })
          for (let i in lessonId) {
            let lessonId = lessonId[i]
            let lessonName = lessonData[i].lessonName
            let lessonPlace = lessonData[i].lessonPlace
            let lessonTime = lessonData[i].lessonTime
            let lessonDescription = lessonData[i].lessonDescription
            let lessonPrice = lessonData[i].lessonPrice
            lessonItems.push(
              <MyLesson
                lessonId={lessonId}
                lessonName={lessonName}
                lessonPlace={lessonPlace}
                lessonTime={lessonTime}
                lessonDescription={lessonDescription}
                lessonPrice={lessonPrice}
              />
            )
          }
          // setItems(lessonItems)
          items = lessonItems
        })
    } else {
      items = "購入済みのレッスンはありません"
      // setItems("購入済みのレッスンはありません")
    }
    setUpdate(update ? false : true)
  }

  if (items == "no item") {
    getFireData()
  }

  return <MyBuyLessonListUi items={items} />
}

MyBuyLessonList = connect((state) => state)(MyBuyLessonList)
export default MyBuyLessonList
