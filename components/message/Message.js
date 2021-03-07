//firebase呼び出す回数が明らかに多いから、どうにか改善しなきゃ
//少なくともmessageコレクションを呼び出すのに、messagesコレクションを参照する必要があるのは、頭悪そうだし、すぐ治せそうだから直そう
//まあとりあえず使えればいっかって感じで

import React, { useEffect, useState } from "react"
import firebase from "firebase"
import { useRouter } from "next/router"
import Lib from "../../Lib/address_lib"
import { connect } from "react-redux"
import MessageAdd from "./MessageAdd"
import Chat from "./parts/Chat"
import Title from "../commonParts/Title"
import getProfileImageUrl from "../commonParts/getProfileImageUrl"

let createrId = ""
let lessonName = ""
let createrName = ""
let buyerName = ""
let createrImage = ""
let buyerImage = ""
let messageId = ""

function Message(props) {
  //最後にチャットコンポーネントをまとめた配列を入れるためのステート
  const [messages, setMessages] = useState("")

  //↑のステートに入れる前にいったん値を入れるもの
  const messageItems = []

  const router = useRouter()
  const email = Lib.encodeEmail(props.email)
  const buyerId = router.query.buyerid
  const db = firebase.firestore()

  //lessondata及びmessageを取得
  const getMessageData = async () => {
    await db
      .collection("messages")
      .where("lessonId", "==", router.query.lessonid)
      .where("buyerId", "==", router.query.buyerid)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          createrId = doc.data().createrId
          lessonName = doc.data().lessonName
          messageId = doc.id //messageIdはmessagesコレクションの中で自動生成されたID
        })
      })

    //作成者の情報を取得
    await db
      .collection("users")
      .doc(createrId)
      .get()
      .then(async (doc) => {
        const createrData = doc.data()
        createrName = createrData.profile.name
        createrImage = await getProfileImageUrl(createrData.imageName)
      })

    //購入者の情報を取得
    await db
      .collection("users")
      .doc(buyerId)
      .get()
      .then(async (doc) => {
        const buyerData = doc.data()
        buyerName = buyerData.profile.name
        buyerImage = await getProfileImageUrl(buyerData.imageName)
      })

    // メッセージ情報の取得
    await db
      .collection("messages")
      .doc(messageId)
      .collection("message")
      .orderBy("time") //orderBy(time)で時間の古い順に並べる
      .get()
      //取得したデータをmessagedata配列に入れる。
      //繰り返し処理でChatコンポーネントに値を渡して、そのチャットコンポーネントをmessageitems配列にまとめていく
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
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
      })
    //ページが再レンダリングされる（新しいメッセージが画面に表示される）とそのページを開いている人のReadMessageをtrueにする
    if (email == createrId) {
      db.collection("messages").doc(messageId).set(
        {
          createrReadMessage: true
        },
        { merge: true }
      )
    } else {
      db.collection("messages").doc(messageId).set(
        {
          buyerReadMessage: true
        },
        { merge: true }
      )
    }
    //作成者、購入者以外メッセージが見れないようにする
    if (email == createrId || email == buyerId) {
      setMessages(messageItems)
    } else {
      const errorMessage = <p>ご利用いただけません</p>
      setMessages(errorMessage)
    }
  }

  useEffect(() => {
    getMessageData()
  })

  return (
    <div>
      <Title title={lessonName} />
      {messages}
      <MessageAdd createrId={createrId} />
    </div>
  )
}

Message = connect((state) => state)(Message)
export default Message
