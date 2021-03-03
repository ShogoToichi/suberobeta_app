//firebase呼び出す回数が明らかに多いから、どうにか改善しなきゃ
//少なくともmessageコレクションを呼び出すのに、messagesコレクションを参照する必要があるのは、頭悪そうだし、すぐ治せそうだから直そう
//まあとりあえず使えればいっかって感じで

import React, { useState } from "react"
import firebase from "firebase"
import { useRouter } from "next/router"
import Lib from "../../Lib/address_lib"
import { connect } from "react-redux"
import "firebase/storage"
import MessageAdd from "./MessageAdd"
import Chat from "./parts/Chat"
import Title from "../normal_parts/Title"

function Message(props) {
  //ステート定義
  const [createrid, setCreaterid] = useState("")
  const [messages, setMessages] = useState("")
  const [lessonname, setLessonname] = useState("")
  const [creatername, setCreaterName] = useState("")
  const [buyername, setBuyerName] = useState("")
  const [createrimg, setCreaterImg] = useState("")
  const [buyerimg, setBuyerImg] = useState("")

  const messageitems = []

  const router = useRouter()
  const email = Lib.encodeEmail(props.email)
  const buyerid = router.query.buyerid
  const db = firebase.firestore()

  //lessondata及びmessageを取得
  const getMessageData = async () => {
    //router.query.lessonidでレッスンIDを取得
    //先にレッスン名と作成者のidを取得
    await db
      .collection("lessons")
      .doc(router.query.lessonid)
      .get()
      //取得したデータをステートに突っ込む
      .then(function (doc) {
        const lessondata = doc.data()
        setCreaterid(lessondata.createrid)
        setLessonname(lessondata.lessonname)
      })
    //作成者の情報を取得
    await db
      .collection("users")
      .doc(createrid)
      .get()
      .then(function (doc) {
        const createrdata = doc.data()
        setCreaterName(createrdata.profile.name)
        setCreaterImg(createrdata.imageurl)
      })
    //購入者の情報を取得
    await db
      .collection("users")
      .doc(buyerid)
      .get()
      .then(function (doc) {
        const buyerdata = doc.data()
        setBuyerName(buyerdata.profile.name)
        setBuyerImg(buyerdata.imageurl)
      })

    //メッセージ情報取得処理
    //messageが入っているサブコレクションがあるドキュメントidを取得してから、messageサブコレクションを参照
    await db
      .collection("messages")
      .where("lessonid", "==", router.query.lessonid)
      .where("buyerid", "==", router.query.buyerid)
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
                if (doc.data().userid == createrid) {
                  messageitems.push(
                    <Chat
                      username={creatername}
                      imageurl={createrimg}
                      text={doc.data().text}
                    />
                  )
                } else {
                  messageitems.push(
                    <Chat
                      username={buyername}
                      imageurl={buyerimg}
                      text={doc.data().text}
                    />
                  )
                }
              })
              //作成者、購入者以外メッセージが見れないようにする
              if (email == createrid || email == buyerid) {
                setMessages(messageitems)
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
      <Title title={lessonname} />
      {messages}
      <MessageAdd createrid={createrid} />
    </div>
  )
}

Message = connect((state) => state)(Message)
export default Message
