import React, { useEffect, useState } from "react"
import firebase from "firebase"
// import Lesson from "./parts/Lesson"
import Title from "../commonParts/Title"
import { borderRadius } from "@material-ui/system"
import { red } from "@material-ui/core/colors"
import { CenterFocusStrong } from "@material-ui/icons"
import zIndex from "@material-ui/core/styles/zIndex"

let hits = []

const LessonList = () => {
  var nGram = require("n-gram")
  //ステートの設定
  const [items, setItems] = useState("")
  const [searching, setSearching] = useState(false)
  const [focus,setFocus] = useState(false)

  const doChange = async (e) => {
    let word = e.target.value
    let searchWords = nGram(2)(word)
    console.log(word, searchWords)
    const db = firebase.firestore()
    const lessonItems = []
    if (searchWords.length > 0) {
      setSearching(true)
      let query = db.collection("skiResorts").limit(10)

      searchWords.forEach((word) => {
        query = query.where(`tokenMap.${word}`, "==", true)
      })
      const snap = await query.get()
      hits = []
      snap.forEach(async (doc) => {
        hits.push(
          <a
          className="search"
            href={`/lesson_search/skiResorts/${doc.id}`}
          >
            {doc.data().name}
          </a>
        )
      })
      if (hits.length > 0) {
        setItems(hits)
      } else {
        setItems(<p style={{ color: "#888" }}>該当結果なし</p>)
      }
      hits = ""
      word = ""
      searchWords = []
    } else {
      setItems()
      setSearching(false)
    }
  }
  const onFocus = ()=>{
    setFocus(true);
  }
  const onBlur= ()=>{
    let timeout=""
   timeout = setTimeout(()=>{setFocus(false)},200)
  }

  return (
    <>
      <Title title={"検索機能デモ"} />
      <br />
      <div style={{position:"relative",zIndex:"10" }}>
      <input type="text" onChange={doChange} className="input" onFocus={onFocus} onBlur={onBlur}></input>
      <div className="underline"></div>
      </div>
      <br />
      {focus?(
      searching ? (
        <div
          style={{
            textAlign: "center",
            width: "280px",
            margin: "0 auto",
            boxShadow: "2px 10px 10px 0 #BBB",
            borderRadius: "5px",
            border: "solid 1pt #FFF",
            zIndex:"8",
            backgroundColor:"white",
            opacity:"1",
          }}
        >
          {items}
        </div>
      ) : (
        <>{items}</>
      )):(
        <></>
      )}
      <br />
    </>
  )
}

export default LessonList
