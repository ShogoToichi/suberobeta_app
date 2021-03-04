//メッセージ送信フォーム
//message/[lessonId]でインポート

import React, { useState } from "react"
import { connect } from "react-redux"
import firebase from "firebase"
import { useRouter } from "next/router"
import Lib from "../../Lib/address_lib"
import TextBox from "./parts/TextBox"
import AddButton from "./parts/AddButton"

function MessageAdd(props) {
  //使用するステートの設定(Hook)
  const [message, setMessage] = useState("")
  const [userFilter, setUserfilter] = useState("")

  //inputに入力された処理をeで受け取ってステートに入れる関数
  const doChangeMessage = (e) => {
    setMessage(e.target.value)
  }

  const router = useRouter()

  //追加ボタンを押したらfirebaseにステートの情報を書き込む処理
  //addで追加しているから、ドキュメントidはユニークなidが自動で当てられる
  const doSubmit = async () => {
    const db = firebase.firestore()
    const email = Lib.encodeEmail(props.email)
    const buyerEmail = Lib.encodeEmail(router.query.buyerId)
    await db
      //messageサブコレクションを参照するために必要なmessages内のドキュメントのidを先に参照している
      .collection("messages")
      .where("lessonId", "==", router.query.lessonId)
      .where("buyerId", "==", router.query.buyerId)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          console.log(router.query.lessonId)
          console.log(router.query.buyerId)
          const id = doc.id
          db.collection("messages")
            .doc(id) //先に取得したIDを使ってサブコレクションを参照
            .collection("message")
            .add({
              userId: email,
              text: message,
              time: firebase.firestore.FieldValue.serverTimestamp()
            })
            //テキストボックスを空にする
            .then(() => {
              setMessage("")
            })
        })
      })
    //userFilterのTorFを、マテリアルUIのdisabled属性に用いて、
    //作成者、購入者以外にフォームを表示しなくする
    if (email == props.createrId || email == buyerEmail) {
      setUserfilter(false)
    } else {
      setUserfilter(true)
    }
  }

  return (
    <>
      <TextBox
        onChange={doChangeMessage}
        value={message}
        disabled={userFilter}
      />
      <AddButton onClick={doSubmit} disabled={userFilter} />
    </>
  )
}

MessageAdd = connect((state) => state)(MessageAdd)
export default MessageAdd
