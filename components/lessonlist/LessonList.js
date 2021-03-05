import React, { useEffect, useState } from "react"
import firebase from "firebase"
// import "firebase/storage";
import Lesson from "./parts/Lesson"
import Title from "../commonParts/Title"

const LessonList = () => {
  //ステートの設定
  const [items, setItems] = useState("no item")

  //lessonitemsは値を渡された<Lesson/>が要素の配列ををいったん保管する
  const getFireData = async () => {
    const db = firebase.firestore()
    const lessonItems = []

    await db
      .collection("lessons")
      .orderBy("createdAt", "desc")
      .get()
      .then((querySnapshot) => {
        // 受け取ったオブジェクトの配列に対して、forEachで繰り返し処理でレッスンコンポーネントに値を渡し、それをlessonitemsにpushする
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
        //最後にlessonitemsをステートにいれる
        setItems(lessonItems)
      })
  }

  useEffect(() => {
    getFireData()
  }, [])

  return (
    <>
      <Title
        title={"レッスン一覧"}
        subTitle={"時間や場所、レベルなど自分に合ったレッスンを見つけよう"}
      />
      {items}
    </>
  )
}

export default LessonList
