//firebase呼び出す回数が明らかに多いから、どうにか改善しなきゃ
//少なくともmessageコレクションを呼び出すのに、messagesコレクションを参照する必要があるのは、頭悪そうだし、すぐ治せそうだから直そう
//まあとりあえず使えればいっかって感じで

import React, { useState } from "react"
import firebase from "firebase"
import { useRouter } from "next/router"
import Lib from "../../Lib/address_lib"
import { connect } from "react-redux"
import MessageAdd from "./MessageAdd"
import Chat from "./parts/Chat"
import Title from "../commonParts/Title"


// let createrId = ""
// let messages = ""
// let lessonName =""
// let createrName = ""
// let buyerName = ""
// let createrImage = ""
// let buyerImage = ""

function Message(props) {
  //ステート定義
  const [createrId, setCreaterId] = useState("")
  const [messages, setMessages] = useState("")
  const [lessonName, setLessonName] = useState("")
  const [createrName, setCreaterName] = useState("")
  const [buyerName, setBuyerName] = useState("")
  const [createrImage, setCreaterImage] = useState("")
  const [buyerImage, setBuyerImage] = useState("")

  const messageItems = []

  const router = useRouter()
  const email = Lib.encodeEmail(props.email)
  const buyerId = router.query.buyerId
  const db = firebase.firestore()

  //lessondata及びmessageを取得
  const getMessageData = async () => {
    //router.query.lessonidでレッスンIDを取得
    //先にレッスン名と作成者のidを取得
    await db
      .collection("lessons")
      .doc(router.query.lessonId)
      .get()
      //取得したデータをステートに突っ込む
      .then(function (doc) {
        const lessonData = doc.data()
        setCreaterId(lessonData.createrId)
        setLessonName(lessonData.lessonName)
        console.log(createrId)
      })
    //作成者の情報を取得
    await db
      .collection("users")
      .doc(createrId)
      .get()
      .then(function (doc) {
        const createrData = doc.data()
        setCreaterName(createrData.profile.name)
        setCreaterImage(createrData.imageUrl)
        console.log(createrName)
      })
    //購入者の情報を取得
    await db
      .collection("users")
      .doc(buyerId)
      .get()
      .then(function (doc) {
        const buyerData = doc.data()
        setBuyerName(buyerData.profile.name)
        setBuyerImage(buyerData.imageUrl)
      })

    //メッセージ情報取得処理
    //messageが入っているサブコレクションがあるドキュメントidを取得してから、messageサブコレクションを参照
    await db
      .collection("messages")
      .where("lessonId", "==", router.query.lessonId)
      .where("buyerId", "==", router.query.buyerId)
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          db.collection("messages")
            .doc(doc.id) //取得したidを使う
            .collection("message")
            .orderBy("time") //orderBy(time)で時間の古い順に並べる
            .get()
            //取得したデータをmessagedata配列に入れる。
            //繰り返し処理でChatコンポーネントに値を渡して、そのチャットコンポーネントをmessageitems配列にまとめていく
            .then(function (querySnapshot) {
              querySnapshot.forEach(function (doc) {
                //メッセージを送った人のidと作成者のidを比較して、名前とアイコンの表示を変える
                if (doc.data().userId == createrId) {
                  messageItems.push(
                    <Chat
                      userName={createrName}
                      imageUrl={createrImage}
                      text={doc.data().text}
                    />
                  )
                } else {
                  messageItems.push(
                    <Chat
                      userName={buyerName}
                      imageUrl={buyerImage}
                      text={doc.data().text}
                    />
                  )
                }
              })
              //作成者、購入者以外メッセージが見れないようにする
              if (email == createrId || email == buyerId) {
                setMessages(messageItems)
              } else {
                const errorMessage = <p>ご利用いただけません</p>
                setMessages(errorMessage)
              }
            })
        })
      })
  }

  return (
    <div>
      <button onClick={getMessageData} style={{ display: "block" }}>
        読み込み
      </button>
      <Title title={lessonName} />
      {messages}
      <MessageAdd createrId={createrId} />
    </div>
  )
}

Message = connect((state) => state)(Message)
export default Message
