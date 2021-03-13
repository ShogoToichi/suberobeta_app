import React, { useState, useEffect } from "react"
import firebase from "firebase"
import "firebase/storage"
import MessageLink from "./parts/MessageLink"
import { connect } from "react-redux"
import Lib from "../../Lib/address_lib"
import MyMessageListUi from "./parts/MyMessageListUi"

let myMessages = "no item"
let buyMessages = "no item"
function MyMessageList(props) {
  //最終的に表示するJSXの配列を入れるステート
  const [update, setUpdate] = useState(false)

  const getFireData = async () => {
    const db = firebase.firestore()
    const myMessageItems = []
    const buyMessageItems = []
    const email = Lib.encodeEmail(props.email)
    //自分が作成したレッスンで現在進行中のものを取得
    if (props.login) {
      await db
        .collection("messages")
        .where("createrId", "==", email)
        .where("trading", "==", true)
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            myMessageItems.push(
              <MessageLink
                lessonId={doc.data().lessonId}
                buyerId={doc.data().buyerId}
                lessonName={doc.data().lessonName}
                username={doc.data().buyerName}
                readMessage={doc.data().createrReadMessage} //既読判別用の値、自分がクリエーターのレッスンはreadMessageにcreaterReadMessageを渡す
              />
            )
          })
          myMessages = myMessageItems
        })
      //自分が購入したレッスンで現在進行中のものを取得
      await db
        .collection("messages")
        .where("buyerId", "==", email)
        .where("trading", "==", true)
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            buyMessageItems.push(
              <MessageLink
                lessonId={doc.data().lessonId}
                buyerId={doc.data().buyerId}
                lessonName={doc.data().lessonName}
                username={doc.data().createrName}
                readMessage={doc.data().buyerReadMessage} //既読判別用の値、自分が購入者のレッスンはreadMessageにbuyerReadMessageを渡す
                key={doc.id.toString()}
              />
            )
          })
          buyMessages = buyMessageItems
        })
    } else {
      //ログインしてないとメッセージが表示しなくなってる、なんでこんなこと書いたんだっけ。
      myMessages = "取引中のメッセージはありません"
    }
    setUpdate(update ? false : true)
  }

  useEffect(() => {
    getFireData()
  }, [])

  // 取得した2つのステートの値を一つの配列にする処理
  let items = myMessages.concat(buyMessages)

  return <MyMessageListUi items={items} />
}

MyMessageList = connect((state) => state)(MyMessageList)
export default MyMessageList
