import React, { useEffect, useState } from "react"
import firebase from "firebase"
import Lesson from "./parts/Lesson"
import Title from "../commonParts/Title"
import SearchCard from "./SearchCard"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import { Hidden } from "@material-ui/core"


const LessonList = () => {
  //ステートの設定
  const [items, setItems] = useState("no item")
  const lessonItems = []

  //lessonitemsは値を渡された<Lesson/>が要素の配列ををいったん保管する
  const getFireData = async () => {
    const db = firebase.firestore()

    await db
      .collection("lessons")
      .orderBy("createdAt", "desc")
      .get()
      .then((querySnapshot) => {
        // 受け取ったオブジェクトの配列に対して、forEachで繰り返し処理でレッスンコンポーネントに値を渡し、それをlessonitemsにpushする
        querySnapshot.forEach((doc) => {
          lessonItems.push(
            <Lesson
              createrName={doc.data().createrName}
              lessonId={doc.id}
              createrImageUrl={doc.data().createrImageUrl}
              createrId={doc.data().createrId}
              lessonName={doc.data().lessonName}
              lessonPlace={doc.data().lessonPlace}
              lessonTime={doc.data().lessonTime.split("T").join(" ")}
              lessonDescription={doc.data().lessonDescription}
              lessonPrice={doc.data().lessonPrice}
              tagLabel1={"女性大歓迎"}
              tagLabel2={"初心者お断り"}
              tagLabel3={"レンタル付き"}
              key={doc.id.toString()}
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
    <>
      <Title
        title={"レッスン一覧"}
        subTitle={"時間や場所、レベルなど自分に合ったレッスンを見つけよう"}
      />
      <Grid container spacing={2} deraction="row" justify="center">
        <Grid item xs={11} sm={10} lg={3}>
          <SearchCard searchingSkiResortName="" />
        </Grid>
        <Hidden lgUp>
          <Grid item xs={8}>
            <Typography variant="h5" style={{ marginTop: "2rem", fontWeight: "bold", color: "#062"}}>
              新着のレッスン
            </Typography>
          </Grid>
        </Hidden>
        <Grid item xs={11} sm={10} lg={7}>
          {items}
        </Grid>
      </Grid>
    </>
  )
}

export default LessonList
