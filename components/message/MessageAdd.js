//メッセージ送信フォーム
//message/[lessonid]でインポート

import React, { useState } from "react"
import { connect } from "react-redux"
import firebase from "../lessoninfo/node_modules/firebase"
import { useRouter } from "../lessoninfo/node_modules/next/router"
import Lib from "../../Lib/address_lib"
import TextBox from "./parts/TextBox"
import AddButton from "./parts/AddButton"

function MessageAdd(props) {
  //使用するステートの設定(Hook)
  const [message, setMessage] = useState("")
  const [userfilter, setUserfilter] = useState("")

  //inputに入力された処理をeで受け取ってステートに入れる関数
  const doChangeMessage = (e) => {
    setMessage(e.target.value)
  }

  const router = useRouter()

  //追加ボタンを押したらfirebaseにステートの情報を書き込む処理
  //addで追加しているから、ドキュメントidはユニークなidが自動で当てられる
  //Reduxからユーザーのemail(id)をencode( .→* )にして定数に代入
  const doSubmit = async () => {
    const db = firebase.firestore()
    const email = Lib.encodeEmail(props.email)
    const buyeremail = Lib.encodeEmail(router.query.buyerid)
    await db
      .collection("messages")
      .where("lessonid", "==", router.query.lessonid)
      .where("buyerid", "==", router.query.buyerid)
      .get()
      .then(function (doc) {
        const data = doc.data()
        console.log(data)
        console.log(doc.id)
        const id = doc.id
        db.collection("messages")
          .doc(id)
          .collection("message")
          .add({
            userid: email,
            text: message,
            time: firebase.firestore.FieldValue.serverTimestamp()
          })
          .then(function () {
            setMessage("")
          })
      })
    //userfilterのTorFを、マテリアルUIのdisabled属性に用いて、
    //作成者、購入者以外にフォームを表示しなくする
    if (email == props.createrid || email == buyeremail) {
      setUserfilter(false)
    } else {
      setUserfilter(true)
    }
  }

  return (
    <div>
      <TextBox
        onChange={doChangeMessage}
        value={message}
        disabled={userfilter}
      />
      <AddButton onClick={doSubmit} disabled={userfilter} />
    </div>
  )
}

MessageAdd = connect((state) => state)(MessageAdd)
export default MessageAdd
