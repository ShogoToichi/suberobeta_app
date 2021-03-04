import React, { useState } from "react"
import firebase from "firebase"
// import "firebase/storage";
import Lesson from "./parts/Lesson"
import Title from "../normal_parts/Title"

function LessonList() {
  //ステートの設定
  const [items, setItems] = useState("no item")

  //lessonitemsは値を渡された<Lesson/>が要素の配列ををいったん保管する
  const getFireData = async () => {
    const db = firebase.firestore()
    const lessonitems = []
    await db
      .collection("lessons")
      .get()
      .then(function (querySnapshot) {
        // 受け取ったオブジェクトの配列に対して、forEachで繰り返し処理でレッスンコンポーネントに値を渡し、それをlessonitemsにpushする
        querySnapshot.forEach(function (doc) {
          lessonitems.push(
            <Lesson
              lessonid={doc.id}
              name={doc.data().lessonname}
              place={doc.data().lessonplace}
              time={doc.data().lessontime}
              text={doc.data().lessontext}
              price={doc.data().lessonprice}
            />
          )
        })
        //最後にlessonitemsをステートにいれる
        setItems(lessonitems)
      })
  }

  if (items == "no item") {
    getFireData()
  }

  return (
    <div>
      <Title
        title={"レッスン一覧"}
        subtitle={"時間や場所、レベルなど自分に合ったレッスンを見つけよう"}
      />
      {items}
    </div>
  )
}

export default LessonList
