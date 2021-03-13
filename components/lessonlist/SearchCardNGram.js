// 現在使用していません

//参考URL : https://qiita.com/oukayuka/items/d3cee72501a55e8be44a
//ngramのソースコードも上のサイトのリンクから見れる
//リンクわかりずらそうだったから一応追加
// https://github.com/oukayuka/ReactFirebaseBook/tree/master/04-firestore/mangarel-demo/src/utils

import React, { useEffect, useState } from "react"
import firebase from "firebase"
import SearchCardDetail from "./parts/SearchCardDetail"

let hits = []

const LessonList = () => {
  //ざっくりimportみたいなもの、気になる人はrequireで検索
  var nGram = require("n-gram")
  //ステートの設定
  const [items, setItems] = useState("")
  const [searching, setSearching] = useState(false) //入力中かどうかの真偽値
  const [focus, setFocus] = useState(false) //入力にフォーカスしているか

  // 入力された時の処理
  const doChange = async (e) => {
    let word = e.target.value
    //入力された単語から二文字ずつ分割された配列を作成、詳しくはURLを参照
    let searchWords = nGram(2)(word)
    const db = firebase.firestore()
    //二文字以上入力があるかで分岐(searchWordsは二文字入力があると配列に一つ目の要素が入る)
    if (searchWords.length > 0) {
      setSearching(true)
      let query = db.collection("skiResorts").limit(10)

      searchWords.forEach((word) => {
        query = query.where(`tokenMap.${word}`, "==", true)
        //tokenmapの中身はfirebase参照
        //forEachが回るとqueryがどんどん長くなる、AND検索になる
        //exa.)query=db.collection(--).limit(-).where(--).where(--).where(--).wh...
      })
      // データ取得
      const snap = await query.get()
      hits = []
      snap.forEach(async (doc) => {
        hits.push(
          <a className="search" href={`/lesson_search/skiResorts/${doc.id}`}>
            {doc.data().name}
          </a>
        )
      })
      // 検索結果の有無で表示の変更
      if (hits.length > 0) {
        setItems(hits)
      } else {
        setItems(<p style={{ color: "#888" }}>該当結果なし</p>)
      }
      //検索結果の初期化、これがないと検索結果が無限に重複して増えていく
      hits = ""
      word = ""
      searchWords = []
    } else {
      setItems()
      setSearching(false)
    }
  }
  //フォーカスで表示を切り替えるための処理
  const onFocus = () => {
    setFocus(true)
  }
  //フォーカスが離れたとき表示を切り替えるための処理
  //timeoutは0.2秒後に処理を開始するってやつ
  //正しくリンクに飛ぶために設定
  const onBlur = () => {
    let timeout = ""
    timeout = setTimeout(() => {
      setFocus(false)
    }, 200)
  }

  return (
    <SearchCardDetail
      onChange={doChange}
      onFocus={onFocus}
      onBlur={onBlur}
      focus={focus}
      searching={searching}
      items={items}
      tagLabel1="初心者歓迎"
      tagLabel2="家族歓迎"
      tagLabel3="上級者専用"
    />
  )
}

export default LessonList
