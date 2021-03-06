import React, { useEffect, useState } from "react"
import firebase from "firebase"
import Lesson from "./lessonList/parts/Lesson"
import Title from "./commonParts/Title"

const limit = 2
const lessonItems = []
let lastVisibleTempo = null

const LessonList = () => {
  //ステートの設定
  const [items, setItems] = useState(null)
  const [lastVisible, setLastVisible] = useState(null)
    const [update,setUpdate] = useState(true)
  const db = firebase.firestore()

  //lessonitemsは値を渡された<Lesson/>が要素の配列ををいったん保管する
  const getFireData = async () => {
    await db
      .collection("lessons")
      .orderBy("createdAt", "desc")
      .limit(limit)
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
          lastVisibleTempo = doc.data().createdAt
        })
        // console.log(lastVisibleTempo)
        // console.log(lessonItems)
        setLastVisible(lastVisibleTempo)
        //最後にlessonitemsをステートにいれる
        setItems(lessonItems)
      })
  }

  const fetchMore = async () => {
    await db
      .collection("lessons")
      .orderBy("createdAt", "desc")
      .startAfter(lastVisible)
      .limit(limit)
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
          lastVisibleTempo = doc.data().createdAt
        })
        // console.log(lastVisibleTempo)
        // console.log(lessonItems)
      })
      setLastVisible(lastVisibleTempo)
      //最後にlessonitemsをステートにいれる
      setItems(lessonItems)
      setUpdate(update?false:true)
      }
      
      // setUpdate(update?false:true)
  useEffect(() => {
    if(lessonItems.length>0){
      setItems(lessonItems)
      setLastVisible(lastVisibleTempo)
      console.log(lastVisible)
      console.log(items)
      console.log(lessonItems)
    }
    else{
      getFireData()
      console.log("get initial data!")
    }
  }, [])
  
  const render=()=>{
    setItems(items)
    setUpdate(update?false:true)
    console.log(lastVisible)
    console.log(items)
    console.log(lessonItems)
    }

  return (
    <>
      <Title
        title={"レッスン一覧"}
        subTitle={"時間や場所、レベルなど自分に合ったレッスンを見つけよう"}
      />
      {items}
      <button onClick={fetchMore}>さらに見る</button>
      <button onClick={render}>レンダリング</button>
    </>
  )
}

export default LessonList
