//メッセージ送信フォーム
//message/[lessonId]でインポート

import React, { useState } from "react"
import { connect } from "react-redux"
import firebase from "firebase"
import { useRouter } from "next/router"
import Lib from "../../Lib/address_lib"
import TextBox from "./parts/TextBox"
import AddButton from "./parts/AddButton"

let docid = ""

function MessageAdd(props) {
  //使用するステートの設定(Hook)
  const [message, setMessage] = useState("")
  const [userFilter, setUserfilter] = useState("")

  const router = useRouter()
  const db = firebase.firestore()
  const email = Lib.encodeEmail(props.email)
  const buyerEmail = Lib.encodeEmail(router.query.buyerid)

  //inputに入力された処理をeで受け取ってステートに入れる関数
  const doChangeMessage = (e) => {
    setMessage(e.target.value)
  }

  //追加ボタンを押したらfirebaseにステートの情報を書き込む処理
  //addで追加しているから、ドキュメントidはユニークなidが自動で当てられる
  const doSubmit = async () => {
    await db
      //messageサブコレクションを参照するために必要なmessages内のドキュメントのidを先に参照している
      .collection("messages")
      .where("lessonId", "==", router.query.lessonid)
      .where("buyerId", "==", router.query.buyerid)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          console.log(router.query.lessonid)
          console.log(router.query.buyerid)
          docid = doc.id
          db.collection("messages")
            .doc(docid) //先に取得したIDを使ってサブコレクションを参照
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

    //メッセージ一覧で時間の並び替えと未読の判別をするための処理
    await db.collection("messages").doc(docid).set(
      {
        messageTimeStamp: firebase.firestore.FieldValue.serverTimestamp(),
        createrReadMessage: false,
        buyerReadMessage: false
      },
      { merge: true }
    )
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
