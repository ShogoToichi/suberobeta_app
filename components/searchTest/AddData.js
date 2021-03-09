//スキー場のデータをfirebaseに入れるためのフォーム
//ngram関連やコードの内容はスキー場検索のコンポーネント参照
//ngram関連URL : https://github.com/oukayuka/ReactFirebaseBook/tree/master/04-firestore/mangarel-demo/src/utils

import React, { useState } from "react"
import firebase from "firebase"
import Title from "../commonParts/Title"

let name = ""
let nameNgram = ""
let tokenData = {}
let prefecture = ""
let area = ""

const AddData = () => {
  var nGram = require("n-gram")

  const [update, setUpdate] = useState(true)

  const doChange = async (e) => {
    name = e.target.value
    nameNgram = nGram(2)(name)
    console.log(name, nameNgram)
    setUpdate(update ? false : true)
  }
  const doChangePrefacture = (e) => {
    prefecture = e.target.value
    console.log(prefecture)
    setUpdate(update ? false : true)
  }
  const doChangeArea = (e) => {
    area = e.target.value
    console.log(area)
    setUpdate(update ? false : true)
  }

  const doSubmit = async (e) => {
    await nameNgram.forEach((parts) => {
      tokenData[parts] = true
    })
    const db = firebase.firestore()
    await db.collection("skiResorts").add({
      name: name,
      prefecture: prefecture,
      area: area,
      tokenMap: tokenData
    })
    name = ""
    prefecture = ""
    area = ""
    tokenData = {}
    nameNgram = ""
    setUpdate(update ? false : true)
  }

  return (
    <>
      <Title
        title={"スキー場情報追加フォーム"}
        subTitle="Tabで移動、Enterで送信、Shift＋Tabで上に移動、ひたすら繰り返せ!!これは修行だ!!"
      />
      <p>スキー場名</p>
      <input type="text" onChange={doChange} value={name}></input>
      <p>都道府県</p>
      <input
        type="text"
        onChange={doChangePrefacture}
        value={prefecture}
      ></input>
      <p>エリア</p>
      <input type="text" onChange={doChangeArea} value={area}></input>
      <br />
      <button style={{ marginTop: "20px" }} onClick={doSubmit}>
        データべースに追加
      </button>
    </>
  )
}

export default AddData
