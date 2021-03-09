import React, { useState, useEffect } from "react"
import { useRouter } from "next/router"
import firebase from "firebase"
import "firebase/storage"
import Lesson from "../../lessonList/parts/Lesson"
import Title from "../../commonParts/Title"

let skiResortName = ""
let prefecture = ""
let area = ""
const lessonItems = []

function SearchLessonList(props) {
  const [items, setItems] = useState("")
  const router = useRouter()

  const getFireData = async () => {
    const db = firebase.firestore()

    //skiresortidからスキー場データ取得
    await db
      .collection("skiResorts")
      .doc(router.query.skiresortid)
      .get()
      .then((doc) => {
        skiResortName = doc.data().name
        prefecture = doc.data().prefecture
        area = doc.data().area
      })

    //レッスンデータを取得
    await db
      .collection("lessons")
      .where("skiResort", "==", skiResortName)
      .orderBy("createdAt", "desc")
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach((doc) => {
          lessonItems.push(
            <Lesson
              createrImageUrl={doc.data().createrImageUrl}
              lessonId={doc.id}
              lessonName={doc.data().lessonName}
              lessonPlace={doc.data().lessonPlace}
              lessonTime={doc.data().lessonTime}
              lessonDescription={doc.data().lessonDescription}
              lessonPrice={doc.data().lessonPrice}
            />
          )
        })
      })
    setItems(lessonItems)
  }

  useEffect(() => {
    getFireData()
  }, [])

  return (
    <div>
      <Title title={`${skiResortName}のレッスン一覧`}></Title>
      {items}
    </div>
  )
}

export default SearchLessonList
